import { useEffect } from "react";

export default function Canvas({data}) {
    
    useEffect(() => {
        console.log(data)
        draw(data)
    }, [data])


    return (
        // <div id="canvas"></div>
        <canvas id="canvas"></canvas>
    );
}

function draw(data){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    // console.log(this.state.margin)
    // console.log(this.state.leftSoilHeight)
    // console.log(this.state.soilLeft)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(50,50)
    ctx.lineTo(data.toe, data.heel)
    ctx.stroke()
  }


//   drawAll(){
//     const canvas = document.getElementById("canvas")
//     const ctx = canvas.getContext('2d')
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.beginPath()
//     ctx.moveTo(50,50)
//     ctx.lineTo(this.props.data.baseLength, this.props.data.baseLength)
//     ctx.stroke()
//   }