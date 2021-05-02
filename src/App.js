import React, { Component } from "react"
import './App.css';
import Logo from "./Components/Logo/Logo.js"
import ImageLinkForm from  "./Components/ImageLinkForm/ImageLinkForm.js"
import FaceRecognition from  "./Components/FaceRecognition/FaceRecognition.js"
import Examples from  "./Components/Examples/Examples.js"
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';

const paraparticles = {

	particles:{
		number:{
			value:50,
			density:
			{
				enable:true,
				value_area:800
			}
		}
	}
}


const app = new Clarifai.App({
 apiKey: '24cf1b1ac82f423fbe85453037f398af'
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      input:"",
      imageUrl:"",
      box:{},
      route: "signin",
      isSignedIn: false,
      user: {
        id:"",
        name: "",
        email: "",
        password:"",
        entries:0,
        joined: ""
      }
    }
  }



  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries:data.entries,
      joined:data.joined
    }})
  }


  calculateFaceLocation = (data) => {

    const faceDimensions = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage")
    const width = Number(image.width);
    const height = Number(image.height)
    //return the object square box made by the 4 dots from fadeDimensions
    return {
      leftCol: faceDimensions.left_col * width,
      topRow: faceDimensions.top_row * height,
      rightCol: width - (faceDimensions.right_col * width),
      bottomRow: height - (faceDimensions.bottom_row * height)
    }
    

  }

  insertImage = (e) => {
    const spinner = document.getElementById("spinner");
    const boxdisplayed = document.getElementById("boxdisplayed");
    boxdisplayed.style.visibility = "hidden"; 
    spinner.removeAttribute('hidden');

    this.setState({imageUrl: e.target.getAttribute('src')})

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      e.target.getAttribute('src'))
		.then(response => {
      if (response){
        fetch("http://localhost:3000/image")
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log (error))
      spinner.setAttribute('hidden', '');
      boxdisplayed.style.visibility = "visible"; 
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    spinner.setAttribute('hidden', '');
    boxdisplayed.style.visibility = "visible"; 


    })
    .catch(error => console.log (error)) 

  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box :box});
  }

  getImageData = (event) =>	{
		this.setState({boxWidth:event.target.width, boxHeight:event.target.height});
	}

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }   

  

  buttonSubmit = (event) => 	{
    const spinner = document.getElementById("spinner");
    const boxdisplayed = document.getElementById("boxdisplayed");
    boxdisplayed.style.visibility = "hidden"; 
    spinner.removeAttribute('hidden');

    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
		.then(response => {
      if (response){
        fetch("http://localhost:3000/image", {
          method: "put",
          headers: {"Content-Type" : "application/json"},
          body : JSON.stringify ({
          id: this.state.user.id
        })           
      })
      .then(response => response.json())
      .then(count => {
        this.setState (Object.assign(this.state.user, {entries: count}))
    })
      spinner.setAttribute('hidden', '');
      boxdisplayed.style.visibility = "visible"; 

      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(error => console.log (error))
  
  }
  
  onRouteChange = (route) => {
    this.setState({route: route})
    if(route==="signin"){
      this.setState({isSignedIn: false})
    }else if (route === "home"){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }  
  

  render(){
    const { imageUrl, searchName, box,} = this.state
  return (
      <div className="App">  
      <Particles className="particles"
        params = {paraparticles} /> 
      <div>
      <Examples insertImage={this.insertImage}/>
      <Logo/>,
        <ImageLinkForm
        onInputChange={this.onInputChange}
        buttonSubmit={this.buttonSubmit}
        />,
        <FaceRecognition  imageUrl={imageUrl} box={box} searchName={searchName} getImageData={this.getImageData}/>

        <div>
          <div hidden id="spinner"></div>
        </div>
      </div>    
      </div> 
    );
  }
}

export default App;
