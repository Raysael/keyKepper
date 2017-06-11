import React, {Component} from 'react';
import AddedKey from "../AddedKey/AddedKey";
import './TableBody.css'
import PasswordList from "../PasswordList/PasswordList";

class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddKey: false,
            reloader: false
        };
        this.changeShowAddKey = this.changeShowAddKey.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
    }

    changeShowAddKey() {
        this.setState({showAddKey: !this.state.showAddKey});
    };

    reloadPage() {
        this.setState({reloader: !this.state.reloader});
    };

    render() {

        const GetMenuAddKey = () => {
            if (this.state.showAddKey === true) {
                return <AddedKey changeShowAddKey={this.changeShowAddKey} keyArray={this.props.keyArray} userId={this.props.userId}/>
            }
            else {
                return <button className="list-new__btn-add" onClick={this.changeShowAddKey}>Add</button>
            }
        };

        const keys = this.props.keyArray.map((item, index) => {
            return <PasswordList key={index} item={item} index={this.props.keyArray.indexOf(item)} userId={this.props.userId} keyArray={this.props.keyArray} edit={false}/>
        });

        return (
            <div className="table-body">
                <ul className='table-body__list'>
                    {keys}
                </ul>
                <div className="table-body__list-new">
                    {GetMenuAddKey()}
                </div>
            </div>
        )
    }
}

export default TableBody;
