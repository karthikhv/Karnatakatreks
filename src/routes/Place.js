import React from 'react'
import Displayplaces from '../components/Places/Displayplaces'
import "../components/Places/Place.css"
import Footer from '../components/Footer'

function Place() {
  return (
    <div className="placetop">
      <Displayplaces/>
      
      <Footer/>
    </div>
  )
}

export default Place
