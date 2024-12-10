import React from 'react'


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"></link> */}
        <h2>Contact Us</h2>
        <p className='p'>Reach out to us for any inquiries or feedback.</p>
        <div className='row'>
            <div className='col information'>
                <div className='contact-details'>
                    <p>123 Campsite Avenue, Wilderness, CA 98765</p>
                    <p>info@campinggearexperts.com</p>
                    <p>(123) 456-7890</p>
                    <p>Monday - Friday: 9:00 - 5:00</p>
                    <p>Saturday: 10:00</p>
                    <p>Sunday: Closed</p>
                    <p>ww.codingnepalweb.com</p>
                </div>
            </div>
            <div className='col form'>
              <form>
                <input type="text" placeholder='Name*' required/>
                <input type="email" placeholder='Email*' required/>
                <textarea placeholder='Message' required></textarea>
                <button id='submit' type='submit'>Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact