import React from 'react'
import { Link } from 'react-router-dom'

import mountain from '../assest/mountain.png'
import Header from './header'
import cloud from '../assest/cloud.png'
import snowScience from '../assest/snowboard-science.png'
import snowCompare from '../assest/snowboard-compare.png'

function Choice(props) {
    return (
        <section id='choice-section'>
            <nav id="main-navbar" className="container">
                <Header page="choice"/>
            </nav>
            <div className="choice-container">
                <div className="choice-box choice-1">
                    <h1>compare  snowboards</h1>
                    <img src={snowCompare} className="snow-img snow-compare" alt="snowCompare"/>
                    <Link to="/comparisonapp" className="choice-button">Explore</Link>
                </div>

                <div className="choice-box choice-2">
                    <h1>Snowboard Science</h1>
                    <img src={snowScience} className="snow-img snow-science" alt="snowCompare"/>
                    <Link to="/snowboardeducation" className="choice-button">Explore</Link>
                </div>
            </div>
            <img src={mountain} alt="mountain" className='mountain-bg'/>
            <img src={cloud} alt="cloud" className='cloud-bg'/>
        </section>
    )
}



export default Choice

