import React, { Component } from 'react'

export class Contact extends Component {

    state = {
        showContact: false
    }

    showContactHandler = () => {
        this.setState({
            showContact: !this.state.showContact
        });
    }

    deleteContactHandler = () => {
        this.props.deleteContact();
    }

    render() {
        return (

            <div className="card card-body my-3">
                <h3>{this.props.name} 
                    <i className="fas fa-backspace text-danger mr-5" onClick = {this.deleteContactHandler} style = {{cursor: "pointer", float: "right"}}></i> 
                
                    <i className="fas fa-chevron-circle-down mr-5 text-success" onClick = {this.showContactHandler} style = {{cursor: "pointer", float: "right"}}></i>
                </h3>

                {/* Conditionaly reders this contact information */}


                {this.state.showContact ? (
                    <ul className="list-group">
                        <li className="list-group-item">
                            {this.props.email}
                        </li>

                        <li className="list-group-item">
                            {this.props.phone}
                        </li>
                    </ul>
                ) : null }
            </div>
        )
    }
}

export default Contact
