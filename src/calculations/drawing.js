function drawArrowLine(x1, y1, x2, y2, arrowSize) {
            // Draw the line
            const canvas = document.getElementById("canvas")
            const ctx = canvas.getContext("2d")
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            // Calculate arrow angles
            let angle = Math.atan2(y2 - y1, x2 - x1);
            let arrowAngle1 = angle - Math.PI / 6;
            let arrowAngle2 = angle + Math.PI / 6;

            // Draw arrowheads
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - arrowSize * Math.cos(arrowAngle1), y2 - arrowSize * Math.sin(arrowAngle1));
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - arrowSize * Math.cos(arrowAngle2), y2 - arrowSize * Math.sin(arrowAngle2));
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + arrowSize * Math.cos(arrowAngle2), y1 + arrowSize * Math.sin(arrowAngle2));
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1 + arrowSize * Math.cos(arrowAngle1), y1 + arrowSize * Math.sin(arrowAngle1));
            ctx.stroke();
        }


export function draw(drawing){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,canvas.width, canvas.height)

    const lines = Object.values(drawing.lines)
    lines.forEach((lineObj) => {
        let color = lineObj.color
        // console.log(color)
        let linepoints = lineObj.line

        let i=1
        let startpoint = linepoints[0]
        let nextpoint = linepoints[i]
        ctx.beginPath()
        ctx.moveTo(startpoint[0], startpoint[1])
        // console.log([startpoint[0], startpoint[1]])
        while(nextpoint){
            ctx.lineTo(nextpoint[0], nextpoint[1])
            i=i+1
            nextpoint = linepoints[i]
        }
        ctx.stroke()

        
        // Call the drawArrowLine function with desired coordinates and arrow size
        drawArrowLine(100, 350, 100, 100, 7);
    })

    // const rectangles = Object.values(drawing.rectangles)
    // const dims = Object.values(drawing.dims)
    // const text = Object.values(drawing.text)
    // ktl...
}