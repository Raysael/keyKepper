import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD6yDe6L0_A8pzmnUygy6eYzuTxa6Qby-o",
    authDomain: "keykeeper-32905.firebaseapp.com",
    databaseURL: "https://keykeeper-32905.firebaseio.com",
    projectId: "keykeeper-32905",
    storageBucket: "keykeeper-32905.appspot.com",
    messagingSenderId: "670192380025"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
