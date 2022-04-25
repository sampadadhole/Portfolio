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
            <About />
            <Projects />
            <Experience />
            <LandingPage />
        </div>
    )
}
export default Port;