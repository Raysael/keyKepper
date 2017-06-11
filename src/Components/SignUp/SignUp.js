import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit(e) {
        e.preventDefault();
        const users = this.props.userArray;
        for (let item in users) {
            if (users[item].username !== this.state.username) {
                if (users[item].email !== this.state.email) {
                    if (this.state.password === this.state.passwordConfirm) {
                        //this need change
                        this.props.userArray.push(this.state);
                        //----------------
                        const click = () => {
                            document.querySelector('.navbar-menu__btn-home a').click()
                        };
                        click();
                        break;
                    }
                    else {
                        console.log('Your password and confirm password do not match');
                        break;
                    }

                }
                else {
                    console.log('A user with this email already exists');
                    break;
                }

            }
            else {
                console.log('Such user already exists');
                break;
            }
        }
    }

    render() {
        return (
            <div className="SignUp">
                <form onSubmit={this.onSubmit}>
                    <h1>Please Sign up</h1>
                    <label>Email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        className="form-control"
                    />
                    <label>Username</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username"
                        className="form-control"
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        className="form-control"
                    />
                    <label>Password confirmation</label>
                    <input
                        type="text"
                        value={this.state.passwordConfirm}
                        onChange={this.onChange}
                        name="passwordConfirm"
                        className="form-control"
                    />
                    <button>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;