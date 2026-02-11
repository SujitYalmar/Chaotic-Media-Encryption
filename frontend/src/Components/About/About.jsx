import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about container'>
      <div className="about-left">
        <div className="img-frame">
          <img src={about_img} alt="Security Dashboard" className='about-img'/>
          <div className="play-overlay" onClick={() => setPlayState(true)}>
             <img src={play_icon} alt="Play" className='play-icon'/>
          </div>
        </div>
      </div>
      <div className="about-right">
        <h3 className="section-tag">ABOUT ENCRYPTX</h3>
        <h2 className="section-title">Fast, Secure, and Reliable File Sharing</h2>
        <div className="about-content">
          <p>Welcome to EncryptX, your reliable solution for fast and secure data transfers. We make moving your files between devices, platforms, and people easy and efficient.</p>
          <p>In today’s fast-paced digital world, transferring large files can be slow and cumbersome. EncryptX is designed to solve these problems, providing a seamless, safe, and user-friendly way to transfer data.</p>
          <p>Whether you’re a business professional or an everyday user, EncryptX is here to help you move your files with confidence using advanced chaotic mapping protocols.</p> 
        </div>
      </div>
    </div>
  )
}

export default About