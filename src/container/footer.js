import React from 'react'

// images 

import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'
import insta from '../assest/insta.svg'


const footer = () => {
    return (
    <div className="contact-wall container-fluid">
                <div className="row">
                    <div className="contact-text">
                        <h3>LOGO.</h3>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                    </div>
                    <div className="contact-menu">
                        <ul>
                            <li><a href="#about">About US</a></li>
                            <li><a href="#service">INVEST</a></li>
                            <li><a href="#contact">REVIEW</a></li>
                            <li><a href="#feedback">MORE PAGES</a></li>
                        </ul>  
                    </div>
                </div>
               <div className="boder row">
                    <div className="social-icon">
                        <img src={insta} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                  <div className="text-last">
                    <p>Copyright ©2021shredmetrix</p>
                  </div>
               </div>
            </div> 

    )
}

    export default footer