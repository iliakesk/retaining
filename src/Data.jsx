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
          <label>
            Footing
          </label>
          <div className="card-data">
            <label>Toe length:</label>
            <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
            <label>Heel length:</label>
            <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
            <label>Thickness:</label>
            <input id="wallH" type="text" name="wallHeight" placeholder={this.state.wallHeight}  onChange={this.onChange}/>
            <div id="printingLabel"></div>
          </div>
        </div>
        <div className="card">
          <label>
            Stem
          </label>
          <div className="card-data">
            <label>Stem top:</label>
            <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
            <label>Stem bottom:</label>
            <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
            <label>Stem height:</label>
            <input id="wallH" type="text" name="wallHeight" placeholder={this.state.wallHeight}  onChange={this.onChange}/>
          </div>
        </div>
        <div className="card">
          <label>
            Soil
          </label>
          <div className="card-data">
            <label>Front ground level:</label>
            <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
            <label>Slope</label>
            <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
            <label>Back ground level:</label>
            <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
            <label>Slope:</label>
            <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
          </div>
        </div>
        <div className="card">
          <label>
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
          <label>
            Materials
          </label>
          <div className="card-data">
            <label>Concrete:</label>
            <input id="baseL" type="text" name="baseLength" placeholder={this.state.baseLength}  onChange={this.onChange}/>
            <label>Steel:</label>
            <input id="baseT" type="text" name="baseHeight" placeholder={this.state.baseHeight}  onChange={this.onChange}/>
          </div>
        </div>
        
      </div>
    );
  }
}


export default Data;

