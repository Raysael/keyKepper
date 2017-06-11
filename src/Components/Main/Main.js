import React, {Component} from 'react';
import MainBody from '../MainBody/MainBody'
import {
    BrowserRouter as Router
} from 'react-router-dom';

import './Main.css';

class Main extends Component {
    render() {

        return (
            <Router>
                <div className="main">
                    <MainBody userLogin={this.props.userLogin} keyArray={this.props.keyArray}/>
                </div>
            </Router>
        );
    }
}

export default Main;
