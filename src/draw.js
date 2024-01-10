bLength = 2
bHeight = .20
wThick = .20
wHeight= 3



const canvas = document.getElementById("canvas")
const size = document.getElementById("size")
size.innerText = canvas.height

const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(50,50)
ctx.lineTo(100,100)
ctx.stroke()

// root.innerText = canvas.width

