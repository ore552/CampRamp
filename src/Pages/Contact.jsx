import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h2>Contact Us</h2>
        <p className='p'>Reach out to us for any inquiries or feedback.</p>
        <div className='row'>
            <div className='col information'>
                <div className='contact-details'>
                    <p><i className='fas fa-map-marker-alt'></i>123 Campsite Avenue, Wilderness, CA 98765</p>
                    <p><i className='fas fa-envelop'></i>info@campinggearexperts.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact