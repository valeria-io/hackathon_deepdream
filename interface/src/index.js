import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Record from './Record'


import { Route, BrowserRouter as Router } from 'react-router-dom'


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/record" component={Record} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
