import React from 'react'
import back2 from "../assets/trek/back2.jpg" 
import Backscreen from '../components/background/Backscreen'
import Abouttrek from '../components/Abouttrek'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="about">
      <Backscreen img={back2} title="About" desc="Want to Know  why people trek for days, facing physical challenges, for a view ?"/>
      <Abouttrek/>
      <Footer/>
    </div>
  )
}

export default About
