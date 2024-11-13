import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Feature</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Feedback</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
                
                {isAuthenticated && (
                    <li className="user-profile">
                        <div onClick={toggleDropdown} className="profile-container">
                            <img src={user.picture} alt="Profile" className="profile-pic" />
                        </div>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <div className="profile-header">
                                    <img src={user.picture} alt={user.name} className="profile-large-pic" />
                                    <div className="profile-info">
                                        <h3>{user.name}</h3>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <button className='btn profile-btn' onClick={() => window.location.href = '/profile-settings'}>
                                    Profile Settings
                                </button>
                                <button
                                    className='btn profile-btn logout-btn'
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </li>
                )}
                {!isAuthenticated && (
                    <li>
                        <button className='btn' onClick={() => loginWithRedirect()}>Log In</button>
                    </li>
                )}
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
