import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        contacts: [
            { key: 1, name: 'John Doe', email: 'jdoe@example.com', phone: '1234567890'},
            { key: 2, name: 'John Cena', email: 'jcena@example.com', phone: '127823648'},
            { key: 3, name: 'Micheal Jackson', email: 'mjack@example.com', phone: '23749872389'}
        ]
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer =  Context.Consumer;
