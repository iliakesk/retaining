import  { Component } from "react";
import Data from './Data'
import Canvas from './Canvas'
import getData from '../data/getData'
import {checks} from '../design/checks'


const availHeight = 0.8*window.screen.availHeight
const availWidth = 0.8*window.screen.availWidth
const initState = getData(availHeight, availWidth)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState
    this.onUpdate = this.onUpdate.bind(this);
  }
  

  onUpdate(field) {
    this.setState(field);

    // let modelA = wallVertices(this.state)
    // let model = [ {x:0, y:0},
    //               {x:10, y:0},
    //               {x:5, y:20},
    //               {x:0, y:20}]
    // const kb = KB(modelA)
    // console.log("KB is :")
    // console.log(kb)
    // const area = calculateArea(modelA)/1000000
    // console.log("Area is :")
    // console.log(area)
  }

  componentDidUpdate(){
    checks(this.state)
    return
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

