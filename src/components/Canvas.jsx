import { useEffect } from "react";        
import PropTypes  from 'prop-types'
// import { createLogger } from "vite";


Canvas.propTypes = {
    data: PropTypes.object
  }



export default function Canvas({data}) {
    
    useEffect(() => {
        drawSoil(data)
    }, [data])


    return (
        <canvas id="canvas" width={data.availHeight} height={data.availHeight}></canvas>
    );
}




function drawSoil(){
    
    return
}