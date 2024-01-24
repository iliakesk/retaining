// import  { useEffect } from "react";
import { createPortal } from 'react-dom';    
import PropTypes  from 'prop-types'


SoilLayers.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function SoilLayers(props){
    if (!props.isOpen) return null

    return(
        createPortal(<div className="soilLayers">
          <div className="card">
            <input type="checkbox" id="soil" name="soil" value="True"></input>
            <label htmlFor="soil" className="toplabel">
              Soil
            </label>
            <div className="card-data">
              <label>Front ground level:</label>
              <input id="gorundLevelFront" type="text" name="gorundLevelFront"  />
              <label>Slope</label>
              <input id="slopeFront" type="text" name="slopeFront"   />
              <label>Back ground level:</label>
              <input id="groundLevelBack" type="text" name="groundLevelBack"  />
              <label>Slope:</label>
              <input id="slopeBack" type="text" name="slopeBack"   />
            </div>
          </div>
          <button onClick={props.onClose}>Close</button>
        </div>,document.body)
    )
}