import React from 'react'
import Navbar  from './Navbar';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import LandingPage from './LandingPage';
function Port(){
    return(
        <div>
            <Navbar />
            <LandingPage />
            <About />
            <Experience />
            <Projects />
            
            
        </div>
    )
}
export default Port;