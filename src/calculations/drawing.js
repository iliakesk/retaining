



export function draw(drawing){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,canvas.width, canvas.height)

    const lines = Object.values(drawing.lines)
    lines.forEach((lineObj) => {
        let color = lineObj.color
        let linepoints = lineObj.line

        let i=1
        let startpoint = linepoints[0]
        let nextpoint = linepoints[i]
        ctx.beginPath()
        ctx.moveTo(startpoint[0], startpoint[1])
        console.log([startpoint[0], startpoint[1]])
        while(nextpoint){
            ctx.lineTo(nextpoint[0], nextpoint[1])
            i=i+1
            nextpoint = linepoints[i]
        }
        ctx.stroke()
    })

    // const rectangles = Object.values(drawing.rectangles)
    // const dims = Object.values(drawing.dims)
    // const text = Object.values(drawing.text)
    // ktl...
}