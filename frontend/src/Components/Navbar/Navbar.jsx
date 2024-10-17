import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const { loginWithRedirect,  isAuthenticated, logout, user } = useAuth0();
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
          </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
          </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link>
          </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>Feedback</Link>
          </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link>
          </li>
        {/* <li><Link to='' smooth={true} offset={-260} duration={500} className='btn'>Login</Link></li> */}
        <li>{isAuthenticated && <p>{user.name} </p>}</li>
        {isAuthenticated ?(
          <li>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </li>
        ):(
          <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
        
          
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
