import React from 'react'
import './about.css'
import { BsAward } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'



export const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About me</h2>
    <div className="container about-container">
     
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
          <BsAward className='about-icon' />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
         
          <article className='about-card'>
          <VscFolderLibrary className='about-icon' />
            <h5>Projects</h5>
            <small>11+ completed</small>
          </article>
        </div>
        <p>
        Hi there<span role="img" aria-label="sheep">👋,</span> <br></br>
        My name is Abdallah , I was born in Cairo 
      <br></br>  I am a graduate of the Faculty of Commerce, Al-Azhar University, Department of Business Administration And I studied  front  end of a website      .
        I work on the front  end of a website or application. I can manage projects such as databases, APIs, and user-facing websites, as well as interact with clients throughout the development process.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}
