import  { useCallback, useEffect } from "react";        
import PropTypes  from 'prop-types'
import {mergeData} from "../calculations/retainA"//ayto prepei na alljei den mporei na pairnei functions apo to retainA


BackSoil.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function BackSoil(props){

  console.log("BackSoil updated")

  const {availHeight, availWidth} = props.data
  const onBlur = useCallback(e => {
      console.log("useCallback run")
      const calcs = mergeData(e, props.data)
      props.onChange(calcs)
  }, [props])

  // ayto pithanws na prepei na vgei ektos tou component. tha prepei ta arxika na ypologizontai apo alloy (diaforetika gia to kathe eidos toixoy)
  useEffect((e) => {
    console.log("useEffect run")
    const {wMargin, hMargin, factor, drawing} = mergeData(e, props.data)
    props.onChange({wMargin, hMargin, factor, drawing})
  }, [availHeight, availWidth])

  const addLayer = ()=>{
    console.log("pressed addLayer")
  }

  return(
  <div>
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="soil" name="soil" value="True"></input>
            <label htmlFor="soil" className="toplabel">
              Soil
            </label>
            <div className="card-data">
              <label>Front ground level:</label>
              <input id="gorundLevelFront" type="text" name="gorundLevelFront" defaultValue={props.data.gorundLevelFront}  onBlur={onBlur}/>
              <label>Slope</label>
              <input id="slopeFront" type="text" name="slopeFront" defaultValue={props.data.slopeFront}  onBlur={onBlur}/>
              <label>Back ground level:</label>
              <input id="groundLevelBack" type="text" name="groundLevelBack" defaultValue={props.data.groundLevelBack}  onBlur={onBlur}/>
              <label>Slope:</label>
              <input id="slopeBack" type="text" name="slopeBack" defaultValue={props.data.slopeBack}  onBlur={onBlur}/>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="layers" name="layers" defaultValue="True"></input>
            <label htmlFor="layers" className="toplabel">
              layers?
            </label>
            <div className="card-data">
              <label>Base length:</label>
              <input id="baseL" type="text" name="baseLength" defaultValue={props.data.baseLength}  onBlur={onBlur}/>
              <label>Base thickness:</label>
              <input id="baseT" type="text" name="baseHeight" defaultValue={props.data.baseHeight}  onBlur={onBlur}/>
              <label>Wall height:</label>
              <input id="wallH" type="text" name="wallHeight" defaultValue={props.data.wallHeight}  onBlur={onBlur}/>
              <label>Wall thickness:</label>
              <input id="wallT" type="text" name="wallThick" defaultValue={props.data.wallThick}  onBlur={onBlur}/>
            </div>
          </div>
        </div>
        <input className="btn-modelling" type="button" value="Add Soil Layer" onClick={addLayer}></input>
  </div>
  )
}