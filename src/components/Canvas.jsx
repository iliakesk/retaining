import { useEffect } from "react";
// import { createLogger } from "vite";

export default function Canvas({data}) {
    
    useEffect(() => {
        console.log(data)
        drawSoil(data)
    }, [data])


    return (
        // <div id="canvas"></div>
        <canvas id="canvas" width={data.availHeight} height={data.availHeight}></canvas>
    );
}

// function draw(data){
//     const canvas = document.getElementById("canvas")
//     const ctx = canvas.getContext('2d')
//     // console.log(canvas.width)
//     // console.log(canvas.height)
//     // console.log(this.state.soilLeft)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.beginPath()
//     ctx.moveTo(50,50)
//     ctx.lineTo(50,650)
//     ctx.lineTo(650,650)
//     ctx.lineTo(650,50)
//     ctx.lineTo(50,50)
//     ctx.stroke()
//   }


function scaleFactor(data){
    const canvas = document.getElementById("canvas")
    // prosthetei 4 mhkos pisw kai 2 empros gia to xwma
    const width = data.toe + data.heel + data.stemTop + 6000 + data.margin*2
    const height = data.footThickness + data.stemHeight + data.margin*2
    return canvas.height/Math.max(width, height)
}

function drawSoil(data){
    const factor = scaleFactor(data)
    // console.log(factor)

    const startLeft = data.margin
    const endLeft = data.margin+data.toe
    const YLeft = data.margin+data.stemHeight+data.footThickness-data.groundLevelFront
    const startRight = endLeft+data.stemHeight
    const endRight = startRight+data.heel+4000
    const YRight = YLeft+data.groundLevelFront-data.groundLevelBack

    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(factor*startLeft, factor*YLeft)
    ctx.lineTo(factor*endLeft,factor*YLeft)
    ctx.moveTo(factor*startRight,factor*YRight)
    ctx.lineTo(factor*endRight,factor*YRight)
    console.log(canvas.width)
    console.log(factor*startRight)
    console.log(factor*YRight)
    ctx.stroke()
}