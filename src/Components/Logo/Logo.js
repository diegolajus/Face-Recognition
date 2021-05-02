import React from "react"
import Tilt from 'react-tilt'
import logo from "./icon.png"
import "./Logo.css"
import GitHubButton from 'react-github-btn'




const Logo = () =>{
    return (
      
        <div className=" mt4 center flex-column animation-fadein ">
          
            <div className="git-container">
            <ul>
              <GitHubButton href="https://github.com/diegolajus/Face-Recognition-React-App" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
            </ul>
            <ul>
              <GitHubButton href="https://github.com/diegolajus/Face-Recognition-React-App/fork" data-icon="octicon-repo-forked" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
            </ul>
            
            <ul>
              <GitHubButton href="https://github.com/diegolajus/Face-Recognition-React-App/issues" data-icon="octicon-issue-opened" aria-label="Issue ntkme/github-buttons on GitHub">Issue</GitHubButton>
            </ul>
            </div>
            
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