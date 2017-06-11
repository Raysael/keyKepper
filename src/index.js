import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './index.css';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
