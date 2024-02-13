// export default function model(availHeight, availWidth){
//     return {
//       toe: 500,
//       heel: 1300,
//       footHeight: 300,
//       stemHeight: 2500,
//       stemThickness: 200,
//       frontSoil:{depth:400, slope:0},
//       backSoilSlope:0, 
//       backSoil:[{name:"custom",top:0, bottom:1000,density:10, friction:28, cohesion:5},{name:"custom",top:1000, bottom:2800,density:10, friction:28, cohesion:5}],
//       waterDepth:2000,
//       baseSoil:{},
//       availHeight,
//       availWidth,
//       leftSoilLength:2000,
//       rightSoilLength:4000
//     }
//   }

  // export default function model(availHeight, availWidth){
  //   return {
  //     toe: 500,
  //     heel: 1300,
  //     footHeight: 300,
  //     stemHeight: 2500,
  //     stemThickness: 200,
  //     frontSoil:{depth:400, slope:0},
  //     backSoilSlope:0, 
  //     backSoil:[{name:"custom",top:0, bottom:1.5,density:16, friction:30, cohesion:5},{name:"custom",top:1.5, bottom:5,density:18, friction:40, cohesion:5}],
  //     waterDepth:1.5,
  //     baseSoil:{},
  //     availHeight,
  //     availWidth,
  //     leftSoilLength:2000,
  //     rightSoilLength:4000,
  //     soilSurfaceStress:20
  //   }
  // }

  export default function getData(availHeight, availWidth){
    return {
      model:{toe: 500,
            heel: 1300,
            footHeight: 300,
            stemHeight: 2500,
            stemThickness: 200,
            frontSoil:{depth:400, slope:0},
            backSoilSlope:0, 
            backSoil:[{name:"custom",top:0, bottom:1.5,density:16, friction:30, cohesion:5,stresses:{surface:{},
                                                                                                      water:{},
                                                                                                      selfweight:{}
                                                                                                    }
                      },
                      {name:"custom",top:1.5, bottom:5,density:18, friction:40, cohesion:5,stresses:{surface:{},
                                                                                                      water:{},
                                                                                                      selfweight:{}
                                                                                                    }
                      }
                    ],
            waterDepth:1.5,
            baseSoil:{name:"custom",density:18, friction:40, cohesion:5},
            soilSurfaceStress:20,
            loadOnWall:0,
            material:{density:2350}},
      visual:{availHeight,
              availWidth,
              leftSoilLength:2000,
              rightSoilLength:4000}      
    }
  }

  // NA ONOMASTEI DATA H STATE H KATI TETOIO.
  // NA EXEI DYO OBJECTS, ENA GIA TO MODEL KAI ENA GIA TA YPOLOIPA

  // export default function model(availHeight, availWidth){
  //   return {
  //     model:{
  //       toe: 500,
  //       heel: 1300,
  //       footHeight: 300,
  //       stemHeight: 2500,
  //       stemThickness: 200,
  //       frontSoil:{depth:400, slope:0},
  //       backSoilSlope:0, 
  //       backSoil:[{name:"custom",top:0, bottom:1000,density:10, friction:28, cohesion:5},{name:"custom",top:1000, bottom:2800,density:10, friction:28, cohesion:5}],
  //       waterDepth:2000,
  //       baseSoil:{},
  //       leftSoilLength:2000,
  //       rightSoilLength:4000
  //     },
  //     canvas_data:{
  //       availHeight,
  //       availWidth
  //     }     
  //   }
  // }