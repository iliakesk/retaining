
  export default function getData(availHeight, availWidth){
    return { //tha prepei oi diastaseis na mpoune se metra kai na pollaplasiastoun me 1000 mono gia ton canvas
      //epishs, tha prepei na graftei ws: model{wall, frontsoil, backsoil, water, baseSoil, surcharge}
      // to material na mpei sto wall
      // to stressallowed na mpei sto baseSoil
      //sto water na mpei waterDepth kai waterDensity
      // sto surcharge na mpei metro kai shmeio fortishs - apostash apo ton toixo
      model:{toe: 3200,
            heel: 0,
            footHeight: 1500,
            stemHeight: 4500,
            stemThickness: 800,
            frontSoil:[{name:"custom",top:0, bottom:6,density:18, friction:34, cohesion:0,stresses:{surcharge:{},
                                                                                                      water:{},
                                                                                                      selfweight:{}
                                                                                                    }
                      }
                    ],
            backSoilSlope:0, 
            backSoil:[{name:"custom",top:0, bottom:6,density:18, friction:34, cohesion:0,stresses:{surcharge:{},
                                                                                                      water:{},
                                                                                                      selfweight:{}
                                                                                                    }
                      }
                    ],
            waterDepth:10,
            baseSoil:{name:"custom",density:18, friction:34, cohesion:30},
            surcharge:0, //na diorthwthei gia na perigrafetai apo ena object pou tha exei metro, shmeiako ;h katenemimeno fortio, apostash apo toixo, ktl. Opws einai twra ypothetei oti to fortio einai panta katanemhmeno kai jekinaei apo th stepsh tou toixou kai paei pros ta pisw ep apeiro
            loadOnWall:0,
            material:{density:25},
            stressAllowed:300},
      visual:{availHeight,
              availWidth,
              leftSoilLength:2000,
              rightSoilLength:4000}      
    }
  }