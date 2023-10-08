import React from 'react'
import "./ContactCard.css"

const ContactCard = () => {
  return (
    <div className='contact-card'>
      <div className="header">
        <h2>REACH US AT</h2>
      </div>
      <div className="mail-info">
        <h3>support@kicksup.com</h3>
        <h5>for any technical support</h5>
      </div>
      <div className="mail-info">
        <h3>info@kicksup.com</h3>
        <h5>for more information</h5>
      </div>
      <div className="mail-info">
        <h3>feedback@kicksup.com</h3>
        <h5>to send your feedback</h5>
      </div>
      <div className="mail-info">
        <h3>jobs@kicksup.com</h3>
        <h5>to work with us</h5>
      </div>
    </div>
  )
}

export { ContactCard }