//NA JEXWRISOYN AYTA POU KANOUN CHECK KOINA GIA OLOUS TOUS TOIXOYS APO AYTA POU KANOUN MONO GIA TON TYPE A
import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {earthMoment, earthPressure} from '../design/soilStress'


//na mhn pairnei data, gia na mporei na kanei tous elegxous gia opoiodhopte eidos toixoy
export function checks(model){
    let surcharge = model.surcharge.back.value//thelei na lamvanw ypopsh mou afenos kai to frontsoil alla kai to position tou surcharge
    let wDepth = model.water.depth

    let backPressureF = earthPressure(model.backSoil, surcharge, wDepth, "active")
    let frontPressureF = earthPressure(model.frontSoil, surcharge, wDepth, "passive") //<== kapou prepei na to xrhsimopoihsw kai auto
    let stabilizingF = stabilizingForces(model)
    let frictionCoeff = Math.tan(model.baseSoil.friction)
    let base = model.wall.toe + model.wall.stemThickness + model.wall.heel

    let totalActingF = sumActingForces(backPressureF)
    let totalStabilizingF = sumStabilizingForces(stabilizingF)
    
    let slideC = slideCheck(totalActingF, totalStabilizingF, frictionCoeff)
    
    let overturningC = overturningCheck(backPressureF, stabilizingF)

    let eccentricityC = eccentricityCheck(base, overturningC.stabilizingM, overturningC.actingM, stabilizingF)

    let groundC = groundCheck(base, overturningC.stabilizingM, overturningC.actingM, totalStabilizingF, model.baseSoil.stressAllowed, eccentricityC.eccentricity)

    return {slideC, overturningC, groundC, eccentricityC}
}

function sumActingForces(actingF){
    let aF = 0
    for (let layer of actingF){
        let stresses = layer.stresses
        aF += stresses.surcharge.totalStress +
                    stresses.selfweight.totalStress + 
                    stresses.water.totalStress}
    return aF
}

function sumStabilizingForces(stabilizingF){
    let sF = 0
    for (const force of Object.values(stabilizingF)){
        sF += force.load*force.loadingPointX
    }
    return sF
}


export function slideCheck(actingF, stabilizingF, frictionCoeff){//edw prepei na mpei kai to tanφ
    stabilizingF *= frictionCoeff
    let stable = actingF < stabilizingF ? true:false
    let overturningCoef = stabilizingF/actingF
    return {stable, overturningCoef}
}

export function overturningCheck(actingF, stabilizingF){
    let actingM = earthMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)

    let stable = actingM < stabilizingM ? true:false
    let overturningCoef = stabilizingM/actingM
    
    return {stable, overturningCoef, stabilizingM, actingM}
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



