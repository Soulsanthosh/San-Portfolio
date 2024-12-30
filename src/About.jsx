import React from 'react'
import './About.scss'

export default function About() {
  return (
    <body className='full' id='/About'>
        <div  className='about-me'>
          <div><h1>About Me</h1><span className='handshake-upanddown'>&#128071;</span></div>
          <p>Hello! I'm <b>SANTHOSHKUMAR&#128526;</b>, a passionate Python Full-Stack Developer with a deep love for building robust, scalable, and efficient web applications. With a strong foundation in both back-end and front-end technologies, I enjoy bringing ideas to life and delivering seamless user experiences.</p>
        </div>
        <div className='resume'>
            <a href="https://drive.google.com/file/d/1LlbZ6pywDCUzCz3K4sfvRLzTiI9GR3Z0/view?usp=drive_link" target='_blank' rel="noreferrer"><button>View Resume &gt;</button></a>
        </div>
        <div className='my-journey'>
            <h2>My Journey</h2>
            <p>I began my programming <b>journey with Python</b> because of its <b>simplicity and power</b>, quickly
            diving into the <b>world of full-stack development</b>.</p>
        </div>
        <div className='why-fsd'>
          <h2>Why Full-Stack Development?</h2>
          <p>As a full-stack developer, I love the challenge of understanding both the front and back ends of an application. 
            It's incredibly rewarding to work on a project from start to finish,from designing databases and creating server-side logic to implementing beautiful, interactive user interfaces. 
            I’m always eager to learn new tools and frameworks to stay ahead of the curve and ensure my projects are both high-performing and maintainable.</p>
        </div>
        <div className='last-img'>
          <img src="Images/1731960570824.jpg" alt="" />
        </div>     
    </body>
  )
}
