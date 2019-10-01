import React from 'react';
import Webcam from "react-webcam";
import './Record.css';
import Button from '@material-ui/core/Button';
import { saveAs } from 'file-saver';


class Record extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        var FileSaver = require('file-saver');
        console.log(imageSrc)
        FileSaver.saveAs('images/'+imageSrc, "image.jpg");
    };

    render() {
        const videoConstraints = {
            width: 800,
            height: 600,
            facingMode: "user"
        };

        return (
            <div className="CamContainer">
                <Webcam
                    audio={false}
                    height={600}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={800}
                    videoConstraints={videoConstraints}
                />
                <div><Button variant="contained" color="secondary" onClick={this.capture} className="Button">Capture photo</Button></div>
            </div>

        );
    }
}

export default Record;
