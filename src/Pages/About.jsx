import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h2>About Us</h2>
      <p className='p'>Discover our story in providing camping services.</p>
      <div className='row company-info'>
        <h3>Our Story</h3>
        <p>Experience the excellence of our camping gear and services, where we have been offering high-quality camping essentials and gear for outdoor enthusiasts for over a decade. Our commitment to quality and customer satisfaction ensures that every adventurer can rely on us for their camping needs.</p>
      </div>  
      <div className='row mission-vision'>
        <h3>Our Mission</h3>
        <p>At Camping Gear Experts, our mission is to equip outdoor enthusiasts with top-notch camping gear and essentials that enhance their outdoor durable, and innovative products that contribute to memorable adventures and lasting memories.</p>

        <h3>Our Vision</h3>
        <p>Our vision is to become the go-to destination for camping enthusiasts, known for our extensive selection of premium camping gear and exceptional customer service. We aspire to inspire and enable people to embrace the beauty of nature and create unforgettable camping experiences.</p>
      </div>
      <div className='row team'>
        <h3>Our Team</h3>
        <ul>
            <li>John Doe - Founder and CEO</li>
            <li>Jane Smith - Gear Specialist</li>
            <li>Mard Johnson - Customer Representative</li>
            <li>Sarah Brown - Operations Manager</li>
        </ul>
      </div>
    </div>
  )
}

export default About
