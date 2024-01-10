import React, { Component } from "react";


class Data extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({[`${e.target.name}`]: Number(e.target.value)});
    this.props.onUpdate({[`${e.target.name}`]: Number(e.target.value)})
    // console.log(this.state)
    // console.log(this.state.baseLength)
  }

  render() {
    return (
      
      <div className="model-box">
        <div className="card">
          <input type="checkbox" id="footing" name="footing" value="True"></input>
          <label for="footing" className="toplabel">
            Footing
          </label>
          <div className="card-data">
            <label>Toe length:</label>
            <input id="toe" type="text" name="toe" placeholder={this.state.toe}  onChange={this.onChange}/>
            <label>Heel length:</label>
            <input id="heel" type="text" name="heel" placeholder={this.state.heel}  onChange={this.onChange}/>
            <label>Thickness:</label>
            <input id="footThickness" type="text" name="footThickness" placeholder={this.state.footThickness}  onChange={this.onChange}/>
            <div id="printingLabel"></div>
          </div>
        </div>
        <div className="card">
          <input type="checkbox" id="stem" name="stem" value="True"></input>
          <label for="stem" className="toplabel">
            Stem
          </label>
          <div className="card-data">
            <label>Stem height:</label>
            <input id="stemHeight" type="text" name="stemHeight" placeholder={this.state.stemHeight}  onChange={this.onChange}/>
            <label>Stem top:</label>
            <input id="stemTop" type="text" name="stemTop" placeholder={this.state.stemTop}  onChange={this.onChange}/>
          </div>
        </div>
        <div className="card">
          <input type="checkbox" id="soil" name="soil" value="True"></input>
          <label for="soil" className="toplabel">
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
          <label for="layers" className="toplabel">
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
        <div className="card">
          <input type="checkbox" id="materials" name="materials" value="True" className="toplabel"></input>
          <label for="materials" className="toplabel">
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
    );
  }
}


export default Data;

