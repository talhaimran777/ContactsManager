import React, { Component } from 'react'
import Contact from './Contact';

import {Consumer} from '../Context';

export class Contacts extends Component {
    
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
                                    <Contact key = {contact.key} name = {contact.name} phone = {contact.phone} email = {contact.email}/>
                                )
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts
