
// ekei pou ua xrisimopoiithoun tha prepei na exw diorthwsei tis diastaseiw apo xiliosta se metra

export function earthMoment(layers){
    let moment = 0
    // console.log(layers)
    for (let layer of layers){
        let stresses = layer.stresses
        moment += stresses.surcharge.totalStress*stresses.surcharge.loadingPoint +
                    stresses.selfweight.totalStress*stresses.selfweight.loadingPoint + 
                    stresses.water.totalStress*stresses.water.loadingPoint
    }
    // console.log(layers)
    return moment
}


export function earthPressure(layers, surcharge, wDepth, actpas){
    layers = surfaceStress(layers, surcharge, actpas)
    layers = waterStress(layers)
    layers = weightStress(layers, wDepth, actpas)
    return layers
}

export function surfaceStress(layers, surcharge, actpas){
    layers.map(layer => {
        //active or passive coefficient Ka or Kp
        let Kap = getCoefK(layer, actpas)
        let stress = Kap*surcharge
        layer.stresses.surcharge = {topStressHor:stress,
                                bottomStressHor:stress,
                                totalStress:stress,
                                loadingPoint:(layer.top - layer.bottom)/2}
    })
    //adds the lower layers' heights to the upper loading point 
    for(let i = layers.length-2; i>-1; i--){
        layers[i].stresses.surcharge.loadingPoint += (layers[i+1].top - layers[i+1].bottom)
    }
    return layers
}

export function waterStress(layers){
    // let bottomlayer = layers[layers.length - 1]
    let waterDensity = 10 // PROSOXH ISWS NA MHN EINAI H IDIA PANTA
    
    layers.map((layer, index) => {
        let topStressHor, bottomStressHor, totalStress, loadingPoint
        if(layer.inwater){
            let previouslayer = layers[index - 1]
            //top and bottom horizontal stresses for the in-water layers
            topStressHor = previouslayer ? previouslayer.stresses.water.bottomStressHor : 0
            bottomStressHor = (layer.top - layer.bottom) * waterDensity + topStressHor
            
            //synoliko stress (emvadon sximatos)
            totalStress = (layer.top - layer.bottom)*(topStressHor + bottomStressHor)/2

            //loading point (measured from bottom of each layer)
            loadingPoint = ((layer.top - layer.bottom)*(2 * topStressHor + bottomStressHor)) /
                                (3 * (topStressHor + bottomStressHor))
        }else{
            topStressHor = bottomStressHor = totalStress = loadingPoint = 0
        }
        layer.stresses.water = {topStressHor,
                                bottomStressHor,
                                totalStress,
                                loadingPoint}
    })
    return layers
}

export function weightStress(layers, wDepth, actpas){
    let waterDensity = 10 // PROSOXH ISWS NA MHN EINAI H IDIA PANTA
    let bottomlayer = layers[layers.length - 1]
    let totalDepth = bottomlayer.bottom
    if (totalDepth>wDepth){
        layers = splitLayer(layers,wDepth)
    }
    layers.map((layer, index)=>{
        let topStress, bottomStress, topStressHor, bottomStressHor, totalStress, loadingPoint
        //vertical Stress
        let previouslayer = layers[index - 1]
        topStress = previouslayer ? previouslayer.stresses.selfweight.bottomStress - previouslayer.stresses.water.bottomStressHor : 0
        bottomStress = layer.inwater ?
                            (layer.top - layer.bottom) * layer.density + topStress - (totalDepth - wDepth) * waterDensity :
                            (layer.top - layer.bottom) * layer.density + topStress
        //active or passive coefficient Ka or Kp
        let Kap = getCoefK(layer, actpas)

        //horizontal Stress
        topStressHor = Kap*topStress
        bottomStressHor = Kap*bottomStress
        //synoliko stress (emvadon sximatos)
        totalStress = (layer.top - layer.bottom)*(topStressHor + bottomStressHor)/2

        //loading point (measured from bottom of each layer)
        loadingPoint = ((layer.top - layer.bottom)*(2 * topStressHor + bottomStressHor)) /
                        (3 * (topStressHor + bottomStressHor))
        
        layer.stresses.selfweight = {topStress,
                                    bottomStress,
                                    topStressHor,
                                    bottomStressHor,
                                    totalStress,
                                    loadingPoint}
    })
        //adds the lower layers' heights to the upper loading point 
    for(let i = layers.length-2; i>-1; i--){
        layers[i].stresses.selfweight.loadingPoint += (layers[i+1].top - layers[i+1].bottom)
    }
    return layers
}

function splitLayer(layers, wDepth){
    let newLayers = []
    for (let layer of layers){
        if (layer.bottom >= wDepth){
            layer.inwater = 0
            newLayers.push(layer)
            // console.log(newLayers)
        }else if(layer.bottom < wDepth && layer.top > wDepth){
            let toplayer = Object.assign({},layer)
            let bottomlayer = Object.assign({},layer)
            toplayer.bottom = wDepth
            toplayer.inwater = 0
            bottomlayer.top = wDepth
            bottomlayer.inwater = 1
            newLayers.push(toplayer)
            newLayers.push(bottomlayer)
        }else{
            layer.inwater = 1
            newLayers.push(layer)
        }
    }
    return newLayers
}


function getCoefK(layer, actpas){
    let K = actpas === "active" ? (Math.tan((45-layer.friction/2)*Math.PI/180))**2 : (Math.tan((45+layer.friction/2)*Math.PI/180))**2
    return K
}

