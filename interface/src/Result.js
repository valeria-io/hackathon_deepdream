import React from 'react';
import './App.css';
import result from './results/result.jpg'
import shower from './images/shower.mp3'

import Button from '@material-ui/core/Button';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        /* Look at here, you can add it here */
        this.props.history.push('/record');
    }

    render() {
        window.onload = function() {
        document.getElementById("my_audio").play();
    }
      return(
          <div className="Content">
            <div className="Banner">
                <img src={result} height="100%" width="100%"/>
                <div className="BannerText">
                    <span className='subtitle'>Deepdream&trade; presents</span>
                    <h1 className="Danger">A night with your worst nightmare</h1>
                </div>
                <audio controls id="my_audio" loop="loop" preload="auto">
              <source src={shower} type="audio/mpeg" />
                </audio>
            </div>

          </div>

        )
    }
}

export default App;
