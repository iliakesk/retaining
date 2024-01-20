
// ypologizei dedomena toixoy, diastaseis, kentro sxedioy ktl
export function mergeData(e, data){
    if (e){
      data[e.target.name] = Number(e.target.value)
    }
    // kati prepei na valw edw se periptvsh pou to toe i to heel ypervoun to xwma dejia i aristera
    
    const designWidth = /*data.toe+data.heel+*/data.stemThickness+data.leftSoilLength+data.rightSoilLength
    const designHeight = data.footHeight+data.stemHeight
  
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
      console.log({wMargin, hMargin})
      const lines = {leftGround:{
                                  color:"color 1",
                                  line:[
                                        [wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
                                        [factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]
                                      ]
                                },
                    rightGround:{
                                  color:"color 2",
                                  line:[
                                        [wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
                                        [wMargin + factor*data.leftSoilLength + factor*data.stemThickness + factor*data.rightSoilLength, data.availHeight - hMargin - factor*data.soilDepthBack]
                                      ]
                                },
                    wall:{
                                  color:"color 3",
                                  line:[
                                        [wMargin + factor*(data.leftSoilLength - data.toe), data.availHeight - hMargin],//katw aristera
                                        [wMargin + factor*(data.leftSoilLength - data.toe), data.availHeight - hMargin - factor*(data.footHeight)],//panw aristera
                                        [wMargin + factor*(data.leftSoilLength), data.availHeight - hMargin - factor*(data.footHeight)],//mesiaristera
                                        [wMargin + factor*(data.leftSoilLength), data.availHeight - hMargin - factor*(data.footHeight+data.stemHeight)],//mesi panw aristera
                                        [wMargin + factor*(data.leftSoilLength + data.stemThickness), data.availHeight - hMargin - factor*(data.footHeight+data.stemHeight)],//mesi panw dejia
                                        [wMargin + factor*(data.leftSoilLength + data.stemThickness), data.availHeight - hMargin - factor*(data.footHeight)],//mesi dejia
                                        [wMargin + factor*(data.leftSoilLength + data.stemThickness+data.heel), data.availHeight - hMargin - factor*(data.footHeight)],//panw dejia
                                        [wMargin + factor*(data.leftSoilLength + data.stemThickness+data.heel), data.availHeight - hMargin],//katw dejia
                                        [wMargin + factor*(data.leftSoilLength - data.toe), data.availHeight - hMargin]//prwto
                                      ]
                                }
                    }

      //arrays of points i objects of lines 2

      // arrays of points in arrays of lines
      // const lines = {leftGround:[
      //                             [wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
      //                             [factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]
      //                           ],
      //               rightGround:[
      //                             [wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
      //                             [wMargin + factor*data.leftSoilLength + factor*data.stemThickness + factor*data.rightSoilLength, data.availHeight - hMargin - factor*data.soilDepthBack]
      //                           ],
      //               rightround:[
      //                             [wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
      //                             [wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
      //                             [factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]

      //                           ]
      //               }

      // map object
      // const lines = new Map([
      //         ["leftGround",{0:[wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
      //                     1:[factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]}],
      //         ["rightGround",{0:[wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
      //                     1:[wMargin + factor*data.leftSoilLength + factor*data.stemThickness + factor*data.rightSoilLength, data.availHeight - hMargin - factor*data.soilDepthBack]}]
      // ])
      
      
      // PRIN PROXWRHSW NA DW JANA ONOMATA METAVLHTWN STO STATE TOY APP GIA KALYTERA ONOMATA
      const shapes = {lines}
      return shapes
  }
  
  