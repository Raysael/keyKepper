import React, {Component} from 'react';
import './Navbar.css';

const SingOrOut = (x, signin, signup, signout) => {
    switch (x) {
        case null:
            return (
                <div className="navbar-menu">
                    <button className="navbar-menu__btn-sign">{signin}</button>
                    <button className="navbar-menu__btn-sign">{signup}</button>
                </div>
            );
        default:
            return (
                <div className="navbar-menu">
                    <p className="navbar-menu__message">Hello, master {x}</p>
                    <button className="navbar-menu__btn-sign" onClick={signout}>signout</button>
                </div>
            )
    }
};

class Navbar extends Component {
    render() {
        const signout = () => {
            this.props.userVerification(null);
        };
        return (
            <div className="navbar">
                <div className="navbar__menu">
                    <div className="navbar-menu">
                        <button className="navbar-menu__btn-home">{this.props.home}</button>
                    </div>
                    {SingOrOut(this.props.userSession, this.props.signin, this.props.signup, signout)}
                </div>
            </div>

        )
    }
}
export default Navbar