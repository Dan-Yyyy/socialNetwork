import React from 'react';
import logo from './../../assets/images/snapsvg-seeklogo.com.svg';
import header from './Header.module.sass';

const Header = () => {
    return(
        <header className={header.header}>
            <img src={logo} alt="logo" />
        </header>
    )
}

export default Header;