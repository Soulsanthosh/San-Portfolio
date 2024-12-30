import React from 'react'
import "./Navbar.scss"
import { Link} from 'react-scroll'

export default function Navbar() {
  return (
    <div>
        <nav className='nav'>
        <h1>PORTFOLIO</h1>
            <ul>
                <li><Link to="/Home"class='btn' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li><Link to="/Skills" class='btn' spy={true} smooth={true} offset={-40} duration={500}>Skills</Link></li>
                <li><Link to="/Projects" class='btn' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                <li><Link to="/About" class='btn' spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                <li><Link to="/Contact" class='btn' spy={true} smooth={true} offset={10} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
