import React, {Component} from 'react';
import './TableHeader.css'

class TableHeader extends Component {
    render() {
        return (
            <div className="table-header">
                <div className="table-header-title">
                    <div className="table-header-title__item">name</div>
                    <div className="table-header-title__item">password</div>
                    <div className="table-header-title__item">url</div>
                </div>
            </div>
        )
    }
}

export default TableHeader;
