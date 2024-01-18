import  { Component } from "react";
import Data from './Data'
import Canvas from './Canvas'


const availHeight = 0.8*window.screen.availHeight
const availWidth = 0.8*window.screen.availWidth
const initState = {
      toe: 500,
      heel: 1300,
      footHeight: 200,//footThickness
      stemHeight: 2500,
      stemThickness: 200,//stemTop
      soilDepthFront: 200,//groundLevelFront
      slopeFront:0,
      soilDepthBack: 2700,//groundLevelBack
      slopeBack:30,
      availHeight,
      availWidth,
      leftSoilLength:2000,//leftSoilMargin
      rightSoilLength:4000//rightSoilMargin
    }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState
    this.onUpdate = this.onUpdate.bind(this);
  }

  //https://stackoverflow.com/questions/40795906/onchange-event-for-react-child-component-to-update-state
  onUpdate(field) {
    this.setState(field);
  }

  componentDidUpdate(){
    console.log(this.state)
}

  render() {
    return (
    <div className="app">
      <Data state = {this.state} onUpdate = {this.onUpdate}/>
      <Canvas data = {this.state}/>
    </div>
  )
 }
}

export default App

