import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/snapsvg-seeklogo.com.svg';
import header from './Header.module.sass';

const Header = (props) => {
    // debugger
    return(
        <header className={header.header}>
            <div className={ header.logo }>
                <img src={logo} alt="logo" />
            </div>
            {props.login 
                ? <div className={ header.login_user }> { props.login } </div>
                : <div className={ header.login }>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            }
        </header>
    )
}

export default Header;