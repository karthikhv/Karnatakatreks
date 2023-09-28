import React from 'react'
import Footer from '../components/Footer'
import Rotateimg from '../components/Rotate/Rotateimg'
import Myphotos from '../components/Myphotos'

const Blog = () => {
  return (
    <>
      <div className="Blog">
        <Rotateimg/>
        <Myphotos/>
        <Footer/>
      </div>
    </>
  )
}

export default Blog
