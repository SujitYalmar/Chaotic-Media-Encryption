import React from 'react'
import './Hero.css'
import { ArrowRight, ShieldCheck, Unlock } from 'lucide-react'; // Visual icons
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      {/* Background Overlay for better text contrast */}
      <div className="hero-overlay"></div>
      
      <div className="hero-text">
        <div className="security-tag">Military Grade Encryption</div>
        <h1>Secure Media Transfer with <br/><span>Advanced Encryption</span></h1>
        <p>Our encryption services ensure that your media files are securely transferred and protected from unauthorized access. With cutting-edge technology, we provide peace of mind for all your media transfer needs.</p>
        
        <div className="hero-btns">
            {/* Keep your exact 'to' paths so redirection works */}
            <Link to="/encrypt" className="hero-action-btn encrypt">
                <ShieldCheck size={20} />
                <span>Encrypt</span>
            </Link>
            
            <Link to="/decrypt" className="hero-action-btn decrypt">
                <Unlock size={20} />
                <span>Decrypt</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero