//apostatheropoihsh
export function destab(){
    return //tha parei tis dynameis apostatheropoiisis, ta KB apo parakatw, ta emvada apo parakatw kai tha ypologisei
    // tis ropew, syntelesti asfaleias ktl
}

function KB(){
    //thewrw arxi twn ajonwn tin katw aristeri gwnia toy pedilou
    let E_base = baseheight*(toe + foot + stemwidth)
    let E_stem = stemwidth*stemheight
    let E_soilF = toe*(soildepthF-baseheight)
    let E_soilB = heel*(soildepthB-baseheight) + (Math.tan(slopeangle)*heel**2)/2

    let x_wall = (E_base*((toe + foot + stemwidth)/2) + E_stem*(toe + stemwidth/2))/(E_base + E_stem)
    let y_wall = (E_base*(baseheight/2) + E_stem*(baseheight + stemheight/2))/(E_base + E_stem)

    let x_soilF = toe/2
    let y_soilF = baseheight + soildepthF/2

    let x_soilB = toe + stemwidth + heel/2
    let y_soilB = baseheight + soildepthB/2

    return {x_wall, y_wall, x_soilF, y_soilF, x_soilB, y_soilB}
}