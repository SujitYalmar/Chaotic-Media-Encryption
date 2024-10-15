import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Nihal Khan</h3>
                            <span>EncryptX, IN</span>
                        </div>
                    </div>
                    <p>"EncryptX made transferring my files so easy and secure! The encryption feature is a lifesaver, and the upload speed is impressive. Definitely my go-to for file transfers."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Adesh Bhumkar</h3>
                            <span>EncrytX, IN</span>
                        </div>
                    </div>
                    <p>"I love how simple EncryptX is to use. It took only a few minutes to transfer my media, and I felt confident knowing everything was encrypted. Great experience!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Om Pimple</h3>
                            <span>EncrytX, IN</span>
                        </div>
                    </div>
                    <p>"Fast, reliable, and secure! EncryptX is perfect for large file transfers. The interface is clean and easy to navigate, even for non-tech users."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Siddhesh Ghule</h3>
                            <span>EncrytX, IN</span>
                        </div>
                    </div>
                    <p>"EncryptX combines speed with top-notch security. The encryption process is seamless, and I had no issues with transferring large media files. Highly recommended!"</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
