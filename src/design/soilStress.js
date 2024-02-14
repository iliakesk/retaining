
// ekei pou ua xrisimopoiithoun tha prepei na exw diorthwsei tis diastaseiw apo xiliosta se metra

export function actingMoment(layers){
    let moment = 0
    for (let layer of layers){
        let stresses = layer.stresses
        moment += stresses.surcharge.totalStress*stresses.surcharge.loadingPoint +
                    stresses.selfweight.totalStress*stresses.selfweight.loadingPoint + 
                    stresses.water.totalStress*stresses.water.loadingPoint
    }
    // console.log(layers)
    return moment
}


export function actingForces(data){
    let layers = data.model.backSoil
    let surcharge = data.model.surcharge
    let wDepth = data.model.waterDepth
    layers = surfaceStress(layers, surcharge)
    layers = waterStress(layers)
    layers = weightStress(layers, wDepth)
    return layers
}

export function surfaceStress(layers, surcharge){
    layers.map(layer => {
        let Ka = getCoefK(layer)
        let stress = Ka*surcharge
        layer.stresses.surcharge = {topStressHor:stress,
                                bottomStressHor:stress,
                                totalStress:stress,
                                loadingPoint:(layer.bottom - layer.top)/2}
    })
    //adds the lower layers' heights to the upper loading point 
    for(let i = layers.length-2; i>-1; i--){
        layers[i].stresses.surcharge.loadingPoint += (layers[i+1].bottom - layers[i+1].top)
    }
    return layers
}

export function waterStress(layers, wDepth){
    let bottomlayer = layers[layers.length - 1]
    let waterDensity = 10 // PROSOXH ISWS NA MHN EINAI H IDIA PANTA
    
    layers.map((layer, index) => {
        let topStressHor, bottomStressHor, totalStress, loadingPoint
        if(layer.inwater){
            let previouslayer = layers[index - 1]
            //top and bottom horizontal stresses for the in-water layers
            topStressHor = previouslayer ? previouslayer.stresses.water.bottomStressHor : 0
            bottomStressHor = (layer.bottom - layer.top) * waterDensity + topStressHor
            
            //synoliko stress (emvadon sximatos)
            totalStress = (layer.bottom - layer.top)*(topStressHor + bottomStressHor)/2

            //loading point (measured from bottom of each layer)
            loadingPoint = ((layer.bottom - layer.top)*(2 * topStressHor + bottomStressHor)) /
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

export function weightStress(layers, wDepth){
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
                            (layer.bottom - layer.top) * layer.density + topStress - (totalDepth - wDepth) * waterDensity :
                            (layer.bottom - layer.top) * layer.density + topStress
        //active coefficient Ka
        let Ka = getCoefK(layer)

        //horizontal Stress
        topStressHor = Ka*topStress
        bottomStressHor = Ka*bottomStress
        //synoliko stress (emvadon sximatos)
        totalStress = (layer.bottom - layer.top)*(topStressHor + bottomStressHor)/2

        //loading point (measured from bottom of each layer)
        loadingPoint = ((layer.bottom - layer.top)*(2 * topStressHor + bottomStressHor)) /
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
        layers[i].stresses.selfweight.loadingPoint += (layers[i+1].bottom - layers[i+1].top)
    }
    return layers
}

function splitLayer(layers,wDepth){
    let newLayers = []
    for (let layer of layers){
        if (layer.bottom <= wDepth){
            layer.inwater = 0
            newLayers.push(layer)
            // console.log(newLayers)
        }else if(layer.bottom > wDepth && layer.top < wDepth){
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


function getCoefK(layer){
    return (Math.tan((45-layer.friction/2)*Math.PI/180))**2
}

