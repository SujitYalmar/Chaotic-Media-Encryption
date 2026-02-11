import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0); // Use state so it persists during renders

    const slideForward = () => {
        if (tx > -75) { // Adjusted for 4 slides (0, -25, -50, -75)
            const newTx = tx - 25;
            setTx(newTx);
            slider.current.style.transform = `translateX(${newTx}%)`;
        }
    }

    const slideBackward = () => {
        if (tx < 0) {
            const newTx = tx + 25;
            setTx(newTx);
            slider.current.style.transform = `translateX(${newTx}%)`;
        }
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Nihal" />
                                <div>
                                    <h3>Nihal Khan</h3>
                                    <span>EncryptX, IN</span>
                                </div>
                            </div>
                            <p>"EncryptX made transferring my files so easy and secure! The encryption feature is a lifesaver, and the upload speed is impressive."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Adesh" />
                                <div>
                                    <h3>Adesh Bhumkar</h3>
                                    <span>EncryptX, IN</span>
                                </div>
                            </div>
                            <p>"I love how simple EncryptX is to use. It took only a few minutes to transfer my media, and I felt confident knowing everything was encrypted."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Om" />
                                <div>
                                    <h3>Om Pimple</h3>
                                    <span>EncryptX, IN</span>
                                </div>
                            </div>
                            <p>"Fast, reliable, and secure! EncryptX is perfect for large file transfers. The interface is clean and easy to navigate."</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Siddhesh" />
                                <div>
                                    <h3>Siddhesh Ghule</h3>
                                    <span>EncryptX, IN</span>
                                </div>
                            </div>
                            <p>"EncryptX combines speed with top-notch security. The encryption process is seamless. Highly recommended!"</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials