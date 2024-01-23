import  { useCallback} from "react";   //, useEffect      
import PropTypes  from 'prop-types'
import RetainA from './RetainA'
import Soil from './Soil'



Data.propTypes = {
  props: PropTypes.object,
  onUpdate:PropTypes.func,
  state: PropTypes.object,
}

export default function Data(props){
    console.log("Data updated")
    const onChange = useCallback(data => {
        props.onUpdate(data)
    })
    console.log(props.state)


    return (
      <div className="model-box">
        <RetainA data = {props.state} onChange = {onChange}/>
        <Soil data = {props.state} onChange = {onChange}/>
        
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



