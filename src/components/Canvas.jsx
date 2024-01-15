import { useEffect } from "react";        
import PropTypes  from 'prop-types'
// import { createLogger } from "vite";


Canvas.propTypes = {
    data: PropTypes.object,
    onChange:PropTypes.func
  }



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




function drawSoil(){
    
    return
}