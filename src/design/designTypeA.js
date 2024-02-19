
//prepei na prosthetw se kapoio shmeio kai to xwma pou vrisketai panw apo to toe kathws kai epifortisi epi tou toixoy

export function stabilizingMoment(forces){
    
    let moment = 0
    for (const force of Object.values(forces)){
        moment += force.load*force.loadingPointX
    }
    return moment
}

export function stabilizingForces(model){
    // console.log(model)
    let frontPointX = model.wall.toe/2
    let backPointX = model.wall.toe + model.wall.stemThickness + model.wall.heel/2
    let wallF = selfWeight(model)
    let backSoilF = soilWeight(model.backSoil, backPointX)
    let frontSoilF = soilWeight(model.frontSoil, frontPointX)
    let waterF = waterWeight(model)
    let backSurfaceF = surchargeBack(model.wall, model.surcharge.back)
    let frontSurfaceF = surchargeFront(model.wall, model.surcharge.front)
    let onWallF = loadOnWall(model)
    return {wallF, backSoilF, frontSoilF, backSurfaceF, frontSurfaceF, waterF, onWallF}
}

function loadOnWall(model){
    let load = model.wall.loadOnWall
    let loadingPointX = model.wall.toe + model.wall.stemThickness/2
    return {load, loadingPointX}
}

function surchargeBack(wall, surcharge){
    let load = surcharge.value*wall.heel
    let loadingPointX = wall.toe + wall.stemThickness + wall.heel/2
    return {load, loadingPointX}
}

function surchargeFront(wall, surcharge){
    let load = surcharge.value*wall.toe
    let loadingPointX = wall.toe/2
    return {load, loadingPointX}
}

function soilWeight(layers, loadingPointX){
    let load = 0
    // console.log(layers)
    for (let layer of layers){
        load += (layer.bottom-layer.top)*layer.density
    }
    return {load, loadingPointX}        
}

function waterWeight(model){
    let waterDensity = 10 // PROSOXH ISWS NA MHN EINAI H IDIA PANTA
    let load = waterDensity*model.wall.heel*model.water.depth
    let loadingPointX = model.wall.toe + model.wall.stemThickness + model.wall.heel/2
    return {load, loadingPointX}
}

function selfWeight(model){
    let vertices = wallVertices(model)
    let area = calculateArea(vertices)
    let centroid = KB(vertices)
    let load = area*model.wall.material.density
    let loadingPointX = centroid.x
    return {load, loadingPointX}
}

function wallVertices(model){
    return [
            {x: 0, y: 0},
            {x: 0, y: model.wall.footHeight},
            {x: model.wall.toe, y: model.wall.footHeight},
            {x: model.wall.toe, y: model.wall.stemHeight+model.wall.footHeight},
            {x: model.wall.toe+model.wall.stemThickness, y: model.wall.stemHeight+model.wall.footHeight},
            {x: model.wall.toe+model.wall.stemThickness, y: model.wall.footHeight},
            {x: model.wall.toe+model.wall.stemThickness+model.wall.heel, y: model.wall.footHeight},
            {x: model.wall.toe+model.wall.stemThickness+model.wall.heel, y: 0}
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