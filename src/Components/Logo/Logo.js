import React from "react"
import Tilt from 'react-tilt'
import logo from "./icon.png"
import "./Logo.css"


const Logo = () =>{
    return (
        <div className=" mt4 center flex-column ">
            <p className="f3 white">
                {"This Bellboy will detect faces in your pictures. Try it!"}
            </p>

            <Tilt className="Tilt br4 shadow-2 center" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner pa3"> <img style={{ paddingTop: "5%",  height: 150, width: 150 }} src={logo} alt="logo"/></div>
            </Tilt>
        
        </div>
    )
}

export default Logo;