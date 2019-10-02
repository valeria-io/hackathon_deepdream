import React from 'react';
import './Record.css';
import Button from '@material-ui/core/Button';


class Result extends React.Component {
    showImg(){
        var urlParams = new URLSearchParams(window.location.search);

        var src = urlParams.get('img');
        document.getElementById("myImg").setAttribute('src', src);
;

    }
    render() {


        return (
            <div className="CamContainer">
                RESULT
                <div className='left'>
                    <div
                    ><Button variant="contained" color="secondary" onClick={this.showImg} className="MiniDangerButton">Capture	&nbsp; photo</Button></div>

                </div>
                <div>
                    <img id="myImg"></img>
                </div>
            </div>

        );
    }
}

export default Result;
