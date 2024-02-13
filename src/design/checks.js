import {stabilizingMoment, stabilizingForces} from '../design/designTypeA'
import {actingMoment, actingForces} from '../design/soilStress'


//tha einai pio oikonomiko an upologizontai prwta ta forces,
//meta na ginetai o elegxos tou slide kai meta ta dedomena 
//na phgainoun sto stability check gia na mhn janaypologizontai ola apo thn arxh
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
    //prepei na kanei return ena object me ta stoixeia tou elegxou
    return 'checked slide'
}

export function stabilityCheck(actingF, stabilizingF){
    let actingM = actingMoment(actingF)
    let stabilizingM = stabilizingMoment(stabilizingF)
    //prepei na kanei return ena object me ta stoixeia tou elegxou
    return 'checked stability'
}



