import React from 'react'
import me from '../images/me.png'
import Textra from 'react-textra'




function LandingPage(){
    return(
        <div className='landingcontainer'>
            <div>
                <h1 className='Name'>Sampada Dhole</h1>
                <h1 id="textslider"><Textra effect='flash' duration={1000} data={['Full Stack Developer', 'Software Developer Engineer']} /></h1>
            </div>
            <div className='Images'>
            <img src={me} alt="BigCo Inc. logo"/>
            </div>
            <div>
                <button className='btn'>Contact me</button>
            </div>
        </div>
    )
}



export default LandingPage;