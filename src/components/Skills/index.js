import React from 'react'
import "./index.scss"
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Tagcloud from './TagCloud/index'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'



const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const fetchData = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills & Experience'.split('')}
              idx={15}
            />
          </h1>

          <p>
            Expert in front-end development including technologies like
            <span class="tech-tag"> C++</span>,
            <span class="tech-tag"> Python</span>,
            <span class="tech-tag"> C</span>,
            <span class="tech-tag"> Html5</span>,
            <span class="tech-tag"> CSS</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> ReactJS</span>,
            <span class="tech-tag"> TypeScript</span>,
            <span class="tech-tag"> Bootstrap</span>,
            <span class="tech-tag"> Git</span>, etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            Visit my{' '}
            <a
              onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });"
              target="_blank"
              href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            >
              LinkedIn
            </a>{' '}
            profile for more details. Also you can checkout my cv on this{' '}
            <a
              target="_blank"
              href="https://bobangajicsm.github.io/portfolio/assets/slobodan-gajic-cv.pdf"
            >
              link
            </a>
            , or feel free to give a peek on some of my blog{' '}
            <a
              target="_blank"
              href="https://www.toptal.com/css/smacss-scalable-modular-architecture-css"
            >
              posts
            </a>{' '}
            .
          </p>
        </div>
        <div className="a">
          <Tagcloud />
        </div>
        <div id="cube" className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
