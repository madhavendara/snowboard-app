import React from 'react'

// images 
import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'
import insta from '../assest/insta.svg'
import { Link } from 'react-router-dom'
import applogo from '../assest/logo-white.svg'


const footer = () => {
    return (
    <div className="contact-wall container-fluid">
                <div className="row">
                    <div className="contact-text">
                        <img src={applogo} alt="shredmetrix" class="app-logo"/>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                    </div>
                    <div className="contact-menu">
                        <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/invest">INVEST</Link></li>
                        {/* <li><a href="#feedback">REVIEW</a></li> */}
                        </ul>  
                    </div>
                </div>
               <div className="boder row">
                    {/* <div className="social-icon">
                        <img src={insta} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div> */}
                  <div className="text-last">
                    <p>Copyright ©2022 shredmetrix</p>
                  </div>
               </div>
            </div> 

    )
}

    export default footer