
// ypologizei dedomena toixoy, diastaseis, kentro sxedioy ktl
export function mergeData(e, data){
    if (e){
      data.model.model[e.target.name] = Number(e.target.value) 
    }
    // kati prepei na valw edw se periptvsh pou to toe i to heel ypervoun to xwma dejia i aristera
    
    const model = convertUnits(data.model)
    
    const designWidth = /*model.wall.toe+model.wall.heel+*/model.wall.stemThickness+data.visual.leftSoilLength+data.visual.rightSoilLength
    const designHeight = model.wall.footHeight+model.wall.stemHeight
  
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

  
function convertUnits(model){
    let scaleModel = JSON.parse(JSON.stringify(model))
    scaleModel.wall.toe *= 1000
    scaleModel.wall.heel *= 1000
    scaleModel.wall.footHeight *= 1000
    scaleModel.wall.stemHeight *= 1000
    scaleModel.wall.stemThickness *= 1000
    scaleModel.frontSoil.map(item =>{
      item.top *= 1000
      item.bottom *= 1000
    })
    scaleModel.backSoil.map(item =>{
      item.top *= 1000
      item.bottom *= 1000
    })
    console.log(scaleModel)
    return scaleModel
}


  function createShapes(data, wMargin, hMargin, factor){
      const model = convertUnits(data.model)

      const frontsoil = model.frontSoil
      const leftGroundLines = frontsoil.flatMap(line => {
            let top = line.top
            let bottom = line.bottom
            let limittop = top < model.wall.footHeight ? 1 : 0
            let limitbottom = bottom < model.wall.footHeight ? 1 : 0
            return [[wMargin, data.visual.availHeight - hMargin - factor * top],
                    [factor * data.visual.leftSoilLength + wMargin - factor*model.wall.toe*limittop, data.visual.availHeight - hMargin - factor * top],
                    [wMargin, data.visual.availHeight - hMargin - factor * bottom],
                    [factor * data.visual.leftSoilLength + wMargin - factor*model.wall.toe*limitbottom, data.visual.availHeight - hMargin - factor * bottom]]
          })

          const backsoil = model.backSoil
          const rightGroundLines = backsoil.flatMap(line => {
                let top = line.top
                let bottom = line.bottom
                let limittop = top < model.wall.footHeight ? 1 : 0
                let limitbottom = bottom < model.wall.footHeight ? 1 : 0
                return [[wMargin + factor*data.visual.leftSoilLength + factor*model.wall.stemThickness + factor*model.wall.heel*limittop, data.visual.availHeight - hMargin - factor * top],
                        [wMargin + factor*data.visual.leftSoilLength + factor*model.wall.stemThickness + factor*data.visual.rightSoilLength, data.visual.availHeight - hMargin - factor * top],
                        [wMargin + factor*data.visual.leftSoilLength + factor*model.wall.stemThickness + factor*model.wall.heel*limitbottom, data.visual.availHeight - hMargin - factor * bottom],
                        [wMargin + factor*data.visual.leftSoilLength + factor*model.wall.stemThickness + factor*data.visual.rightSoilLength, data.visual.availHeight - hMargin - factor * bottom]]
              })



      const leftGround = {color:"color 1", line:leftGroundLines}


      const rightGround = {color:"color 2", line:rightGroundLines}
                        



      const lines = {leftGround,
                    rightGround,
                    wall:{
                                  color:"color 3",
                                  line:[
                                        [wMargin + factor*(data.visual.leftSoilLength - model.wall.toe), data.visual.availHeight - hMargin],//katw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength - model.wall.toe), data.visual.availHeight - hMargin - factor*(model.wall.footHeight)],//panw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength), data.visual.availHeight - hMargin - factor*(model.wall.footHeight)],//mesiaristera
                                        [wMargin + factor*(data.visual.leftSoilLength), data.visual.availHeight - hMargin - factor*(model.wall.footHeight+model.wall.stemHeight)],//mesi panw aristera
                                        [wMargin + factor*(data.visual.leftSoilLength + model.wall.stemThickness), data.visual.availHeight - hMargin - factor*(model.wall.footHeight+model.wall.stemHeight)],//mesi panw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + model.wall.stemThickness), data.visual.availHeight - hMargin - factor*(model.wall.footHeight)],//mesi dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + model.wall.stemThickness+model.wall.heel), data.visual.availHeight - hMargin - factor*(model.wall.footHeight)],//panw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength + model.wall.stemThickness+model.wall.heel), data.visual.availHeight - hMargin],//katw dejia
                                        [wMargin + factor*(data.visual.leftSoilLength - model.wall.toe), data.visual.availHeight - hMargin]//prwto
                                      ]
                                }
                    }
      const shapes = {lines}
      
      return shapes
  }


  
  