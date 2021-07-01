import React from 'react'
import mountain from '../assest/mountain.png'
import logo from '../assest/logo.svg'
import cloud from '../assest/cloud.png'
import rider from '../assest/rider.png'
import snowScience from '../assest/snowboard-science.png'
import snowCompare from '../assest/snowboard-compare.png'

function Choice(props) {
    return (
        <section id='choice-section'>
            <nav id="main-navbar" className="container">
                <img src={logo} className='brand-logo' alt="Shredmetrix" />
            </nav>
            <div className="choice-container">
                <div className="choice-box choice-1">
                    <h1>compare  snowboards</h1>
                    <a href="#" className="choice-button">Explore</a>
                </div>

                <div className="choice-box choice-2">
                    <h1>Snowboard Science</h1>
                    <a href="#" className="choice-button">Explore</a>
                </div>
            </div>
            <img src={rider} alt="rider" className="rider-person"/>
            <img src={mountain} alt="mountain" className='mountain-bg'/>
            <img src={cloud} alt="cloud" className='cloud-bg'/>
        </section>
    )
}



export default Choice

