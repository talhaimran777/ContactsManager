import React, { Component } from 'react'
import Contact from './Contact';

import {Consumer} from '../Context';

export class Contacts extends Component {

    // state = {
    //     contacts: [
    //         { key: 1, name: 'John Doe', email: 'jdoe@example.com', phone: '1234567890'},
    //         { key: 2, name: 'John Cena', email: 'jcena@example.com', phone: '127823648'},
    //         { key: 3, name: 'Micheal Jackson', email: 'mjack@example.com', phone: '23749872389'}
    //     ]
    // }

    deleteContact = (id) => {
        let newContacts = this.state.contacts.filter((contact) =>{
            return (contact.key !== id)
        });

        this.setState({
            contacts: newContacts
        });
    }

    render(){
        return(
            <Consumer>
                {/* Here value is a state object global */}
                {value =>{
                    const contacts = value.contacts;

                    return (
                        <div className="contacts">
                            {contacts.map((contact) =>{
                                return (
                                    <Contact key = {contact.key} name = {contact.name} phone = {contact.phone} email = {contact.email} deleteContact = {this.deleteContact.bind(this , contact.key)} />
                                )
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
    // render() {
    //     return (
    //         <div className="contacts">
    //             {this.state.contacts.map((contact) =>{
    //                 return (
    //                     <Contact key = {contact.key} name = {contact.name} phone = {contact.phone} email = {contact.email} deleteContact = {this.deleteContact.bind(this , contact.key)} />
    //                 )
    //             })}
    //         </div>
    //     )
    // }
}

export default Contacts
