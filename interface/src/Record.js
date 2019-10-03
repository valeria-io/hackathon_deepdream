import React from 'react';
import Webcam from "react-webcam";

import './Record.css';
import Button from '@material-ui/core/Button';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';

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
    reload(){
        window.location.reload();
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        //this.handleClick(imageSrc);
        var x = document.getElementById("div_func");
        x.style.display = "none";

        var y = document.getElementById("TryButton");
        y.style.display = "block";

        document.getElementById("myImg").setAttribute('src', imageSrc);
        var FileSaver = require('file-saver');
        FileSaver.saveAs(imageSrc, "photo_before.jpg");


        // $.ajax({
        //    url: "/deepdream",
        //    success: function(response) {
        //        console.log('hi')
        //    }
        //
        // });
            // PythonShell.run('interface/deepdream.py', function (err) {
            //     if (err) throw err;
            //     console.log('finished');
            // });

    //     let {PythonShell} = require('python-shell')
    //     PythonShell.run('interface/deepdream.py');
    //
    };

    render() {
        const videoConstraints = {
            width: 800,
            height: 600,
            facingMode: "user"
        };

        return (
            <div className="CamContainer">
                <div>
                    <img id="myImg" />
                    <div><Button variant="contained" color="secondary" onClick={this.reload} id='TryButton' className="MiniDangerButton ">Try	&nbsp; again</Button></div>

                </div>
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
