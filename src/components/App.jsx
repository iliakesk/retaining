import  { Component } from "react";
import Data from './Data'
import Canvas from './Canvas'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toe: 500,
      heel: 1300,
      footThickness: 200,
      stemHeight: 2500,
      stemTop: 200,
      groundLevelFront: 200,
      slopeFront:0,
      groundLevelBack: 2700,
      slopeBack:30,
      availHeight:0,
      availWidth:0,
      leftSoilMargin:2000,
      rightSoilMargin:4000
    }
    this.onUpdate = this.onUpdate.bind(this);
  }


  //https://stackoverflow.com/questions/40795906/onchange-event-for-react-child-component-to-update-state
  onUpdate(field) {
    // console.log(field)
    this.setState(field);
  }

  componentDidMount() {
    const availHeight = 0.8*window.screen.availHeight
    const availWidth = 0.8*window.screen.availWidth
    const margin = 0.05*availWidth
    this.setState({availHeight, availWidth, margin})
    // const canvas = document.getElementById("canvas")
    // console.log(canvas.width)
    // console.log(canvas.height)
    // this.setCanvasSize(availHeight, availWidth)
  }

  componentDidUpdate(){
    console.log("App updated")
    console.log(this.state)
    // const canvas = document.getElementById("canvas")
    // console.log(canvas.width)
    // console.log(canvas.height)
    // size.innerText = this.state.toe
    //amesws meta prepei na janaypologizei tis diafores parametrous sto state px synoliko mhkos kai ycos
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

