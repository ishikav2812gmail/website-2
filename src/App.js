import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Titles/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="Container">
        <Title subTitle='OUR PROGRAM' title='What we Offer'/>
        <Program/>

          <About/>  
        
          <Title subTitle='Gallery' title='campus photos'/>
         <Campus/>

     <Title subTitle='Testimonials' title='What Student Say'/>
     <Testimonials/>
     <Title subTitle='Contact us' title='Get in touch'/>
     <Contact/>
     <Footer/>
     
      </div>

    
    
    
    </div>
  )
}

export default App
