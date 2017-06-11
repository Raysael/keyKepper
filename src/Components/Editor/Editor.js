import React, {Component} from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            password: this.props.item.password,
            source: this.props.item.source
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
            let keyArray = this.props.keyArray[this.props.index]
                for(let item in keyArray) {
                    if(this.state[item]) {
                        keyArray[item] = this.state[item]
                    }
                }
            this.props.editPassword()
            //-----------------

        }
    }

    CancelAddedPassword(e) {
        e.preventDefault();
        this.props.editPassword()
    }

    render() {
        return (
                <form className='table-body-list' onSubmit={this.onSubmit}>
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
                        {/* надо написать свои методы для кликов*/}
                        <button className="list-menu__btn" onClick={this.editPassword}>save</button>
                        <button className="list-menu__btn" onClick={this.CancelAddedPassword}>cancel</button>
                    </div>
                </form>
        )
    }
}
export default Editor;