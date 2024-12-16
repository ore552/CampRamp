import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <div className='services' id='blog'>
            <h2>Blog and Testimonials</h2>
            <p>Read all of the people using our equipments thoughts and ideas about the equipment.</p>
            <ul className='cards'>
                <li className='card'>
                    <img src="src/assets/rv-campin.jpg" alt="img" />
                    <h4>RVs are so good!!!!!</h4>
                    <p><Link to={'/'}>Tom Rory</Link></p>
                    <p>I just bought an RV on CampRamp and it was such a good price, I got it for £40 for the whole journey! <br /> I could have used for years and still only had to pay 40*! <br /> My wife and child all had a great experince, and all the RVs and trailers are still the same price, no matter what condition(which is always pitch perfect) it's in. My one had a sofa bed which was soooo soft. Try it, you'll love it.</p>
                    <br />
                    <h6>*Last Week, they did change it to £10 each day though so that means £40 for every 4 days.</h6>
                    <img src="src/assets/rv-campin.jpg" alt="img" />
                </li>
                <li className='card'>
                    <img src="src/assets/desert-campin.jpg" alt="img" />
                    <h4>It's Evveerrryywwhheerree!!!</h4>
                    <p><Link to={'/'}>Sahnna Miako</Link></p>
                    <p>Going to Qatar is an experience, but with amazing camping gear, I didn't know that CampRamp was everywhere. Yep, it has been reported all around the world that CampRamp could import gear. <br /> In fact, there are shops around dotted around each country, and wow did it prevail! <br /> Now I could sun bathe in the sand and enjoy my honeymoon in Qatar!</p>
                    <img src="src/assets/desert-campin.jpg" alt="img" />
                </li>
                <li className='card'>
                    <img src="src/assets/forest-campin.jpg" alt="img" />
                    <h4>Loved my solo camping experience!</h4>
                    <p><Link to={'/'}>James 'The Daredevil' Adam</Link></p>
                    <p>I love being by myself. <br />I love camping. <br />I love making my own tools and food with my surroundings. <br />And I love the forest Dean. <br />So what happens when you mix all my loves together? You get my exploration in the forest Dean. Where I have rations of canned food and pots, and a small stove with built in with the bag of supplies in the solo survival kit. I didn't know how CampRamp could get freshly canned foods into the kit and it was only put in the kit a day before, they say that they turn all the foods in the cans that weren't used into compost, or food kits for the homeless. Awesome and renewable, nothing going to waste!</p>
                    <img src="src/assets/forest-campin.jpg" alt="img" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Blog