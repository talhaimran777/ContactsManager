import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-md navbar-dark bg-danger py-0 mb-3">
                <div className="container">
                    <a href="/" className = "navbar-brand"> <h2>Contact Manager</h2> </a>
                </div>
            </nav>
        )
    }
}

export default Header;
