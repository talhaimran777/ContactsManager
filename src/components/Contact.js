import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (

            <div className="card card-body my-3">
                <h3>{this.props.name}</h3>
                 <ul className="list-group">
                    <li className="list-group-item">
                        {this.props.email}
                    </li>

                    <li className="list-group-item">
                        {this.props.phone}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contact
