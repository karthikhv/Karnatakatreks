import React from 'react'
import Mymap from '../components/Mymap'
import Footer from '../components/Footer'
import Googlemap from '../components/Googlemap'

const Map = () => {
  return (
    <div className="map">
      <Googlemap/>
      <Mymap/>
      <Footer/>
    </div>
  )
}

export default Map
