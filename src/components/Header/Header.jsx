import React from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { login } from '../../redux/authReduser';
import logo from './../../assets/images/snapsvg-seeklogo.com.svg';
import userSmollPhoto from './../../assets/images/user.png';
import header from './Header.module.sass';

const Header = (props) => {

    const userImage = (props?.smollPhoto &&  userSmollPhoto) || "";
    // const dispatch = useDispatch()
    return(
        <header className={header.header}>
            <div className={ header.logo }>
                <img src={logo} alt="logo" />
            </div>
            {props.login 
                ? <div>
                    <div className={ header.login_user }> 
                        <span>{ props.login } </span> 
                        <img src={ userImage } alt="" />
                    </div>
                    <button onClick={ props.logout }>Log Out</button>
                </div>
                : <div className="">
                    <NavLink to='/login'>Login</NavLink>
                </div>
            }
        </header>
    )
}

export default Header;