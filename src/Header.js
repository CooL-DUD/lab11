import './Header.css'
import Nav from './Nav.js';
import React from 'react';
import Logo from './json/logo.json';

function Header() {
    return (
        <header className="Header">
            {Logo.map((detail, index) => {
                return(
                    <img className="logo" alt="logo" src={detail.logo}></img>
                )
            })}
            <Nav />
        </header>
    );
}
export default Header;