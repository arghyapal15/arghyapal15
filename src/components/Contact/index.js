import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const fetchData = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };


  //firebase setting
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = userData;
    if (name && email && subject && message) {
      const res = await fetch(
        "https://arghyapal-ab-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application.json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      )
      if (res) {
        alert('Thanks for your message, will contact you soon')
        window.location.reload(false)
      }
      else {
        alert("Something going wrong!!");
      }
    }
    else {
      alert('Please fill the data!!')
    }

  };

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
  //     .then(
  //       () => {
  //         alert('Message successfully sent!')
  //         window.location.reload(false)
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again')
  //       }
  //     )
  // }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in new projects - especially on ambitious or large
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form  method="POST">
              <ul>
                <div className="ar">
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      value={userData.name}
                      onChange={postUserData}
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      value={userData.email}
                      onChange={postUserData}
                      name="email"
                      required
                    />
                  </li>
                </div>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    value={userData.subject}
                    onChange={postUserData}
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    value={userData.message}
                    onChange={postUserData}
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    onClick={submitData}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Arghya Pal,
          <br />
          Arambagh,
          <br />
          Hooghly, Kolkata, India <br />
          712412
          <br />
          <br />
          <span>arghya.1530@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.872749, 87.791092]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.872749, 87.791092]}>
              <Popup>Arghya lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;
