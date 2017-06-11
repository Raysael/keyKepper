import React, {Component} from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const getUser = () => {
            const users = this.props.userArray;
            for (let item in users) {
                if (users[item].username === this.state.username && users[item].password === this.state.password) {
                    this.props.userVerification(users[item].username, item);
                }
            }

        };
        getUser();
    }

    render() {
        return (
            <div className="SignIn">
                <form onSubmit={this.onSubmit}>
                    <h1>Please Sign in</h1>

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
                    <button>Sign in</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
