import React from 'react';
import Webcam from "react-webcam";
import './Record.css';
import Button from '@material-ui/core/Button';
import { saveAs } from 'file-saver';


class Record extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(img) {
        /* Look at here, you can add it here */
        this.props.history.push('/result?img='+img);
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        //this.handleClick(imageSrc);
        var x = document.getElementById("div_func");
        x.style.display = "none";
        document.getElementById("myImg").setAttribute('src', imageSrc);
        var FileSaver = require('file-saver');
        FileSaver.saveAs(imageSrc, imageSrc+".jpg");

        // $.ajax({
        //   type: "POST",
        //   url: "~/deepdream.py",
        //   data: { param: text}
        // }).done(function( o ) {
        //    // do something
        // });

    };

    render() {
        const videoConstraints = {
            width: 800,
            height: 600,
            facingMode: "user"
        };

        return (
            <div className="CamContainer">
                <div><img id="myImg" /></div>
                <div id="div_func">
                    <Webcam
                        audio={false}
                        height={600}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={800}
                        videoConstraints={videoConstraints}
                    />
                    <div><Button variant="contained" color="secondary" onClick={this.capture} className="MiniDangerButton">Capture	&nbsp; photo</Button></div>
                </div>
            </div>

        );
    }
}

export default Record;
