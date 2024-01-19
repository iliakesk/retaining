



export function draw(drawing){
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,canvas.width, canvas.height)
    const lines = Object.values(drawing.lines)
    lines.forEach((lineObj) => {
        let color = lineObj.color
        let line = lineObj.line

        let i=1
        let startpoint = line[0]
        let nextpoint = line[i]
        ctx.beginPath()
        ctx.moveTo(startpoint[0], startpoint[1])
        while(nextpoint){
            ctx.lineTo(nextpoint[0], nextpoint[1])
            i=i+1
            nextpoint = line[i]
        }
        ctx.stroke()
    })
}


 // arrays of points in arrays of lines
// export function draw(drawing){
//     const canvas = document.getElementById("canvas")
//     const ctx = canvas.getContext("2d")
//     ctx.clearRect(0,0,canvas.width, canvas.height)
    
//     const lines = Object.values(drawing.lines)
    
//     lines.forEach((line) => {
//         let i=1
//         let startpoint = line[0]
//         let nextpoint = line[i]

//         ctx.beginPath()
//         ctx.moveTo(startpoint[0], startpoint[1])
//         while(nextpoint){
//             console.log(nextpoint)
//             ctx.lineTo(nextpoint[0], nextpoint[1])
//             i=i+1
//             nextpoint = line[i]
//         }
//         ctx.stroke()
//     })
    
//     return
// }