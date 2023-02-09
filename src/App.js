import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Switch from 'react-switch'
import Layout from './components/layouts'
import Home from './components/Home/index'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <>
      {/* <Router> */}
        <Routes>
          {/* <Switch> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
            </Route>
          {/* </Switch> */}
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
