import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent '>
      <div className='topContent_container'>
        <h1>
          <p>Barathkumar R</p>
        </h1>
 
        <p>Backend Developer</p>
        <a href='www.google.com'>
          <button className='topContent_download'>Download cv</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className='topContent_work'>My Works</button>
        </Link>
      </div>
      <div className='topContent_container_about'>
        <p>I am a passionate backend developer with two years of hands-on experience in crafting robust and scalable solutions. My journey into the world of programming began with a fascination for building systems that seamlessly integrate and operate behind the scenes, powering applications with efficiency and reliability</p>
      </div>

    </div>
  )
}

export default TopContent