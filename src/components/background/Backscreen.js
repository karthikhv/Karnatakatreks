import React from 'react'
import "./Backscreen.css"

const Backscreen = ({ img, title, desc }) => {
  return (
    <div className="back">
      <div className="pictureback" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <div className="wallcontainer">
          <h1 className='headinfg'>{title}</h1>
          <h4 className='desc'>{desc}</h4>
      </div>
    </div>
  )
}

export default Backscreen
