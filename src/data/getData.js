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

  // export default function getData(availHeight, availWidth){
  //   return {
  //     model:{toe: 500,
  //           heel: 1300,
  //           footHeight: 300,
  //           stemHeight: 2500,
  //           stemThickness: 200,
  //           frontSoil:{depth:400, slope:0},
  //           backSoilSlope:0, 
  //           backSoil:[{name:"custom",top:0, bottom:1.5,density:16, friction:30, cohesion:5,stresses:{surcharge:{},
  //                                                                                                     water:{},
  //                                                                                                     selfweight:{}
  //                                                                                                   }
  //                     },
  //                     {name:"custom",top:1.5, bottom:5,density:18, friction:40, cohesion:5,stresses:{surcharge:{},
  //                                                                                                     water:{},
  //                                                                                                     selfweight:{}
  //                                                                                                   }
  //                     }
  //                   ],
  //           waterDepth:1.5,
  //           baseSoil:{name:"custom",density:18, friction:40, cohesion:5},
  //           surcharge:20, //na diorthwthei gia na perigrafetai apo ena object pou tha exei metro, shmeiako ;h katenemimeno fortio, apostash apo toixo, ktl. Opws einai twra ypothetei oti to fortio einai panta katanemhmeno kai jekinaei apo th stepsh tou toixou kai paei pros ta pisw ep apeiro
  //           loadOnWall:0,
  //           material:{density:2350}},
  //     visual:{availHeight,
  //             availWidth,
  //             leftSoilLength:2000,
  //             rightSoilLength:4000}      
  //   }
  // }
  export default function getData(availHeight, availWidth){
    return {
      model:{toe: 400,
            heel: 1450,
            footHeight: 400,
            stemHeight: 3800,
            stemThickness: 300,
            frontSoil:{depth:700, slope:0},
            backSoilSlope:0, 
            backSoil:[{name:"custom",top:0, bottom:4.2,density:18.5, friction:32, cohesion:0,stresses:{surcharge:{},
                                                                                                      water:{},
                                                                                                      selfweight:{}
                                                                                                    }
                      }
                    ],
            waterDepth:10,
            baseSoil:{name:"custom",density:20, friction:10, cohesion:30},
            surcharge:0, //na diorthwthei gia na perigrafetai apo ena object pou tha exei metro, shmeiako ;h katenemimeno fortio, apostash apo toixo, ktl. Opws einai twra ypothetei oti to fortio einai panta katanemhmeno kai jekinaei apo th stepsh tou toixou kai paei pros ta pisw ep apeiro
            loadOnWall:0,
            material:{density:24}},
      visual:{availHeight,
              availWidth,
              leftSoilLength:2000,
              rightSoilLength:4000}      
    }
  }