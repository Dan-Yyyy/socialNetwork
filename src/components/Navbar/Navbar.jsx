import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.sass';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquare } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

const Navbar = () => {
    return(
        <nav className={navbar.navigation}>
            <ul>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/profile/24015" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null } >
                        <AiOutlineUser size={ 16 } />
                        Profile
                    </NavLink>
                </li>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/dialogs" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null }>
                        <BiMessageSquare size={ 16 } />
                        Messages
                    </NavLink>
                </li>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/users" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null }>
                        <FiUsers size={ 16 } />
                        Find users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;