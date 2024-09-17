import './App.css'
import { Element } from 'react-scroll'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
 
  return (
    <>
    <Navbar />
    <Element name="Hero">
      <Hero/>
    </Element>
    <Element name="Projects">
      <Projects/>
    </Element>
    <Element name="Contact">
      <Contact/>
    </Element>
    <Footer/>
    </>
  )
}

export default App
