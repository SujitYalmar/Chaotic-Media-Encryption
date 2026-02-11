import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // Add your Web3Forms access key here
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult(res.message);
      }
    };

  return (
    <div className='contact container'>
      <div className="contact-col">
        <h3 className="contact-title">
            Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p className="contact-desc">
            Feel free to reach out through the contact form or find our contact 
            information below. Your feedback and questions are vital to the 
            EncryptX community.
        </p>
        <ul className="contact-info-list">
            <li><img src={mail_icon} alt="Email" /> Contact@encryptx.gmail.com</li>
            <li><img src={phone_icon} alt="Phone" /> +91-9022457865</li>
            <li><img src={location_icon} alt="Location" /> Maharashtra, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            </div>
            <div className="form-group">
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            </div>
            <button type='submit' className='btn submit-btn'>
                Submit now <img src={white_arrow} alt="arrow" />
            </button>
        </form>
        <span className={`form-status ${result ? 'active' : ''}`}>{result}</span>
      </div>
    </div>
  )
}

export default Contact