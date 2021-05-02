import React from "react"
import "./Examples.css";

import Tilt from 'react-tilt'




const Example = ({insertImage}) =>{
    return (
    <div className="container animation">
        
        <div className="list" >        
            <Tilt>
            <ul><img onClick={insertImage}  style={{ height: 150,width:240 }} src="https://www.mundodeportivo.com/r/GODO/MD/p5/Polideportivo/Imagenes/2018/01/23/Recortada/20180121-636521661799131972_20180121211746-kKSF-U442333991631eF-980x554@MundoDeportivo-Web.jpg" alt=""/></ul>
            <ul><img onClick={insertImage} style={{ height: 150,width:240 }} src="https://i.pinimg.com/originals/f7/e0/d7/f7e0d7f2c70589b8207436b46e140526.jpg" alt=""/></ul>
            <ul><img onClick={insertImage} style={{ height: 150,width:240 }} src="https://thumbs.dreamstime.com/b/un-hombre-en-traje-blanco-juega-golf-%C3%A9l-se-est%C3%A1-preparando-para-otro-golpe-de-la-bola-103821416.jpg" alt=""/></ul>
            <ul><img onClick={insertImage} style={{ height: 150,width:240 }} src="https://i.pinimg.com/originals/a3/45/40/a345409959f26f19a59f7d6e7b4d60b4.jpg" alt=""/></ul>
            </Tilt>
        </div>
        
    </div>
        
  

    )
}

export default Example;