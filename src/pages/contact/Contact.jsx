import React from 'react'
import "./Contact.css"
import {BackgroundStrip, ContactCard, Link} from "../../components"
import FacebookIcon from "../../assets/facebook.png"
import InstaIcon from "../../assets/insta.png"
import TwitterIcon from "../../assets/twitter.png"
const Contact = () => {
  return (
    <div className='contact-page'>
      <ContactCard />
      <div className="social-share">
        <h4>Stay in touch</h4>
        <div className="links">
          <Link to=''><img src={TwitterIcon} alt="twitter" /></Link>
          <Link to=''><img src={InstaIcon} alt="instagram" /></Link>
          <Link to=''><img src={FacebookIcon} alt="facebook" /></Link>
        </div>
      </div>
      <BackgroundStrip />
    </div>
  )
}

export { Contact }