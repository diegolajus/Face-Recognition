import React from "react"
import "./ImageLinkForm.css"


const ImageLinkForm = ({ onInputChange, buttonSubmit }) =>{
    return (
        <div className="animation-fadein">
            <div className="center">
            <div className="center " options={{ scale : 1.01}} style={{height: 'auto' , width: 300  }}>
                <div className="center pa4 br3 shadow-5 form ">
                    <input id="input" className="f4 pa2 w-70% center br2" type="text" onChange = { onInputChange } placeholder="Url image ..."/>                    
                    <button 
                    className="w-30% grow f4 link ph3 pv2 dib white br3 ml2 bg-dls" 
 
                    onClick={ buttonSubmit }
                    >Detect</button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default ImageLinkForm;