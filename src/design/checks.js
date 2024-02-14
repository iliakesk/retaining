//NA JEXWRISOYN AYTA POU KANOUN CHECK KOINA GIA OLOUS TOUS TOIXOYS APO AYTA POU KANOUN MONO GIA TON TYPE A
import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {actingMoment, actingForces} from '../design/soilStress'


//na mhn pairnei data, gia na mporei na kanei tous elegxous gia opoiodhopte eidos toixoy
export function checks(data){
    let actingF = actingForces(data)
    let stabilizingF = stabilizingForces(data)
    let frictionCoeff = Math.tan(data.model.baseSoil.friction)

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
    
    slideCheck(aF, sF, frictionCoeff)
    
    stabilityCheck(actingF, stabilizingF)

    return
}


export function slideCheck(actingF, stabilizingF, frictionCoeff){//edw prepei na mpei kai to tanφ
    stabilizingF *= frictionCoeff
    let stable = actingF < stabilizingF ? true:false
    let stabilityCoef = stabilizingF/actingF
    console.log(stabilityCoef)
    //prepei na kanei return ena object me ta stoixeia tou elegxou
    return {stable, stabilityCoef}
}

export function stabilityCheck(actingF, stabilizingF){
    let actingM = actingMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)

    let stable = actingM < stabilizingM ? true:false
    let stabilityCoef = stabilizingM/actingM
    console.log(stabilityCoef)
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



