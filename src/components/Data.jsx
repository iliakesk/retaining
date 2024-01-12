import  { Component } from "react";
import RetainA from './RetainA'
import PropTypes from 'prop-types'

class Data extends Component {
  static get propTypes() { 
    return { 
        state: PropTypes.any, 
        onUpdate: PropTypes.func 
    }; 
  }
  constructor(props) {
    super(props);
    
    this.state = this.props.state
    this.onChange = this.onChange.bind(this);
  }
  
  // onUpdate(){

  // }

  onChange(e) {
    this.setState({[`${e.target.name}`]: Number(e.target.value)});
    this.props.onUpdate({[`${e.target.name}`]: Number(e.target.value)})
    // console.log(this.state.baseLength)
  }

  componentDidUpdate(){
    console.log("Data updated")
    // this.setState(this.props.state) ΠΟΤΕ ΕΔΩ ΜΕΣΑ setState ΓΙΑΤΙ ΚΑΝΕΙ ΑΠΕΙΡΑ LOOP
    console.log(this.state)
  }

  render() {
    return (
      <div className="model-box">
        <RetainA props = {this.state} onUpdate = {this.onChange}/>
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="soil" name="soil" value="True"></input>
            <label htmlFor="soil" className="toplabel">
              Soil
            </label>
            <div className="card-data">
              <label>Front ground level:</label>
              <input id="gorundLevelFront" type="text" name="gorundLevelFront" placeholder={this.state.gorundLevelFront}  onChange={this.onChange}/>
              <label>Slope</label>
              <input id="slopeFront" type="text" name="slopeFront" placeholder={this.state.slopeFront}  onChange={this.onChange}/>
              <label>Back ground level:</label>
              <input id="groundLevelBack" type="text" name="groundLevelBack" placeholder={this.state.groundLevelBack}  onChange={this.onChange}/>
              <label>Slope:</label>
              <input id="slopeBack" type="text" name="slopeBack" placeholder={this.state.slopeBack}  onChange={this.onChange}/>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="layers" name="layers" value="True"></input>
            <label htmlFor="layers" className="toplabel">
              layers?
            </label>
            <div className="card-data">
              <label>Base length:</label>
              <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
              <label>Base thickness:</label>
              <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
              <label>Wall height:</label>
              <input id="wallH" type="text" name="wallHeight" placeholder={this.state.wallHeight}  onChange={this.onChange}/>
              <label>Wall thickness:</label>
              <input id="wallT" type="text" name="wallThick" placeholder={this.state.wallThick}  onChange={this.onChange}/>
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
              <input id="concrete" type="text" name="concrete" placeholder={this.state.baseLength}  onChange={this.onChange}/>
              <label>Steel:</label>
              <input id="steel" type="text" name="steel" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}


export default Data;

