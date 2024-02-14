//NA JEXWRISOYN AYTA POU KANOUN CHECK KOINA GIA OLOUS TOUS TOIXOYS APO AYTA POU KANOUN MONO GIA TON TYPE A
import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {actingMoment, actingForces} from '../design/soilStress'


//na mhn pairnei data, gia na mporei na kanei tous elegxous gia opoiodhopte eidos toixoy
export function checks(data){
    data = convertUnits(data)
    let actingF = actingForces(data)
    let stabilizingF = stabilizingForces(data)
    let frictionCoeff = Math.tan(data.model.baseSoil.friction)
    let base = data.model.toe + data.model.stemThickness + data.model.heel

    let aF = 0
    for (let layer of actingF){
        let stresses = layer.stresses
        aF += stresses.surcharge.totalStress +
                    stresses.selfweight.totalStress + 
                    stresses.water.totalStress}

    let sF = 0
    for (const force of Object.values(stabilizingF)){
        sF += force.load*force.loadingPointX
    }
    console.log(sF)
    let slideC = slideCheck(aF, sF, frictionCoeff)
    
    let stabilityC = stabilityCheck(actingF, stabilizingF)

    let eccentricityC = eccentricityCheck(base, stabilityC.stabilizingM, stabilityC.actingM, stabilizingF)

    let groundC = groundCheck(base, stabilityC.stabilizingM, stabilityC.actingM, sF, data.model.stressAllowed, eccentricityC.eccentricity)

    return {slideC, stabilityC, groundC, eccentricityC}
}

function convertUnits(data){
    let dataConv = JSON.parse(JSON.stringify(data))
    dataConv.model.toe /= 1000
    dataConv.model.heel /= 1000
    dataConv.model.footHeight /= 1000
    dataConv.model.stemHeight /= 1000
    dataConv.model.stemThickness /= 1000
    return dataConv
}

export function slideCheck(actingF, stabilizingF, frictionCoeff){//edw prepei na mpei kai to tanφ
    stabilizingF *= frictionCoeff
    let stable = actingF < stabilizingF ? true:false
    let stabilityCoef = stabilizingF/actingF
    return {stable, stabilityCoef}
}

export function stabilityCheck(actingF, stabilizingF){
    let actingM = actingMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)

    let stable = actingM < stabilizingM ? true:false
    let stabilityCoef = stabilizingM/actingM
    return {stable, stabilityCoef, stabilizingM, actingM}
}

function eccentricityCheck(base, stabilizingM, actingM, stabilizingF){
    let eM = (stabilizingM - actingM)/stabilizingF
    let eccentricity = base/2 - eM
    let echeck = eccentricity<=base/6 ? true:false
    return {echeck, eccentricity}
}

function groundCheck(base, stabilizingM, actingM, stabilizingF, stressAllowed, eccentricity){
    let stressMax = (stabilizingF/base)*(1+6*eccentricity/base)
    let stressMin = (stabilizingF/base)*(1-6*eccentricity/base)
    let stressCheck = Math.max(stressMax,stressMin)<stressAllowed ? true:false
    // console.log(eccentricity, stressMax, stressMin)
    // console.log(base, stabilizingM, actingM, stabilizingF, stressAllowed)
    return stressCheck
}



