import React, {Component} from 'react';
import './AddedKey.css';
// import * as firebase from 'firebase';

class AddedKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            source: '',
            idUser: this.props.userId
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.CancelAddedPassword = this.CancelAddedPassword.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.name !== '' && this.state.password !== '') {
            //---need change---
            // firebase.database().ref().child('Keys').push(this.state); - //It breaks here (
        this.props.keyArray.push(this.state);
            this.props.changeShowAddKey()
            //-----------------
        }
    }

    CancelAddedPassword(e) {
        e.preventDefault();
        this.props.changeShowAddKey()
    }

    render() {
        return (
            <div className="list-new__added-block">
                <h3 className="list-items__title">Saved new password</h3>
                <form onSubmit={this.onSubmit} className="list-new-added-block">
                    <div className="list-items__labels">
                        <div className="list-items__item">Name</div>
                        <div className="list-items__item">Password</div>
                        <div className="list-items__item">Url</div>
                    </div>
                    <div className="list-items">
                        <div className="list-items__item">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.onChange}
                                name="name"
                                className="form-control"
                            />
                        </div>
                        <div className="list-items__item">
                            <input
                                type="text"
                                value={this.state.password}
                                onChange={this.onChange}
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <div className="list-items__item">
                            <input
                                type="text"
                                value={this.state.source}
                                onChange={this.onChange}
                                name="source"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="list-menu">
                    <button className="list-menu__btn">Add password</button>
                    <button onClick={this.CancelAddedPassword} className="list-menu__btn">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddedKey;