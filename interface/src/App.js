import React from 'react';
import './App.css';
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
            <div className="Banner"></div>
                <Button variant="contained" color="secondary" className='StartButton' onClick={this.handleClick}>
                    Start your own nightmare
                </Button>
          </div>
        )
    }
}

export default App;
