import  { useCallback } from "react";
import RetainA from './RetainA'



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
              <input id="gorundLevelFront" type="text" name="gorundLevelFront" placeholder={props.state.gorundLevelFront}  onChange={onChange}/>
              <label>Slope</label>
              <input id="slopeFront" type="text" name="slopeFront" placeholder={props.state.slopeFront}  onChange={onChange}/>
              <label>Back ground level:</label>
              <input id="groundLevelBack" type="text" name="groundLevelBack" placeholder={props.state.groundLevelBack}  onChange={onChange}/>
              <label>Slope:</label>
              <input id="slopeBack" type="text" name="slopeBack" placeholder={props.state.slopeBack}  onChange={onChange}/>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="layers" name="layers" value="True"></input>
            <label htmlFor="layers" className="toplabel">
              layers?
            </label>
            <div className="card-data">
              <label>Base length:</label>
              <input id="baseL" type="text" name="baseLength" placeholder={props.state.baseLength}  onChange={onChange}/>
              <label>Base thickness:</label>
              <input id="baseT" type="text" name="baseHeight" placeholder={props.state.baseHeight}  onChange={onChange}/>
              <label>Wall height:</label>
              <input id="wallH" type="text" name="wallHeight" placeholder={props.state.wallHeight}  onChange={onChange}/>
              <label>Wall thickness:</label>
              <input id="wallT" type="text" name="wallThick" placeholder={props.state.wallThick}  onChange={onChange}/>
            </div>
          </div>
        </div>
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="materials" name="materials" value="True" className="toplabel"></input>
            <label htmlFor="materials" className="toplabel">
              Materials
            </label>
            <div className="card-data">
              <label>Concrete:</label>
              <input id="concrete" type="text" name="concrete" placeholder={props.state.baseLength}  onChange={onChange}/>
              <label>Steel:</label>
              <input id="steel" type="text" name="steel" placeholder={props.state.baseHeight}  onChange={onChange}/>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }



