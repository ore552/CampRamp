import React from 'react'

const Services = () => {
  return (
    <div className='services' id='services'>
        <h2>Our Services</h2>
        <p className='p'>Explore our wide range of camping gear services.</p>
        <ul className='cards'>
            <li className='card'>
                <img src="src/assets/tents.jpg" alt="img" />
                <h3>Tents</h3>
                <p>Experience comfort and protection with our high-quality camping tents.</p>
            </li>

            <li className='card'>
                <img src="src/assets/bags.jpg" alt="img" />
                <h3>Sleeping Bags</h3>
                <p>Stay cozy and warm during your camping trips with our premium sleeping bags.</p>
            </li>
            
            <li className='card'>
                <img src="src/assets/stoves.jpg" alt="img" />
                <h3>Camp Stoves</h3>
                <p>Cook delicious meals in the great outdoors with our reliable camp stoves.</p>
            </li>

            <li className='card'>
                <img src="src/assets/backpacks.jpg" alt="img" />
                <h3>Backpacks</h3>
                <p>Carrry your essentials comfortably with our durable and functional camping backpacks.</p>
            </li>

            <li className='card'>
                <img src="src/assets/chair.jpg" alt="img" />
                <h3>Camp Chairs</h3>
                <p>Relax and unwind in style with our comfortable and portable camping chairs.</p>
            </li>

            <li className='card'>
                <img src="src/assets/light.jpg" alt="img" />
                <h3>Camp Lights</h3>
                <p>Illuminate your campsite with our reliable and energy-efficient camping lights.</p>
                
            </li>
        </ul>
    </div>
  )
}

export default Services