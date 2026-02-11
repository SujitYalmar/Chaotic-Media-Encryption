import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { useAuth0 } from "@auth0/auth0-react";
import { ChevronDown, LogOut, Settings } from 'lucide-react';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenu(!mobileMenu);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <nav className={`nav-wrapper ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="EncryptX Logo" className='logo' />
            
            <ul className={`nav-links ${mobileMenu ? 'show-mobile' : ''}`}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Features</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Feedback</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
                
                {isAuthenticated ? (
                    <li className="profile-item">
                        <div onClick={toggleDropdown} className="profile-trigger">
                            <img src={user.picture} alt="User" className="nav-profile-img" />
                            <span className="user-firstname">{user.name.split(' ')[0]}</span>
                            <ChevronDown size={14} className={showDropdown ? 'rotate' : ''} />
                        </div>
                        
                        {showDropdown && (
                            <div className="nav-dropdown">
                                <div className="dropdown-user-card">
                                    <img src={user.picture} alt={user.name} />
                                    <div>
                                        <h4>{user.name}</h4>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <button onClick={() => window.location.href = '/profile-settings'}>
                                    <Settings size={16} /> Settings
                                </button>
                                <button className="logout-action" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    <LogOut size={16} /> Log Out
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    <li className="nav-auth">
                        <button className='btn-login' onClick={() => loginWithRedirect()}>Log In</button>
                        <button className='btn-signup' onClick={() => loginWithRedirect({ screen_hint: "signup" })}>Sign Up</button>
                    </li>
                )}
            </ul>
            
            <img src={menu_icon} alt="Menu" className='menu-toggle-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;