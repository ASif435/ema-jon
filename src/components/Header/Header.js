import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
       <div className="container">
            <div className="header">
            <img src={logo} alt=""/>
        </div>
        <div className="menu-item">
            <nav>
                <a href="/shop">Shoap </a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage eventory here</a>
            </nav>
        </div>
       </div>
    );
};

export default Header;