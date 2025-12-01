import Footer from './Footers/Footer.jsx'
import Navbar from './Headers/Navbar.jsx'
import './index.css'
import AboutUs from './Sections/AboutUs.jsx'
import Hero from './Sections/Hero.jsx'
import Services from './Sections/Services.jsx'
import Subscription from './Sections/Subscription.jsx'
import Testimonial from './Sections/Testimonial.jsx'

function App() {
 

  return (
    <>
    
     <Navbar />
     <Hero />
     <AboutUs />
     <Services />
     <Testimonial/>
     <Subscription />
     <Footer />
    </>
  )
}

export default App
