import  { useCallback } from "react";        
import PropTypes  from 'prop-types'
import RetainA from './RetainA'

Data.propTypes = {
  props: PropTypes.object,
  onUpdate:PropTypes.func
}

export default function Data(props){
    console.log("Data updated")
    const onChange = useCallback(data => {
        props.onUpdate(data)
    })


    return (
      <div className="model-box">
        <RetainA data = {props.state} onChange = {onChange}/>
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="soil" name="soil" value="True"></input>
            <label htmlFor="soil" className="toplabel">
              Soil
            </label>
            <div className="card-data">
              <label>Front ground level:</label>
              <input id="gorundLevelFront" type="text" name="gorundLevelFront" defaultValue={props.state.gorundLevelFront}  onChange={onChange}/>
              <label>Slope</label>
              <input id="slopeFront" type="text" name="slopeFront" defaultValue={props.state.slopeFront}  onChange={onChange}/>
              <label>Back ground level:</label>
              <input id="groundLevelBack" type="text" name="groundLevelBack" defaultValue={props.state.groundLevelBack}  onChange={onChange}/>
              <label>Slope:</label>
              <input id="slopeBack" type="text" name="slopeBack" defaultValue={props.state.slopeBack}  onChange={onChange}/>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="layers" name="layers" defaultValue="True"></input>
            <label htmlFor="layers" className="toplabel">
              layers?
            </label>
            <div className="card-data">
              <label>Base length:</label>
              <input id="baseL" type="text" name="baseLength" defaultValue={props.state.baseLength}  onChange={onChange}/>
              <label>Base thickness:</label>
              <input id="baseT" type="text" name="baseHeight" defaultValue={props.state.baseHeight}  onChange={onChange}/>
              <label>Wall height:</label>
              <input id="wallH" type="text" name="wallHeight" defaultValue={props.state.wallHeight}  onChange={onChange}/>
              <label>Wall thickness:</label>
              <input id="wallT" type="text" name="wallThick" defaultValue={props.state.wallThick}  onChange={onChange}/>
            </div>
          </div>
        </div>
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="materials" name="materials" defaultValue="True" className="toplabel"></input>
            <label htmlFor="materials" className="toplabel">
              Materials
            </label>
            <div className="card-data">
              <label>Concrete:</label>
              <input id="concrete" type="text" name="concrete" defaultValue={props.state.baseLength}  onChange={onChange}/>
              <label>Steel:</label>
              <input id="steel" type="text" name="steel" defaultValue={props.state.baseHeight}  onChange={onChange}/>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }



