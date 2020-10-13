import React, { Component } from 'react'
import Contact from './Contact';


export class Contacts extends Component {

    state = {
        contacts: [
            {name: 'John Doe', email: 'jdoe@example.com', phone: '1234567890'},
            {name: 'John Cena', email: 'jcena@example.com', phone: '127823648'},
            {name: 'Micheal Jackson', email: 'mjack@example.com', phone: '23749872389'}
        ]
    }
    render() {
        return (
            <div className="contacts">
                  <Contact name = {this.state.contacts[0].name} email = {this.state.contacts[0].email} phone = {this.state.contacts[0].phone}/>

                  <Contact name = {this.state.contacts[1].name} email = {this.state.contacts[1].email} phone = {this.state.contacts[1].phone}/>

                  <Contact name = {this.state.contacts[2].name} email = {this.state.contacts[2].email} phone = {this.state.contacts[2].phone}/>
            </div>
        )
    }
}

export default Contacts
