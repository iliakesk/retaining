import  { useEffect, useState } from "react";   // useCallback,            
// import { createPortal } from 'react-dom'; 
import PropTypes  from 'prop-types'
import {mergeData} from "../calculations/calcA"//ayto prepei na alljei den mporei na pairnei functions apo to retainA
import SoilLayers from "./SoilLayers"

BackSoil.propTypes = {
  data: PropTypes.object,
  onChange:PropTypes.func
}

export default function BackSoil(props){

  console.log("BackSoil updated")
  const [layers, showLayers] = useState(false)
  const {availHeight, availWidth} = props.data.visual
  // const onBlur = useCallback(e => {
  //     console.log("useCallback run")
  //     const calcs = mergeData(e, props.data)
  //     props.onChange(calcs)
  // }, [props])

  // ayto pithanws na prepei na vgei ektos tou component. tha prepei ta arxika na ypologizontai apo alloy (diaforetika gia to kathe eidos toixoy)
  useEffect((e) => {
    console.log("useEffect run")
    const {wMargin, hMargin, factor, drawing} = mergeData(e, props.data)
    props.onChange({wMargin, hMargin, factor, drawing})
  }, [availHeight, availWidth])

  const addLayer = ()=>{
    console.log("pressed addLayer")
  }
  const editLayers = ()=>showLayers(!layers)
  // const editLayers = ()=>{
  //   createPortal(
  //     <SoilLayers/>,
  //     document.body
  //   )
  // }

  return(
  <div>
        {props.data.model.backSoil.map((layer, index)=>{
            return(
              <div key={index}>
                <label>Layer {index || "top"}</label>
                <div>Soil: {layer.name}, γ={layer.density}, φ={layer.friction}, c={layer.cohesion}</div>
              </div>
            )
        })}
        <input className="btn-modelling" type="button" value="Add Soil Layer" onClick={addLayer}></input>
        <input className="btn-modelling" type="button" value={(!layers && "Edit Layers") || "Close Window"} onClick={editLayers}></input>
        <SoilLayers isOpen = {layers} onClose={()=>showLayers(false)}/>
  </div>
  )
}