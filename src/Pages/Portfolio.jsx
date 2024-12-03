import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <h2>Our Portfolio</h2>
        <p>Take a look at some of our memorable camping adventures.</p>
        <ul className='cards'>
            <li className='card'>
                <img src="src/assets/camping-1.jpg" alt="img" />
                <h3>Mountain Hiking</h3>
                <p>Embark on an exhilarating hiking adventure in the breathtaking mountain ranges.</p>
            </li>

            <li className='card'>
                <img src="src/assets/camping-2.jpg" alt="img" />
                <h3>Lakeside Camping</h3>
                <p>Enjoy a tranquil camping experience by the serene shores of picturesque lakes.</p>
            </li>

            <li className='card'>
                <img src="src/assets/camping-3.jpg" alt="img" />
                <h3>Beach Camping</h3>
                <p>Escape to sandy beaches and camp under the starry sky by the crashing waves.</p>
            </li>
            
            <li className='card'>
                <img src="src/assets/camping-4.jpg" alt="img" />
                <h3>Forest Exploration</h3>
                <p>Discover the wonders of lush forests and immerse yourself in nature's beauty.</p>
            </li>
            
            <li className='card'>
                <img src="src/assets/camping-5.jpg" alt="img" />
                <h3>RV Camping</h3>
                <p>Experience the freedom of road trips and camping adventures with our RV rentals.</p>
            </li>
        </ul>
    </div>
  )
}

export default Portfolio