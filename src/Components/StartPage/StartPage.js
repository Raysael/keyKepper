import React, {Component} from 'react';

class StartPage extends Component {
    render(){
        return(
            <div className="startPage">
                <h1 className="startPage__title">Hello my friend</h1>
                <h3 className="startPage__subtitle">I do not recognize you, please introduce yourself</h3>
                <button className="startPage__btn">{this.props.signin}</button>
                <p className="startPage__text">or</p>
                <button className="startPage__btn">{this.props.signup}</button>
            </div>
        )
    }
}

export default StartPage;