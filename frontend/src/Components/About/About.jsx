import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT EncrytptX</h3>
        <h2>Fast, Secure, and Reliable File Sharing</h2>
        <p>Welcome to EncryptX, your reliable solution for fast and secure data transfers. We make moving your files between devices, platforms, and people easy and efficient.</p>
        <p>In today’s fast-paced digital world, transferring large files can be slow and cumbersome, often involving complex tools or risking data breaches. EncryptX is designed to solve these problems, providing a seamless, safe, and user-friendly way to transfer data.</p>
        <p>Whether you’re a business professional or an everyday user, EncryptX is here to help you move your files with confidence. Ready to simplify your file transfers? Start sharing with EncryptX today and experience the difference.</p> 
      </div>
    </div>
  )
}

export default About
