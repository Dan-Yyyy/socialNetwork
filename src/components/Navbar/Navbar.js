import { NavLink } from 'react-router-dom';
import navbar from './Navbar.module.sass';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquare, BiNews } from 'react-icons/bi';
import { BsHeadphones } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => {
    return(
        <nav className={navbar.navigation}>
            <ul>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/profile" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null } >
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
                    <NavLink to="/news" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null }>
                        <BiNews size={ 16 } />
                        News
                    </NavLink>
                </li>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/music" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null }>
                        <BsHeadphones size={ 16 } />
                        Music
                    </NavLink>
                </li>
                <li className={ navbar.navigation__item }>
                    <NavLink to="/settings" className={({isActive}) => isActive ? navbar["navigation__link--active"] : null }>
                        <FiSettings size={ 16 } />
                        Settings
                    </NavLink> 
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;