import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
export const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container container-services">
      

      <article className="service">
        <div className="service-head">
          <h3>Web Development</h3>
        </div>
          <ul className="service-list">
          <li>
              <BiCheck className='icon' />
              <p>Build and maintain websites and web applications</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Write and test code, including HTML, CSS, JavaScript, and React</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Using React and CSS Framework eg. Tailwind and Material UI and Bootstrap</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Optimize websites for maximum speed and scalability</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Create and implement responsive design to make sure the website looks good on all devices.</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Understand and work with APIs and web services</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Stay up-to-date with the latest web technologies and industry trends</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Implement and maintain SEO best practices</p>
            </li>
          </ul>
      </article>

    </div>
    </section>
  )
}
