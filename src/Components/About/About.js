import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
         <img  className="about-img"src={about_img}/>
         <img className="play-icon"src={play_icon}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2> Nurturing Tomorrow's Leaders Today</h2>
        <p>
            Embark on a transformative educational journey with our university's comprehensive educaational programs.Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences neede to excel in the dynamic field of education.
        </p>
        <p> With the focus on invoation ,hands -on learning and personalized mentorship ,our program prepare aspiring educators to make a meaningful impavt in classrooms ,schools, and communities.</p>
     <p> Whether you aspire to become a teacher,administrator ,counselor,or educational; leader, our diverse range of programs offers the perfect patheay to achieve your goals andw unl;ock your full potential in shaping the future of education.</p>
     
      </div>
    </div>
  )
}

export default About
