import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/arghya.png'
import './home.scss'
import dn from '../../assets/images/Arghya Pal Resume.pdf'
import log from '../../assets/images/IMG_20210627_103809@.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ 'r', 'g', 'h', 'y', 'a']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  const fetchData =  async() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="hi container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>,</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Student / Engineer / Full Stack Developer</h2>
          <div className="btn">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <a href={dn} download="Arghya_Pal_CV" className="flat-button">
              DOWNLOAD CV
            </a>
          </div>
        </div>
        {/* <div className="imgaee">
          <img src={log} alt="logo" />
        </div> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
