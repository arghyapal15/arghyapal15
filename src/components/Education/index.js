import React from 'react'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import img from '../../assets/images/eduImgBlack.b19a68ba.svg'
import intro from '../../assets/images/eduRed.55e01742.svg'
import './index.scss'

const Education = () => {
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
      <div className="container education-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Education'.split('')}
              idx={15}
            />
          </h1>
          <div className="card">
            <div className="card-item">
              <img src={img} className="educard-img" />
              <div className="education-details">
                <h6>Oct 2020-Present</h6>
                <h4>Electronics And Communication Engineering</h4>
                <h5>Bengal Institute of Technology</h5>
              </div>
            </div>
            <div className="card-item">
              <img src={img} className="educard-img" />
              <div className="education-details">
                <h6>2018 - 2020</h6>
                <h4>Higher Secondary</h4>
                <h5>Sekendarpur Rai K.P.Pal Bahadur High School</h5>
                <h5>Persentage: 88%</h5>
              </div>
            </div>
            <div className="card-item">
              <img src={img} className="educard-img" />
              <div className="education-details">
                <h6>2012 - 2018</h6>
                <h4>Secondary</h4>
                <h5>Purah High School</h5>
                <h5>Persentage: 79.14%</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="education-image">
          <img src={intro} alt="image" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Education
