import React, { Component } from 'react';

import logo from '../src/img/logo.svg'

import './Header.css';

export class Header extends Component {
    render() {
        return (
            <header className="Header">
                    <div className="WinkLogo"></div>
                    <img className="Logo" src={logo}/>
                <h1>/*Big Data Developer*/</h1>
            </header>
        )
    }
}

export default Header
