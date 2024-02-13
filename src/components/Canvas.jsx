import { useEffect } from "react";        
import PropTypes  from 'prop-types'
import {draw} from "../calculations/drawing"


Canvas.propTypes = {
    data: PropTypes.object
  }



export default function Canvas({data}) {
    
    useEffect(() => {
        if(data.drawing){
            draw(data.drawing)
        }
        
    }, [data.drawing])


    return (
        <canvas id="canvas" width={data.visual.availHeight} height={data.visual.availHeight}></canvas>
    );
}

