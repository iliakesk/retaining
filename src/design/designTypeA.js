
//prepei na prosthetw se kapoio shmeio kai to xwma pou vrisketai panw apo to toe kathws kai epifortisi epi tou toixoy

export function stabilizingMoment(forces){
    
    let moment = 0
    for (const force of Object.values(forces)){
        moment += force.load*force.loadingPointX
    }
    return moment
}

export function stabilizingForces(data){
    data = convertUnits(data)
    let wallForce = selfWeight(data)
    let soilForce = soilWeight(data)
    let waterForce = waterWeight(data)
    let surfaceForce = surfaceLoad(data)
    let onWallForce = loadOnWall(data)
    return {wallForce, soilForce, surfaceForce, waterForce, onWallForce}

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

function loadOnWall(data){
    let load = data.model.loadOnWall
    let loadingPointX = data.model.toe + data.model.stemThickness/2
    return {load, loadingPointX}
}

function surfaceLoad(data){

    let load = data.model.soilSurfaceStress*data.model.heel
    let loadingPointX = data.model.toe + data.model.stemThickness + data.model.heel/2
    return {load, loadingPointX}
}

function soilWeight(data){
    let layers = data.model.backSoil
    let load = 0
    for (let layer of layers){
        load += (layer.bottom-layer.top)*layer.density
    }
    let loadingPointX = data.model.toe + data.model.stemThickness + data.model.heel/2
    return {load, loadingPointX}        
}

function waterWeight(data){
    let waterDensity = 10 // PROSOXH ISWS NA MHN EINAI H IDIA PANTA
    let load = waterDensity*data.model.heel*data.model.waterDepth
    let loadingPointX = data.model.toe + data.model.stemThickness + data.model.heel/2
    return {load, loadingPointX}
}

function selfWeight(data){
    let vertices = wallVertices(data)
    let area = calculateArea(vertices)
    let centroid = KB(vertices)
    let load = area*data.model.material.density
    let loadingPointX = centroid.x
    return {load, loadingPointX}
}

function wallVertices(data){
    return [
            {x: 0, y: 0},
            {x: 0, y: data.model.footHeight},
            {x: data.model.toe, y: data.model.footHeight},
            {x: data.model.toe, y: data.model.stemHeight+data.model.footHeight},
            {x: data.model.toe+data.model.stemThickness, y: data.model.stemHeight+data.model.footHeight},
            {x: data.model.toe+data.model.stemThickness, y: data.model.footHeight},
            {x: data.model.toe+data.model.stemThickness+data.model.heel, y: data.model.footHeight},
            {x: data.model.toe+data.model.stemThickness+data.model.heel, y: 0}
          ]
  }

function calculateArea(vertices) {
    // Shoelace formula
    let area = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        area += (vertices[i].x * vertices[i + 1].y - vertices[i + 1].x * vertices[i].y);
    }
    area = 0.5 * Math.abs(area);

    return area;
}


//vriskei to kentro varous sxhmatos. dehetai array me objects {x:0,y:0}
function KB(vertices){
    let cx = 0, cy = 0, A = 0;

    for (let i = 0; i < vertices.length; i++) {
        const xi = vertices[i].x;
        const yi = vertices[i].y;
        const xi1 = vertices[(i + 1) % vertices.length].x;
        const yi1 = vertices[(i + 1) % vertices.length].y;

        const term = xi * yi1 - xi1 * yi;
        A += term;

        cx += (xi + xi1) * term;
        cy += (yi + yi1) * term;
    }

    A *= 0.5;
    cx /= (6 * A);
    cy /= (6 * A);

    return { x: cx, y: cy };
}