import React, { Component } from 'react'
import Contact from './Contact';


export class Contacts extends Component {

    state = {
        contacts: [
            { key: 1, name: 'John Doe', email: 'jdoe@example.com', phone: '1234567890'},
            { key: 2, name: 'John Cena', email: 'jcena@example.com', phone: '127823648'},
            { key: 3, name: 'Micheal Jackson', email: 'mjack@example.com', phone: '23749872389'}
        ]
    }
    render() {
        return (
            <div className="contacts">
                {this.state.contacts.map((contact) =>{
                    return (
                        <Contact key = {contact.key} name = {contact.name} phone = {contact.phone} email = {contact.email}/>
                    )
                })}
            </div>
        )
    }
}

export default Contacts
