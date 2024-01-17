        
export function mergeData(e, data){
    if (e){
      data[e.target.name] = Number(e.target.value)
    }
    
    const designWidth = data.toe+data.heel+data.stemTop+data.leftSoilMargin+data.rightSoilMargin
    const designHeight = data.footThickness+data.stemHeight
  
    const factor = scaleFactor(data)
    const {wMargin, hMargin} = calcMargins(designWidth, designHeight, factor)
    const drawing = createDrawing(data, wMargin, hMargin, factor)
    return {wMargin, hMargin, factor, drawing}
  }
  
export function calcMargins(designWidth, designHeight, scaleFactor){
    const canvas = document.getElementById("canvas")
    const wMargin = (canvas.width-scaleFactor*designWidth)/2
    const hMargin = (canvas.height-scaleFactor*designHeight)/2
    return {wMargin, hMargin}
  }
    //   if (designWidth > designHeight){
    //     return {wMargin:0, hMargin:(canvas.width-scaleFactor*designWidth)/2}
    //   }else if(designWidth < designHeight){
    //     return {wMargin:(canvas.height-scaleFactor*designHeight)/2, hMargin:0}
    //   }else return {wMargin:0, hMargin:0}
    // }
  
export function scaleFactor(data){
    const canvas = document.getElementById("canvas")
    const width = data.toe + data.heel + data.stemTop + data.leftSoilMargin + data.rightSoilMargin
    const height = data.footThickness + data.stemHeight
    const factor = canvas.height/Math.max(width, height)
    return factor
  }
  
  function createDrawing(data, wMargin, hMargin, factor){
    
    return {data, wMargin, hMargin, factor}
  }
  
  // export function drawPoints(data){
  //     //wall
  //     const wall = {}
  //     wall[1] = data.leftSoilMargin
  //     wall[2] = 
  //     return {
  //         paths:{wall:{},
  //                ground:{}},
  //         rects:{},
  //         fillrects:{}
  //     }
  // }
  
  