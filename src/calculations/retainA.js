
// ypologizei dedomena toixoy, diastaseis, kentro sxedioy ktl
export function mergeData(e, data){
    if (e){
      data[e.target.name] = Number(e.target.value)
    }
    
    const designWidth = data.toe+data.heel+data.stemHeight+data.leftSoilLength+data.rightSoilLength
    const designHeight = data.footHeight+data.stemHeight
  
    const factor = scaleFactor(data)
    const {wMargin, hMargin} = calcMargins(designWidth, designHeight, factor)
    const drawing = createShapes(data, wMargin, hMargin, factor)
    return {wMargin, hMargin, factor, drawing}
  }
  
  function calcMargins(designWidth, designHeight, factor){
    const canvas = document.getElementById("canvas")
    const wMargin = (canvas.width-factor*designWidth)/2
    const hMargin = (canvas.height-factor*designHeight)/2
    return {wMargin, hMargin}
  }
    //   if (designWidth > designHeight){
    //     return {wMargin:0, hMargin:(canvas.width-scaleFactor*designWidth)/2}
    //   }else if(designWidth < designHeight){
    //     return {wMargin:(canvas.height-scaleFactor*designHeight)/2, hMargin:0}
    //   }else return {wMargin:0, hMargin:0}
    // }
  
  function scaleFactor(data){
    const canvas = document.getElementById("canvas")
    const width = data.toe + data.heel + data.stemHeight + data.leftSoilLength + data.rightSoilLength
    const height = data.footHeight + data.stemHeight
    const factor = canvas.height/Math.max(width, height)
    return factor
  }

  
  function createShapes(data, wMargin, hMargin, factor){
      //arrays of points i objects of lines
      // const lines = {leftGround:{0:[wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
      //                           1:[factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]},
      //               rightGround:{0:[wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
      //                           1:[wMargin + factor*data.leftSoilLength + factor*data.stemThickness + factor*data.rightSoilLength, data.availHeight - hMargin - factor*data.soilDepthBack]}}


      // arrays of points in arrays of lines
      const lines = {leftGround:[
                                  [wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
                                  [factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]
                                ],
                    rightGround:[
                                  [wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
                                  [wMargin + factor*data.leftSoilLength + factor*data.stemThickness + factor*data.rightSoilLength, data.availHeight - hMargin - factor*data.soilDepthBack]
                                ],
                    rightround:[
                                  [wMargin, data.availHeight - hMargin - factor*data.soilDepthFront],
                                  [wMargin + factor*data.leftSoilLength + factor*data.stemThickness, data.availHeight - hMargin - factor*data.soilDepthBack],
                                  [factor*data.leftSoilLength + wMargin, data.availHeight - hMargin - factor*data.soilDepthFront]

                                ]
                    }




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
  
  