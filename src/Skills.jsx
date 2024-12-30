import React from 'react'
import './Skills.scss'

export default function Skills() {
  return (
    <body className='skills-body' id='/Skills'>
        <div className='total-content'>
            <div className='right-content'>
                <div className='front-end-deatils'>
                    <h1>Front-End</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BOOTSTRAP</li>
                        <li>JAVASCRIPT</li>
                        <li>JQUERY</li>
                        <li>REACT JS</li>
                    </ul>
                </div>
            </div>
            <div className="rotate-div">
                <img className="img-1" src="./Images/HTML Logo.png" alt=""/>
                <img className="img-2" src="./Images/CSS Logo.png" alt=""/>
                <img className="img-3" src="./Images/Bootstrap Logo.png" alt=""/>
                <img className="img-4" src="./Images/JavaScript Logo.png" alt=""/>
                <img className="img-5" src="./Images/jQuery Logo.png" alt=""/>
                <img className="img-6" src="./Images/React Logo.png" alt=""/>
                <img className="img-7" src="./Images/My SQL Logo.png" alt=""/>
                <img className="img-8" src="./Images/Python Logo.png" alt=""/>
                <img className="img-9" src="./Images/Django Logo.png" alt=""/>
                <img className="img-10" src="./Images/Github Logo.png" alt=""/>
            </div>
            <div className='left-content'>
                <div className='back-end-details'>
                    <h1>Back-End</h1>
                    <ul>
                        <li>PYTHON</li>
                        <li>MY SQL</li>
                        <li>DJANGO</li>
                    </ul>
                </div>
                <div className='version-control-details'>
                    <h1>Version Control</h1>
                    <ul>
                        <li>GIT</li>
                        <li>GITHUB</li>
                        <li>GITLAB</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
  )
}
