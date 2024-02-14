import  { Component } from "react";
import Data from './Data'
import Canvas from './Canvas'
import model from '../data/model'
// import {KB} from '../design/designA'


const availHeight = 0.8*window.screen.availHeight
const availWidth = 0.8*window.screen.availWidth
const initState = model(availHeight, availWidth)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(field) {
    this.setState(field);
    // test gia to Kentro Barous
    // const kb = KB([
    //   {x:0, y:0},
    //   {x:15, y:0},
    //   {x:15, y:15},
    //   {x:0, y:15},
    // ])
    // console.log(kb)
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

