import  { useCallback, useEffect } from "react";        
import PropTypes  from 'prop-types'



RetainA.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}



export default function RetainA(props){
    console.log("Retain updated")
    // console.log(props.data)
    const onBlur = useCallback(e => {
        console.log({[`${e.target.name}`]: Number(e.target.value)})
        const calcs = mergeData(e, props.data)
        props.onChange(calcs)
    }, [props])

    useEffect((e) => {
      const {wMargin, hMargin, factor, drawing} = mergeData(e, props.data)
      props.onChange({wMargin, hMargin, factor, drawing})
  }, [props.data.availHeight, props.data.availWidth])

    return(
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="footing" name="footing" value="True"></input>
            <label htmlFor="footing" className="toplabel">
              Footing
            </label>
            <div className="card-data">
              <label>Toe length:</label>
              <input id="toe" type="text" name="toe" placeholder={props.data.toe}  onBlur={onBlur}/>
              <label>Heel length:</label>
              <input id="heel" type="text" name="heel" placeholder={props.data.heel}  onBlur={onBlur}/>
              <label>Thickness:</label>
              <input id="footThickness" type="text" name="footThickness" placeholder={props.data.footThickness}  onBlur={onBlur}/>
              <div id="printingLabel"></div>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="stem" name="stem" value="True"></input>
            <label htmlFor="stem" className="toplabel">
              Stem
            </label>
            <div className="card-data">
              <label>Stem height:</label>
              <input id="stemHeight" type="text" name="stemHeight" placeholder={props.data.stemHeight}  onBlur={onBlur}/>
              <label>Stem top:</label>
              <input id="stemTop" type="text" name="stemTop" placeholder={props.data.stemTop}  onBlur={onBlur}/>
            </div>
          </div>
        </div>
    )
}     
                
        
function mergeData(e, data){
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

function calcMargins(designWidth, designHeight, scaleFactor){
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

function scaleFactor(data){
  const canvas = document.getElementById("canvas")
  const width = data.toe + data.heel + data.stemTop + data.leftSoilMargin + data.rightSoilMargin
  const height = data.footThickness + data.stemHeight
  const factor = canvas.height/Math.max(width, height)
  return factor
}

function createDrawing(data, wMargin, hMargin, factor){
  
  return {data, wMargin, hMargin, factor}
}

// function drawPoints(data){
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


  
