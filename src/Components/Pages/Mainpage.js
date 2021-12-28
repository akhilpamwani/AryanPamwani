import React,{useState} from 'react'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Nav } from '../NavBar/Nav'
import { NewProject } from '../NewProject/NewProject'
import { Project } from '../Project/Project'
import '../assets/css/darkmode.css'
import { Services } from '../Services/Services'
import { Skill } from '../Skills/Skill'
import { NavResponsive } from '../NavBarResp/NavResp'

export const Mainpage = () => {
    const [state, setstate] = useState(true)
    return (
        <>
        
        <main className={state?'lightmode': 'darkmode'}>
           <Nav button={()=>setstate(!state)}/>
           <NavResponsive button={()=>setstate(!state)}/>
           <Home/>
           <About/> 
           <Skill/>
           <Services/>
           <Project/>
           <NewProject/>
           <Contact/>
           <Footer/>
           </main>
        </>
    )
}
