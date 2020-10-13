import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (

            <div className="card card-body my-3">
                <h3>{this.props.name} 
                    <i className="fas fa-chevron-circle-down ml-3 text-success" style = {{cursor: "pointer"}}></i>

                    <i className="fas fa-backspace text-danger mr-5" style = {{cursor: "pointer", float: "right"}}></i> 
                </h3>


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
