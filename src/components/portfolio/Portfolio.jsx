import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Wooster.png'
import IMG2 from '../../assets/Task.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/Games.png'
import IMG6 from '../../assets/Education.png'
import IMG7 from '../../assets/Screenshot_1.png'
import IMG8 from '../../assets/Screenshot_2.png'
import IMG9 from '../../assets/Screenshot_3.png'
import IMG10 from '../../assets/Screenshot_4.png'
import IMG11 from '../../assets/Screenshot_5.png'
import IMG12 from '../../assets/Screenshot_6.png'
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wooster Template",
    github: 'https://github.com/AbdallahMooharam/wooster1',
    URL: 'https://abdallahmooharam.github.io/wooster1/',
    status: "Live"
  },
  {
    id: 2,
    image: IMG2,
    title: "Career counselling",
    github: 'https://github.com/AbdallahMooharam/task1',
    URL: 'https://abdallahmooharam.github.io/task1/',
    status: "Live Demo"

  },
  {
    id: 3,
    image: IMG3,
    title: "Kasper CSS and HTML Template",
    github: 'https://github.com/AbdallahMooharam/Kasber',
    URL: 'https://abdallahmooharam.github.io/Kasber/',
    status: "Live Demo"

  },
  {
    id: 4,
    image: IMG4,
    title: "Games Template",
    github: 'https://github.com/AbdallahMooharam/Games',
    URL: 'https://abdallahmooharam.github.io/Games/',
    status: "Live Demo"

  },
  {
    id: 5,
    image: IMG6,
    title: "Education Template",
    github: 'https://github.com/AbdallahMooharam/education-website',
    URL: 'https://abdallahmooharam.github.io/education-website/',
    status: "Live Demo"

  },
  {
    id: 6,
    image: IMG7,
    title: "restaurant",
    github: 'https://github.com/AbdallahMooharam/task2',
    URL: 'https://abdallahmooharam.github.io/task2/',
    status: "Live Demo"

  },
  {
    id: 7,
    image: IMG8,
    title: "Arsha",
    github: 'https://github.com/AbdallahMooharam/Arsha',
    URL: 'https://abdallahmooharam.github.io/Arsha/',
    status: "Live Demo"

  },

  {
    id: 8,
    image: IMG9,
    title: "App",
    github: 'https://github.com/AbdallahMooharam/WatsApp',
    URL: 'https://abdallahmooharam.github.io/WatsApp/',
    status: "Live Demo"

  },
  {
    id: 9,
    image: IMG10,
    title: "Moves App",
    github: 'https://github.com/AbdallahMooharam/moves-App',
    URL: 'https://abdallahmooharam.github.io/moves-App/',
    status: "Live Demo"

  },

  {
    id: 10,
    image: IMG11,
    title: "Find-an-account",
    github: 'https://github.com/AbdallahMooharam/Find-an-account',
    URL: 'https://abdallahmooharam.github.io/Find-an-account/',
    status: "Live Demo"

  },
  {
    id: 11,
    image: IMG12,
    title: "Feedback",
    github: 'https://github.com/AbdallahMooharam/Feedback',
    URL: 'https://abdallahmooharam.github.io/Feedback/',
    status: "Live Demo"

  }

]
export const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, URL, status }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="pcta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub</a>
                  <a href={URL} className='btn btn-primary' target="_blank" rel="noreferrer">{status}</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>

  )
}
