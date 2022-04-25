import React from 'react'
import me from '../images/me.png'


function LandingPage(){
    return(
        <>
        <div id='AboutContainer'>
            <h1 className='Name'>Sampada Dhole</h1>
            <h2 className='FullStack'>Full Stack Developer</h2>
        </div>
        <div className='Images'>
        <img src={me} alt="BigCo Inc. logo"/>
        </div>
        <div>
            <button className='btn'>Contact me</button>
        </div>
        </>
    )
}
export default LandingPage;