import React, {Component} from 'react';
import Editor from '../Editor/Editor'
import './PasswordList.css'
import * as firebase from 'firebase'

class PasswordList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            [this.props.index]: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.deletePassword = this.deletePassword.bind(this);
        this.revealPasswordStars = this.revealPasswordStars.bind(this);
        this.getPasswordEditor = this.getPasswordEditor.bind(this);
        this.editPassword = this.editPassword.bind(this);
    }

    revealPasswordStars(item) {

        function getStars() {
            let stars = '';
            for (let i = 0; i < item.length; i++) {
                stars += '*';
            }
            return stars;
        }

        return getStars();
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const lists = document.querySelectorAll('.list-items')[this.props.index];
        const list = lists.querySelectorAll('.list-items__item')[1];

        if (value === true) {
            list.innerHTML = this.props.item.password;
        }
        else {
            list.innerHTML = this.revealPasswordStars(this.props.item.password)
        }
    }

    deletePassword() {
        firebase.database().ref().child('Keys').child(this.props.index).remove();
    }

    getPasswordEditor(option) {

        const editor = (option) => {

            if (option === false) {
                if(this.props.userId === this.props.item.idUser){
                    return (
                        <li className='table-body-list'>
                            <div className="list-items">
                                <div className="list-items__item">{this.props.item.name}</div>
                                <div className="list-items__item">{this.revealPasswordStars(this.props.item.password)}</div>
                                <div className="list-items__item">{this.props.item.source}</div>
                            </div>
                            <div className="list-menu">
                                <button className="list-menu__btn">
                                    <label>
                                        reveal password
                                        <input
                                            name={'reveal_' + this.props.index}
                                            type="checkbox"
                                            onChange={this.handleInputChange}/>
                                    </label>
                                </button>
                                <button className="list-menu__btn" onClick={this.editPassword}>edit</button>
                                <button className="list-menu__btn" onClick={this.deletePassword}>delete</button>
                            </div>
                        </li>
                    )
                }
            }
            else {
                return (<Editor item={this.props.item} index={this.props.index} keyArray={this.props.keyArray} editPassword={this.editPassword}/>)
            }
        };
        return editor(option)
    }

    editPassword() {
        this.setState({
            [this.props.index]: !this.state[this.props.index]
        });
    }

    render() {
        return (
            <div className="table-body-list-container">{this.getPasswordEditor(this.state[this.props.index])}</div>
        )
    }
}
export default PasswordList;