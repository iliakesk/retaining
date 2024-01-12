import  { useCallback,  } from "react";        
        
export default function RetainA(props){
    console.log("Retain updated")
    console.log(props.props)
    const onChange = useCallback(e => {
        e.preventDefault();
        props.onUpdate(e)
    })

    return(
        <div className="cardsection">
          <div className="card">
            <input type="checkbox" id="footing" name="footing" value="True"></input>
            <label htmlFor="footing" className="toplabel">
              Footing
            </label>
            <div className="card-data">
              <label>Toe length:</label>
              <input id="toe" type="text" name="toe" placeholder={props.props.toe}  onChange={onChange}/>
              <label>Heel length:</label>
              <input id="heel" type="text" name="heel" placeholder={props.props.heel}  onChange={onChange}/>
              <label>Thickness:</label>
              <input id="footThickness" type="text" name="footThickness" placeholder={props.props.footThickness}  onChange={onChange}/>
              <div id="printingLabel"></div>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" id="stem" name="stem" value="True"></input>
            <label htmlFor="stem" className="toplabel">
              Stem
            </label>
            <div className="card-data">
              <label>Stem height:</label>
              <input id="stemHeight" type="text" name="stemHeight" placeholder={props.props.stemHeight}  onChange={onChange}/>
              <label>Stem top:</label>
              <input id="stemTop" type="text" name="stemTop" placeholder={props.props.stemTop}  onChange={onChange}/>
            </div>
          </div>
        </div>
    )
}     
        
        
        
        
        
        