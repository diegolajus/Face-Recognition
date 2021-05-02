import "./FaceRecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src = {imageUrl} width ="450px" height = "auto" alt =""/>
                <div id="boxdisplayed" className="bounding-boxes bounding-boxes-hidden" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                {/* <div className = "bounding-boxes" style ={ {top: this.props.box.topRow, bottom: this.props.box.bottomRow, left: this.props.box.leftCol, right: this.props.box.rightCol}}></div> */}
            </div>
        </div>
    )

	
}

export default FaceRecognition;