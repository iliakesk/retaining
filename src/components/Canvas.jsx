import React, { Component } from "react";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {availHeight:'',
                  availWidth:'',
                ...this.props.data}
  }

  componentDidMount() {
    console.log("Canvas mounted")
    // this.calculateAll()
    const availHeight = window.screen.availHeight
    const availWidth = window.screen.availWidth
    this.setState(prevState => ({availHeight, availWidth}))
    this.draw()
  }

  calculate(availHeight, availWidth) {
    
  }


  componentDidUpdate(){

    console.log("Canvas updated")
    console.log(this.state)
    // this.calculateAll()
    this.draw()
  }

  draw(){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    // console.log(this.state.margin)
    // console.log(this.state.leftSoilHeight)
    // console.log(this.state.soilLeft)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(this.state.margin, this.state.leftSoilHeight)
    ctx.lineTo(this.state.soilLeft, this.state.leftSoilHeight)
    ctx.stroke()
  }


  drawAll(){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(50,50)
    ctx.lineTo(this.props.data.baseLength, this.props.data.baseLength)
    ctx.stroke()
  }

  render() {
    return (
        // <div id="canvas"></div>
        <canvas id="canvas"></canvas>
    );
  }
}


export default Canvas;


// setCanvasSize(availHeight, availWidth) {
  //     const cropeddata = (({margin,
  //                         soilLeft,
  //                         soilRight,
  //                         soilBottom,
  //                         baseLength,
  //                         baseHeight,
  //                         wallThick,
  //                         wallHeight,
  //                         soilLeftH,
  //                         soilRightH})=>({margin,
  //                                         soilLeft,
  //                                         soilRight,
  //                                         soilBottom,
  //                                         baseLength,
  //                                         baseHeight,
  //                                         wallThick,
  //                                         wallHeight,
  //                                         soilLeftH,
  //                                         soilRightH}))(this.props.data)
  
  //     const totalH = this.props.data.margin*2 + this.props.data.baseHeight + this.props.data.wallHeight + this.props.data.soilBottom
  //     const totalW = this.props.data.margin*2 + this.props.data.wallThick + this.props.data.baseLength + this.props.data.soilLeft + this.props.data.soilRight
  //     const fH = 0.7*availHeight/totalH
  //     const fW = 0.7*availWidth/totalW
  
  //     const scaleddata = Object.fromEntries(Object.entries(cropeddata).map(([name, value])=>[name, Math.round(value*fH)]))
  //     this.setState(scaleddata)
  
      
  
  //     const canvas = document.getElementById("canvas")
  //     const size = document.getElementById("printingLabel")
  //     size.innerText = this.state.baseLength
  //     canvas.height = totalH*fH
  //     canvas.width = totalW*fW
  //     this.setState({canvasFactor: [fH, fW],
  //                     canvasSize: [canvas.width, canvas.height]})
      
  // //   }
  
  // // calculateAll(){
      
  //     console.log(this.state)
  //     const totalHeight = scaleddata.margin + scaleddata.baseHeight + scaleddata.wallHeight + scaleddata.soilBottom
  
  //     const leftSoilHeight = totalHeight-scaleddata.soilLeftH
      
  //     this.setState({[`${leftSoilHeight}`]:leftSoilHeight})
  //     // const canvas = document.getElementById("canvas")
  //     const ctx = canvas.getContext('2d')
  //     // console.log(scaleddata.margin)
  //     // console.log(leftSoilHeight)
  //     // console.log(scaleddata.soilLeft)
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)
  //     ctx.beginPath()
  //     ctx.moveTo(scaleddata.margin, leftSoilHeight)
  //     ctx.lineTo(scaleddata.soilLeft, leftSoilHeight)
  //     ctx.stroke()
  // }

