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
      availWidth:0
    }
    this.onUpdate = this.onUpdate.bind(this);
  }


  // gia to child canvas component - gia na vlepei pote allazei kati kai na to sxediazei
  //https://stackoverflow.com/questions/40795906/onchange-event-for-react-child-component-to-update-state
  onUpdate(field) {
    // console.log(field)
    this.setState(field);//edw prepei na to grapsw kapws diaforetika
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



  // drawAll(){
  //   const canvas = document.getElementById("canvas")
  //   const ctx = canvas.getContext('2d')
  //   // console.log(this.props.data.baseLength)
  //   ctx.beginPath()
  //   ctx.moveTo(50,50)
  //   ctx.lineTo(500, 500)
  //   ctx.stroke()
  // }

  // setCanvasSize(availHeight, availWidth) {
    
  //   const totalH = this.state.margin*2 + this.state.baseHeight + this.state.wallHeight + this.state.soilBottom
  //   const totalW = this.state.margin*2 + this.state.wallThick + this.state.baseLength + this.state.soilLeft + this.state.soilRight
  //   const fH = 0.7*availHeight/totalH
  //   const fW = 0.7*availWidth/totalW

  //   const canvas = document.getElementById("canvas")
  //   const size = document.getElementById("printingLabel")
  //   size.innerText = this.state.baseLength
  //   canvas.height = totalH*fH
  //   canvas.width = totalW*fW
  //   this.setState({canvasFactor: [fH, fW],
  //                   canvasSize: [canvas.width, canvas.height]})
    
  // }
  


