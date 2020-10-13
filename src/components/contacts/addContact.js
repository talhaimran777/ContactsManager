import React, { Component } from 'react';

class addContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {this.setState({[e.target.name]: e.target.value})};

    onHandleSubmit = (e) => {
        e.preventDefault()
        console.log('State Condition: ', this.state);
    }
    render() {

        const {name, email, phone} = this.state;

        return (
            <div className = "card mb-3">
                <div className="card-header">
                    <h4 className = "text-center">Add Contact</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Enter Name</label>
                            <input type ="text"
                                name = "name"
                                onChange={this.onChange}
                                value = {name}
                                placeholder = "Enter name..."
                                className="form-control form-control-lg"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Enter Email</label>
                            <input type ="text"
                                name = "email"
                                onChange={this.onChange}
                                value = {email}
                                placeholder = "Enter email..."
                                className="form-control form-control-lg"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Enter Number</label>
                            <input type ="text"
                                name = "phone"
                                onChange={this.onChange}
                                value = {phone}
                                placeholder = "Enter phone..."
                                className="form-control form-control-lg"
                            />
                        </div>

                        <input type = "submit" value = "Add Contact" className="btn btn-outline-success btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default addContact;
