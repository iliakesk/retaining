import  { useCallback, useEffect } from "react";        
import PropTypes  from 'prop-types'
import {mergeData, calcMargins, scaleFactor} from "../calculations/canvas"


RetainA.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function RetainA(props){
    console.log("Retain updated")
    // console.log(props.data)
    const onBlur = useCallback(e => {
        console.log("useCallback run")
        const calcs = mergeData(e, props.data)
        props.onChange(calcs)
    }, [props])

    // ayto pithanws na prepei na vgei ektos tou component
    useEffect((e) => {
      console.log("useEffect run")
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
              <input id="toe" type="text" name="toe" defaultValue={props.data.toe}  onBlur={onBlur}/>
              <label>Heel length:</label>
              <input id="heel" type="text" name="heel" defaultValue={props.data.heel}  onBlur={onBlur}/>
              <label>Thickness:</label>
              <input id="footThickness" type="text" name="footThickness" defaultValue={props.data.footThickness}  onBlur={onBlur}/>
              <div id="printingLabel"></div>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="stem" name="stem" defaultValue="True"></input>
            <label htmlFor="stem" className="toplabel">
              Stem
            </label>
            <div className="card-data">
              <label>Stem height:</label>
              <input id="stemHeight" type="text" name="stemHeight" defaultValue={props.data.stemHeight}  onBlur={onBlur}/>
              <label>Stem top:</label>
              <input id="stemTop" type="text" name="stemTop" defaultValue={props.data.stemTop}  onBlur={onBlur}/>
            </div>
          </div>
        </div>
    )
}