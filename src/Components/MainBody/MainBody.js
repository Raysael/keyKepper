import React, {Component} from "react";
import Table from "../Table/Table";

class MainBody extends Component {

    render() {
        const renderUserTitle = (user, key, id) => {
            if (user) {
                return (
                    <div className="main-body__table">
                        <h1>I brought your keys, master {user}</h1>
                        <Table keyArray={key} userId={id}/>
                    </div>
                )
            }
        };
        return (
            <div className="main-body">
                {renderUserTitle(this.props.userLogin, this.props.keyArray, this.props.userId)}
            </div>
        )
    }
}
export default MainBody;