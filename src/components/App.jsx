import  { Component } from "react";
import Data from './Data'
import Canvas from './Canvas'
import model from '../data/getData'
import {checks} from '../design/checks'


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
    
  }

  componentDidUpdate(){
    // console.log(this.state)
    console.log(checks(this.state))
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

