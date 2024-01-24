export default function model(availHeight, availWidth){
    return {
      toe: 500,
      heel: 1300,
      footHeight: 300,
      stemHeight: 2500,
      stemThickness: 200,
      // soilDepthFront: 400,
      frontSoil:{depth:400, slope:0},
      backSoilSlope:0, 
      backSoil:[{name:"custom",depth:2500,density:10, friction:28, cohesion:5},{name:"custom",depth:2500,density:10, friction:28, cohesion:5}],
      waterDepth:-5,
      baseSoil:{},
      availHeight,
      availWidth,
      leftSoilLength:2000,
      rightSoilLength:4000
    }
  }