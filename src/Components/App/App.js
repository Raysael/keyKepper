import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar'
import Main from "../Main/Main";
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import StartPage from '../StartPage/StartPage';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

import array from "../../array.json"

// import * as firebase from 'firebase'

class App extends Component {
    constructor() {
        super();
        this.state = {
            userSession: null,
            arrayUsers: array.Users,
            userId: null,
            arrayKeys: array.Keys
        };
        this.userVerification = this.userVerification.bind(this);
    }

    // componentDidMount(){
    //     const Ref = firebase.database().ref();
    //     Ref.on('value', snap => {
    //         this.setState({
    //             arrayKeys: snap.val().Keys,
    //             arrayUsers: snap.val().Users
    //         });
    //     })
    // }

    userVerification(value, index) {
        this.setState({
            userSession: value,
            userId: index
        });
        this.props.history.push("/")
    }

    render() {
        const GetRootPage = () => <StartPage signin={signin} signup={signup}/>;

        const GetSignUp = () => <SignUp userArray={this.state.arrayUsers}/>;
        const GetSignIn = () => <SignIn userArray={this.state.arrayUsers} userVerification={this.userVerification}/>;

        const home = (<Link to="/"><span>&#10026;</span> key keeper</Link>);
        const signin = (<Link to="/sign_in">SignIn</Link>);
        const signup = (<Link to="/sign_up">SignUp</Link>);

        const userLogin = (userLogin, GetSignUp, GetSignIn) => {
            if (userLogin === null) {
                return (
                    <div className="main-sign">
                        <Route exact path="/" component={GetRootPage}/>
                        <Route path="/sign_in" component={GetSignIn}/>
                        <Route path="/sign_up" component={GetSignUp}/>
                    </div>
                )
            }
            else{
                    return (
                        <Main userLogin={this.state.userSession} keyArray={this.state.arrayKeys} userId={this.state.userId}/>
                    )
                }

            };

        return (
            <Router>
                <div className="App">
                    <Navbar userSession={this.state.userSession} home={home} signin={signin} signup={signup} userVerification={this.userVerification}/>
                    {userLogin(this.state.userSession, GetSignUp, GetSignIn, GetRootPage)}
                </div>
            </Router>
        );
    }
}

export default App;
