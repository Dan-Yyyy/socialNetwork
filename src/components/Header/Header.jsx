import React from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { login } from '../../redux/authReduser';
import logo from './../../assets/images/snapsvg-seeklogo.com.svg';
import userSmollPhoto from './../../assets/images/user.png';
import header from './Header.module.sass';

const Header = (props) => {  
    const userImage = props?.smollPhoto || userSmollPhoto; 
     return(
        <header className={header.header}>
            <div className={ header.logo }>
                <img src={logo} alt="logo" />
            </div>
            {props.login 
                ?   <div className={ header.container }>
                        <div className={ header.loginImage }> 
                            <img src={ userImage } alt="" />
                        </div>
                        <div className={ header.loginData }>
                            <span>{ props.login } </span> 
                            <span onClick={ props.logout } className={header.logout}>Log Out</span>
                        </div>
                    </div>
                : <div className="">
                    <NavLink to='/login'>Login</NavLink>
                </div>
            }
        </header>
    )
}

export default Header;