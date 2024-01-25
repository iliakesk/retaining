import  { useCallback, useEffect } from "react";        
import PropTypes  from 'prop-types'
import {mergeData} from "../calculations/calcA"//ayto prepei na alljei den mporei na pairnei functions apo to retainA


FrontSoil.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function FrontSoil(props){
    console.log("FrontSoil updated")
    console.log(props)

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

    return(
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
        </div>
    )
}