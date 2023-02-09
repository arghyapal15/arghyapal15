import "./index.scss"
import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/arghya6.png'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
  faClose,
  faGear,
  faTextWidth,
  faHeadSideCoughSlash,
  faUserGraduate,
  faDiagramProject,
  faComment,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  // const [showNav, setShowNav] = useState(false);
  const [click, setClick] = React.useState(false)

  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={handleClick}>
        <img src={LogoA} alt="logo" />
        {/* <img className="sub-logo" src={LogoA} alt="logo"/> */}
      </Link>
      <nav className={click ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          aria-activedescendant="active"
          to="/"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          aria-activedescendant="active"
          className="about-link"
          to="/about"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="education-link"
          to="/education"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUserGraduate} color="#fff" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#fff" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGear} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          aria-activedescendant="active"
          className="contact-link"
          to="/contact"
          onClick={handleClick}
          // onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faMessage} color="#fff" />
        </NavLink>

        {/* <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink> */}
        {/* <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#fff"
          size="3x"
          className="close-icon"
        /> */}
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/arghyapal15"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/arghya-pal-435696212"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/its_arghya"
          >
            <FontAwesomeIcon icon={faInstagram} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/arghya.pal.710"
          >
            <FontAwesomeIcon icon={faFacebook} color="#fff" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        // onClick={() => setShowNav(true)}
        onClick={handleClick}
        icon={faBars}
        color="#fff"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}


export default Sidebar