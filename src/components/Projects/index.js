import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import "./index.scss"
import { FaPlay, FaCode } from 'react-icons/fa'
import img from '../../assets/images/lithium.png'
import bbswo from '../../assets/images/bbswo.png'
import portfolio from '../../assets/images/portfolio.png'



const Portfolio = () => {
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
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'My Projects'.split('')}
              idx={15}
            />
          </h1>
          <div className="projects">
            <div className="cards">
              <div className="headi">
                <h3>LITHIUM 2K22</h3>
                <div className="in-img">
                  <img src={img} />
                </div>
                <div className="project--showcaseBtn">
                  <a
                    href="https://lithium2k22.ml/"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaPlay id="argh" className="icon" aria-label="Demo" />
                  </a>
                  <a
                    href="https://github.com/arghyapal15/Lithium-2k22"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaCode id="code" className="icon" aria-label="Code" />
                  </a>
                  <p id="c" className="project--desc">
                    Bengal Institute of Technology presents LITHIUM'22 The
                    official freshers welcome of BIT Save the Date !
                    5th July,2022
                  </p>
                  <p className="project--lang">
                    Html
                    <br />
                    CSS <br /> JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="headi">
                <h3>BBSWO</h3>
                <div className="in-img">
                  <img src={bbswo} />
                </div>
                <div className="project--showcaseBtn">
                  <a
                    href="https://bbswo.org.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaPlay id="argh" className="icon" aria-label="Demo" />
                  </a>
                  <a
                    href="https://github.com/Sahil-Ahmed19/Baranagar-Baghajatin-Social-Welfare-Organisation"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaCode id="code" className="icon" aria-label="Code" />
                  </a>
                  <p id="b" className="project--desc">
                    Baranagar Baghajatin Social Welfare Organisation was founded
                    by some educated and dedicated youth and social workers with
                    a view to develop the socio economic status of the poor and
                    downtrodden people emphasising on distressed women and
                    children.
                  </p>
                  <p id="c1" className="project--lang">
                    PHP
                    <br />
                    CSS <br /> JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="headi">
                <h3>PORTFOLIO</h3>
                <div className="in-img">
                  <img src={portfolio} />
                </div>
                <div className="project--showcaseBtn">
                  <a
                    href="https://arghyapal-ab.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaPlay id="argh" className="icon" aria-label="Demo" />
                  </a>
                  <a
                    href="https://github.com/arghyapal15/arghyapal15"
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                  >
                    <FaCode id="code" className="icon" aria-label="Code" />
                  </a>
                  <p id="a" className="project--desc">
                    My personal portfolio, which is made of ReactJS and CSS.
                  </p>
                  <p className="project--lang">
                    ReactJS
                    <br />
                    CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="project-dec"></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio