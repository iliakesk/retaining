
  // export default function getData(availHeight, availWidth){
  //   return { //tha prepei oi diastaseis na mpoune se metra kai na pollaplasiastoun me 1000 mono gia ton canvas
  //     //epishs, tha prepei na graftei ws: model{wall, frontsoil, backsoil, water, baseSoil, surcharge}
  //     // to material na mpei sto wall
  //     // to stressallowed na mpei sto baseSoil
  //     //sto water na mpei waterDepth kai waterDensity
  //     // sto surcharge na mpei metro kai shmeio fortishs - apostash apo ton toixo
  //     model:{toe: 3200,
  //           heel: 0,
  //           footHeight: 1500,
  //           stemHeight: 4500,
  //           stemThickness: 800,
  //           frontSoil:[{name:"custom",top:0, bottom:6,density:18, friction:34, cohesion:0,stresses:{surcharge:{},
  //                                                                                                     water:{},
  //                                                                                                     selfweight:{}
  //                                                                                                   }
  //                     }
  //                   ],
  //           backSoilSlope:0, 
  //           backSoil:[{name:"custom",top:0, bottom:6,density:18, friction:34, cohesion:0,stresses:{surcharge:{},
  //                                                                                                     water:{},
  //                                                                                                     selfweight:{}
  //                                                                                                   }
  //                     }
  //                   ],
  //           waterDepth:10,
  //           baseSoil:{name:"custom",density:18, friction:34, cohesion:30},
  //           surcharge:0, //na diorthwthei gia na perigrafetai apo ena object pou tha exei metro, shmeiako ;h katenemimeno fortio, apostash apo toixo, ktl. Opws einai twra ypothetei oti to fortio einai panta katanemhmeno kai jekinaei apo th stepsh tou toixou kai paei pros ta pisw ep apeiro
  //           loadOnWall:0,
  //           material:{density:25},
  //           stressAllowed:300},
  //     visual:{availHeight,
  //             availWidth,
  //             leftSoilLength:2000,
  //             rightSoilLength:4000}      
  //   }
  // }

  export default function getData(availHeight, availWidth){
    return { //tha prepei oi diastaseis na mpoune se metra kai na pollaplasiastoun me 1000 mono gia ton canvas
      //epishs, tha prepei na graftei ws: model{wall, frontsoil, backsoil, water, baseSoil, surcharge}
      // to material na mpei sto wall
      // to stressallowed na mpei sto baseSoil
      //sto water na mpei waterDepth kai waterDensity
      // sto surcharge na mpei metro kai shmeio fortishs - apostash apo ton toixo
      model:{
            wall:{toe: 0.5,
                  heel: 1.5,
                  footHeight: 0.3,
                  stemHeight: 2.5,
                  stemThickness: 0.3,
                  loadOnWall:0,
                  material:{density:25}},
            frontSoil:[
                        {name:"custom",
                        top:0.5,
                        bottom:0.2,
                        density:18,
                        friction:34,
                        cohesion:0,
                        surcharge:{value:0, position:0},
                        stresses:{surcharge:{}, water:{}, selfweight:{}}},
                        {name:"custom2",
                        top:0.2,
                        bottom:0,
                        density:18,
                        friction:34,
                        cohesion:0,
                        surcharge:{value:0, position:0},
                        stresses:{surcharge:{}, water:{}, selfweight:{}}}
                      ],
            backSoil:[
                        {name:"custom",
                        top:2.8,
                        bottom:2.4,
                        density:18,
                        friction:34,
                        cohesion:0,
                        stresses:{surcharge:{}, water:{}, selfweight:{}}},
                        {name:"custom",
                        top:2.4,
                        bottom:2,
                        density:18,
                        friction:34,
                        cohesion:0,
                        stresses:{surcharge:{}, water:{}, selfweight:{}}},
                        {name:"custom",
                        top:2,
                        bottom:0,
                        density:18,
                        friction:34,
                        cohesion:0,
                        stresses:{surcharge:{}, water:{}, selfweight:{}}}
                      ],
            surcharge:{back:{value:0, position:0}, front:{value:0, position:0}},
            water:{depth:10},
            baseSoil:{name:"custom",
                      density:18,
                      friction:34,
                      cohesion:30,
                      stressAllowed:300}},
      visual:{availHeight,
              availWidth,
              leftSoilLength:2000,
              rightSoilLength:4000}      
    }
  }