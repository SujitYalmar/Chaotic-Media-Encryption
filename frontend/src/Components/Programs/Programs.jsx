import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs-section'>
      <div className="programs-container">
        {/* Card 1 */}
        <div className="program-card">
          <div className="image-wrapper">
            <img src={program_1} alt="Secure Transfers" className="main-img" />
            <div className="caption-overlay">
                <div className="icon-box">
                    <img src={program_icon_1} alt="Icon" />
                </div>
                <p>Secure File Transfers</p>
                <small>End-to-end chaotic mapping protection.</small>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="program-card">
          <div className="image-wrapper">
            <img src={program_2} alt="Fast Reliable" className="main-img" />
            <div className="caption-overlay">
                <div className="icon-box">
                    <img src={program_icon_2} alt="Icon" />
                </div>
                <p>Fast and Reliable</p>
                <small>High-speed encryption for large media.</small>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="program-card">
          <div className="image-wrapper">
            <img src={program_3} alt="User Friendly" className="main-img" />
            <div className="caption-overlay">
                <div className="icon-box">
                    <img src={program_icon_3} alt="Icon" />
                </div>
                <p>User-Friendly Interface</p>
                <small>Intuitive security for everyone.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Programs