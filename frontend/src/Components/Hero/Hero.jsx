import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Secure Media Transfer with Advanced Encryption</h1>
        <p>Our encryption services ensure that your media files are securely transferred and protected from unauthorized access. With cutting-edge technology, we provide peace of mind for all your media transfer needs.</p>
        <Link to="/encrypt" className="hero-action-btn encrypt">Encrypt</Link>
        <Link to="/decrypt" className="hero-action-btn decrypt">Decrypt</Link>
        {/* <footer className="button">
          <button className="button">Send</button>
          <button className="button">Receive</button>
        </footer> */}
      </div>
    </div>
  )
}

export default Hero
