import { useState} from "react"; //   , useCallback, useEffect      
import PropTypes  from 'prop-types'
import BackSoil from "./BackSoil"
import FrontSoil from "./FrontSoil"
import BaseSoil from "./BaseSoil"
// import {mergeData} from "../calculations/retainA"



Soil.propTypes = {
    data: PropTypes.object,
    onChange:PropTypes.func
  }

export default function Soil(props){
    const components = {
        FrontSoil,
        BackSoil,
        BaseSoil
    };

    const [activeTab, setActiveTab] = useState("FrontSoil");

    const setFrontSoil = () => {setActiveTab("FrontSoil");};
    const setBackSoil = () => {setActiveTab("BackSoil");};
    const setBaseSoil = () => {setActiveTab("BaseSoil");};

    const handleContent = (activeTab) => {
        const ActiveTab = components[activeTab]
        
        return <ActiveTab data = {props.data} onBlur = {props.onChange} onChange = {props.onChange}/>
    }
  return (
  <div className="tabs">
      <ul className="tablist">
        {/* <li className={activeTab === "Nodes1" ? "active" : ""} onClick={setFrontSoil1}>Nodes1</li> */}
        
        <li className={activeTab === "FrontSoil" ? "active" : ""} onClick={setFrontSoil}>Front Soil</li>
        <li className={activeTab === "BackSoil" ? "active" : "" } onClick={setBackSoil}>Back Soil</li>
        <li className={activeTab === "BaseSoil" ? "active" : "" } onClick={setBaseSoil}>Base Soil</li>
        
      </ul>
      {handleContent(activeTab)}
      </div>
  );
}
