import React from 'react';
import './App.css';
import deepdream_video from './images/lady.gif'
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
      return(
          <div className="Content">
            <div className="Banner">
                <img src={deepdream_video} height="100%" width="100%"/>
                <div className="BannerText">
                    <span className='subtitle'>Deepdream&trade; presents</span>
                    <h1 className="Danger">A night with your worst nightmare</h1>
                </div>
                <div className='ButtonContainer'>
                <Button variant="outlined" color="secondary" className='StartButton' onClick={this.handleClick}>
                    Start your own 	&nbsp;<span className='MiniDanger'>nightmare</span>
                </Button>
                </div>
            </div>

          </div>
        )
    }
}

export default App;
