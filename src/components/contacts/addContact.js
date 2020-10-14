import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'react-uuid';


class addContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {this.setState({[e.target.name]: e.target.value})};

    onHandleSubmit = (dispatch,e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        let newContact = {
            id: uuid(),
            name, email, phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact});
    }


    render(){

        const {name, email, phone} = this.state;

        return (
            <Consumer>
                {value => {

                    const {dispatch} = value;
                    return(
                        <div className = "card mb-3">
                            <div className="card-header">
                                <h4 className = "text-center">Add Contact</h4>
                            </div>

                            <div className="card-body">
                                <form onSubmit={this.onHandleSubmit.bind(this, dispatch)}>
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
                }}
            </Consumer>
        )
    }
}

export default addContact;
