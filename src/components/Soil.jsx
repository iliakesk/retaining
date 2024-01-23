import  { useCallback, useEffect } from "react";        
import PropTypes  from 'prop-types'
import {mergeData} from "../calculations/retainA"//ayto prepei na alljei den mporei na pairnei functions apo to retainA


Soil.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function Soil(props){
    console.log("Soil updated")

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
    )
}
        // <div className="cardsection">
        //   <div className="card">
        //     <input type="checkbox" id="footing" name="footing" value="True"></input>
        //     <label htmlFor="footing" className="toplabel">
        //       Footing
        //     </label>
        //     <div className="card-data">
        //       <label>Toe length:</label>
        //       <input id="toe" type="text" name="toe" defaultValue={props.data.toe}  onBlur={onBlur}/>
        //       <label>Heel length:</label>
        //       <input id="heel" type="text" name="heel" defaultValue={props.data.heel}  onBlur={onBlur}/>
        //       <label>Thickness:</label>
        //       <input id="footHeight" type="text" name="footHeight" defaultValue={props.data.footHeight}  onBlur={onBlur}/>
        //       <div id="printingLabel"></div>
        //     </div>
        //   </div>
        //   <div className="card">
        //     <input type="checkbox" id="stem" name="stem" defaultValue="True"></input>
        //     <label htmlFor="stem" className="toplabel">
        //       Stem
        //     </label>
        //     <div className="card-data">
        //       <label>Stem height:</label>
        //       <input id="stemHeight" type="text" name="stemHeight" defaultValue={props.data.stemHeight}  onBlur={onBlur}/>
        //       <label>Stem top:</label>
        //       <input id="stemThickness" type="text" name="stemThickness" defaultValue={props.data.stemThickness}  onBlur={onBlur}/>
        //     </div>
        //   </div>
        // </div>