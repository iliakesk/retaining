
// ypologizei dedomena toixoy, diastaseis, kentro sxedioy ktl
export function mergeData(e, data){
    if (e){
      data.model.model[e.target.name] = Number(e.target.value)
    }
    // kati prepei na valw edw se periptvsh pou to toe i to heel ypervoun to xwma dejia i aristera
    
    const designWidth = /*data.model.toe+data.model.heel+*/data.model.stemThickness+data.visual.leftSoilLength+data.visual.rightSoilLength
    const designHeight = data.model.footHeight+data.model.stemHeight
  
    const factor = scaleFactor(designWidth, designHeight)
    const {wMargin, hMargin} = calcMargins(designWidth, designHeight, factor)
    const drawing = createShapes(data, wMargin, hMargin, factor)
    return {wMargin, hMargin, factor, drawing}
  }
  
  function calcMargins(designWidth, designHeight, factor){
    const canvas = document.getElementById("canvas")
    const wMargin = (canvas.width-factor*designWidth)
    const hMargin = (canvas.height-factor*designHeight)/2
    
    return {wMargin, hMargin}
  }
    //   if (designWidth > designHeight){
    //     return {wMargin:0, hMargin:(canvas.width-scaleFactor*designWidth)/2}
    //   }else if(designWidth < designHeight){
    //     return {wMargin:(canvas.height-scaleFactor*designHeight)/2, hMargin:0}
    //   }else return {wMargin:0, hMargin:0}
    // }
  
  function scaleFactor(designWidth, designHeight){
    const canvas = document.getElementById("canvas")
    const factor = canvas.height/Math.max(designWidth, designHeight)
    return factor
  }

  
  function createShapes(data, wMargin, hMargin, factor){
      // console.log({wMargin, hMargin})
      const lines = {leftGround:{
                                  color:"color 1",
                                  line:[
                                        [wMargin, data.visual.availHeight - hMargin - factor*data.model.frontSoil.depth],
                                        [factor*data.visual.leftSoilLength + wMargin, data.visual.availHeight - hMargin - factor*data.model.frontSoil.depth]
                                      ]
                                },
                    rightGround:{
                                  color:"color 2",
                                  //  !!!!!!!!!!!!!!!!!!  ========>  na kanw kati me map function gia na vgaxzei swsta ola ta layers toy backSoil pou pleon einai array kai na mhn exw to [0]
                                  line:[
                                        [wMargin + factor*data.visual.leftSoilLength + factor*data.model.stemThickness, data.visual.availHeight - hMargin - factor*data.model.backSoil[0].depth],
                                        [wMargin + factor*data.visual.leftSoilLength + factor*data.model.stemThickness + factor*data.visual.rightSoilLength, data.visual.availHeight - hMargin - factor*data.model.backSoil[0].depth]
                                      ]
                                  // line:[
                                  //       [wMargin + factor*data.visual.leftSoilLength + factor*data.model.stemThickness, data.visual.availHeight - hMargin - factor*data.model.backSoil[0].depth],
                                  //       [wMargin + factor*data.visual.leftSoilLength + factor*data.model.stemThickness + factor*data.visual.rightSoilLength, data.visual.availHeight - hMargin - factor*data.model.backSoil[0].depth]
                                  //     ]
                                },
                    wall:{
                                  color:"color 3",
                                  line:[
                                        [wMargin + factor*(data.visual.leftSoilLength - data.model.toe), data.visual.availHeight - hMargin],//katw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength - data.model.toe), data.visual.availHeight - hMargin - factor*(data.model.footHeight)],//panw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength), data.visual.availHeight - hMargin - factor*(data.model.footHeight)],//mesiaristera
                                        [wMargin + factor*(data.visual.leftSoilLength), data.visual.availHeight - hMargin - factor*(data.model.footHeight+data.model.stemHeight)],//mesi panw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength + data.model.stemThickness), data.visual.availHeight - hMargin - factor*(data.model.footHeight+data.model.stemHeight)],//mesi panw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + data.model.stemThickness), data.visual.availHeight - hMargin - factor*(data.model.footHeight)],//mesi dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + data.model.stemThickness+data.model.heel), data.visual.availHeight - hMargin - factor*(data.model.footHeight)],//panw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + data.model.stemThickness+data.model.heel), data.visual.availHeight - hMargin],//katw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength - data.model.toe), data.visual.availHeight - hMargin]//prwto
                                      ]
                                }
                    }
      const shapes = {lines}
      return shapes
  }


  
  