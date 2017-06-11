import React, {Component} from 'react';
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

class Table extends Component {
    render() {
        return (
            <div className="table">
                <TableHeader/>
                <TableBody keyArray={this.props.keyArray} userId={this.props.userId}/>
            </div>
        )
    }
}

export default Table;