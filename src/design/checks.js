import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {actingMoment, actingForces} from '../design/soilStress'


//na mhn pairnei data, gia na mporei na kanei tous elegxous gia opoiodhopte eidos toixoy
export function checks(data){
    let actingF = actingForces(data)
    let stabilizingF = stabilizingForces(data)
    let frictionCoeff = Math.tan(data.model.baseSoil.friction)
    
    slideCheck(actingF, stabilizingF, frictionCoeff)
    
    stabilityCheck(actingF, stabilizingF)

    return
}


export function slideCheck(actingF, stabilizingF, frictionCoeff){//edw prepei na mpei kai to tanφ
    stabilizingF *= frictionCoeff
    let stable = actingF < stabilizingF ? true:false
    let stabilityCoef = stabilizingF/actingF
    //prepei na kanei return ena object me ta stoixeia tou elegxou
    return {stable, stabilityCoef}
}

export function stabilityCheck(actingF, stabilizingF){
    let actingM = actingMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)

    let stable = actingM < stabilizingM ? true:false
    let stabilityCoef = stabilizingM/actingM
    //prepei na kanei return ena object me ta stoixeia tou elegxou
    return {stable, stabilityCoef, stabilizingM, actingM}
}

function groundCheck(base, stabilizingM, actingM, stabilizingF, stressAllowed){

    let eM = (stabilizingM - actingM)/stabilizingF
    let eccentricity = base/2 - eM
    let baseCheck = eccentricity<=base/6 ? true:false

    let stressMax = (stabilizingF/base)*(1+6*eccentricity/base)
    let stressMin = (stabilizingF/base)*(1-6*eccentricity/base)
    let stressCheck = Math.max(stressMax,stressMin)<stressAllowed ? true:false
    return {baseCheck, stressCheck}
}



