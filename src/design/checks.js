//NA JEXWRISOYN AYTA POU KANOUN CHECK KOINA GIA OLOUS TOUS TOIXOYS APO AYTA POU KANOUN MONO GIA TON TYPE A
import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {earthMoment, earthPressure} from '../design/soilStress'


//na mhn pairnei data, gia na mporei na kanei tous elegxous gia opoiodhopte eidos toixoy. Na pairnei analytika ta dedomena
export function checks(model){
    let surchargeback = model.surcharge.back.value//thelei na lamvanw ypopsh mou kai to position tou surcharge
    let surchargefront = model.surcharge.front.value//thelei na lamvanw ypopsh mou kai to position tou surcharge
    let wDepth = model.water.depth

    let backPressureF = earthPressure(model.backSoil, surchargeback, wDepth, 1)
    // console.log(backPressureF)
    console.log(surchargeback)
    let frontPressureF = earthPressure(model.frontSoil, surchargefront, wDepth, 0)
    // console.log(frontPressureF)

    let stabilizingF = stabilizingForces(model)
    console.log(stabilizingF)
    let frictionCoeff = Math.tan(model.baseSoil.friction)
    let base = model.wall.toe + model.wall.stemThickness + model.wall.heel

    let totalActingF = sumSoilForces(backPressureF)
    let totalStabilizingF = sumStabilizingForces(stabilizingF) + sumSoilForces(frontPressureF)
    let slideC = slideCheck(totalActingF, totalStabilizingF, frictionCoeff)
    
    let overturningC = overturningCheck(backPressureF, stabilizingF)

    let eccentricityC = eccentricityCheck(base, overturningC.stabilizingM, overturningC.actingM, stabilizingF)

    let groundC = groundCheck(base, overturningC.stabilizingM, overturningC.actingM, totalStabilizingF, model.baseSoil.stressAllowed, eccentricityC.eccentricity)

    return {slideC, overturningC, groundC, eccentricityC}
}

function sumSoilForces(actingF){
    let aF = 0
    for (let layer of actingF){
        let stresses = layer.stresses
        aF += stresses.surcharge.totalStress +
                    stresses.selfweight.totalStress + 
                    stresses.water.totalStress}
    // console.log(aF)
    return aF
}

function sumStabilizingForces(stabilizingF){
    let sF = 0
    // console.log(stabilizingF)
    for (const force of Object.values(stabilizingF)){
        sF += force.load*force.loadingPointX
    }
    return sF
}


export function slideCheck(actingF, stabilizingF, frictionCoeff){//edw prepei na mpei kai to tanφ
    stabilizingF *= frictionCoeff
    let stable = actingF < stabilizingF ? true:false
    let slidingCoef = stabilizingF/actingF
    // console.log(stabilizingF)
    // console.log(actingF)
    // console.log(slidingCoef)
    return {stable, slidingCoef}
}

export function overturningCheck(actingF, stabilizingF){
    let actingM = earthMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)

    let stable = actingM < stabilizingM ? true:false
    let overturningCoef = stabilizingM/actingM
    // console.log(stabilizingM)
    // console.log(actingM)
    // console.log(overturningCoef)
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



