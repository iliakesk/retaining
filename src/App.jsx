import React, { Component } from "react";
import { useState } from 'react'
import Data from './Data'
import Canvas from './Canvas'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: 2000,
      soilLeft: 2000,
      soilRight: 5000,
      soilBottom: 500,
      baseLength: 2000,
      baseHeight: 200,
      wallThick: 200,
      wallHeight: 3000,
      soilLeftH: 500,
      soilRightH: 3600,
      canvasSize: [],
      canvasFactor: []
    }
    this.updateState = this.updateState.bind(this);
  }


  // gia to child canvas component - gia na vlepei pote allazei kati kai na to sxediazei
  //https://stackoverflow.com/questions/40795906/onchange-event-for-react-child-component-to-update-state
  updateState(field, value) {
    this.setState(field);
}



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
  

  // componentDidMount() {
  //   const availHeight = window.screen.availHeight
  //   const availWidth = window.screen.availWidth
    
  //   this.setCanvasSize(availHeight, availWidth)
  //   edw thelei kati async giati mporei na sxediasei prin ftiaxei ton kamva
  //   this.drawAll()
  // }

  componentDidUpdate(){
    const size = document.getElementById("printingLabel")
    console.log("App updated")
    // console.log(this.state)
    size.innerText = this.state.baseLength
  }
  // drawAll(){
  //   const canvas = document.getElementById("canvas")
  //   const ctx = canvas.getContext('2d')
  //   // console.log(this.props.data.baseLength)
  //   ctx.beginPath()
  //   ctx.moveTo(50,50)
  //   ctx.lineTo(500, 500)
  //   ctx.stroke()
  // }

  render() {
    return (
    <div className="app">
    <Data state = {this.state} onUpdate = {this.updateState}/>
    <Canvas data = {this.state}/>
    
  </div>
  )
  }
}

export default App
