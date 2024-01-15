import { useEffect } from "react";
// import { createLogger } from "vite";

export default function Canvas({data}) {
    
    useEffect(() => {
        // console.log(data)
        drawSoil(data)
    }, [data])


    return (
        // <div id="canvas"></div>
        <canvas id="canvas" width={data.availHeight} height={data.availHeight}></canvas>
    );
}


function scaleFactor(data){
    const canvas = document.getElementById("canvas")
    // prosthetei 4 mhkos pisw kai 2 empros gia to xwma
    const width = data.toe + data.heel + data.stemTop + data.leftSoilMargin + data.rightSoilMargin// + data.margin*2
    const height = data.footThickness + data.stemHeight// + data.margin*2
    const factor = canvas.height/Math.max(width, height)
    // const centerMargins = (canvas.height - Math.min(width, height)*factor)/2
    return factor
  }


function drawSoil(data){
    const factor = scaleFactor(data)
    // console.log(factor)

    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    const startLeft = 0
    const endLeft = factor*(data.toe+data.leftSoilMargin)
    const YLeft = canvas.height - (factor*data.groundLevelFront)
    const startRight = endLeft+factor*data.stemHeight
    const endRight = startRight+factor*(data.heel+data.rightSoilMargin)
    const YRight = canvas.height - (factor*data.groundLevelBack)

    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(data.margin+startLeft, -data.margin+YLeft)
    ctx.lineTo(data.margin+endLeft,-data.margin+YLeft)
    ctx.moveTo(startRight,-data.margin+YRight)
    ctx.lineTo(endRight,-data.margin+YRight)
    ctx.strokeRect(endLeft, canvas.height - data.margin, factor*data.stemTop, -factor*data.stemHeight)
    // console.log(canvas.width)
    // console.log(canvas.height)
    // console.log(data.margin+data.groundLevelFront)
    // console.log(YLeft)
    // console.log(canvas.height)
    // console.log(data.margin+data.groundLevelBack)
    // console.log(YRight)
    ctx.stroke()
}