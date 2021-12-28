import React from 'react'
import '../assets/css/Nav.css'
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import instagram  from "../assets/img/instagram.png";
import darkmode from "../assets/img/darkmode.png";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/Logo.png'
import '../assets/css/Systemresponsive.css'


export const Nav = (props) => {

    return (
        <>

        <div className="NavDiv" >
          <nav className="NavBar">
              <div className="Logo">
              <NavLink to="/" className="Nav-anchr"><img src={Logo} className='Nav-img' alt="" srcSet={Logo} /></NavLink></div>
              <ul className="Nav-ul">
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">Home</NavLink></li>
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">About</NavLink></li>
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">Skills</NavLink></li>
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">Services</NavLink></li>
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">Portfolio</NavLink></li>
                    <li className="Nav-Li"><NavLink to="/" className="Nav-anchr Nav-anchr-dark ">Get in touch</NavLink></li>

              </ul>
              <div className="Social">
                 <a href="https://github.com/akhilpamwani/" className='Nav-anchr'> <img src={github} alt="" srcSet={github} className="Social-icons" /></a>
                 <a href="https://www.linkedin.com/in/aryan-pamwani-8771161a6/" className='Nav-anchr'><img src={linkedin} alt="" srcSet={linkedin} className="Social-icons" /></a> 
                 <a href="https://www.instagram.com/aryanpamwani.official/" className='Nav-anchr'><img src={instagram} alt="" srcSet={instagram} className="Social-icons" /></a> 
                  <img src={darkmode} alt="" srcSet={darkmode}  onClick={props.button}className="Social-icons" />
              </div>
              </nav>  
              </div>
        </>
    )
}
