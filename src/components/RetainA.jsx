import  { useCallback } from "react";        
        
export default function RetainA(props){
    console.log("Retain updated")
    // console.log(props.data)
    const onBlur = useCallback(e => {
        console.log({[`${e.target.name}`]: Number(e.target.value)})
        const calcs = mergeData(e, props.data)
        props.onChange(calcs)
    })

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
  data[e.target.name] = Number(e.target.value)
  const totalWidth = data.toe+data.heel+data.stemTop+data.leftSoilMargin+data.rightSoilMargin
  const totalHeight = data.footThickness+data.stemHeight
  ({wMargin, hMargin} = calcMargins(totalWidth, totalHeight))
  // const newdata = {...data, wMargin, hMargin}
  const drawing = createDrawing(...data, wMargin, hMargin)
  return {...data, wMargin, hMargin}
}

function calcMargins(width, height){
  const canvas = document.getElementById("canvas")
  const wMargin = (canvas.width-width)/2
  const hMargin = (canvas.height-height)/2
  return {wMargin, hMargin}
}

function createDrawing(data){
  console.log(data, wMargin, hMargin)
  return
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