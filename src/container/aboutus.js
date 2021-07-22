import React from 'react'
import Header from './header'
import Footer from './footer'

// images 

import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'
import insta from '../assest/insta.svg'
import jared from '../assest/JARED.png'


const Aboutus = () => {
    return (
<React.Fragment>
        <div className="wall-background">
            <div className='snowboard-menu container'>
                <Header/>
            </div>

            <div className="container main-div">
                <div className="row">
                    <div className="heading-text">
                        <h1>MEET OUR TEAM</h1>
                    </div>
                    <div className="in-text">
                      <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                   </div>
                </div>
                <div className="row">
                    <div className="JARED-img">
                       <img src={jared} alt=""/>
                       <div className="social-icon">
                           <img src={insta} alt=""/>
                           <img src={facebook} alt=""/>
                           <img src={twitter} alt=""/>
                           <img src={linkedin} alt=""/>
                       </div>
                    </div>
                    <div className="JARED-text ">
                        <h1>JARED MCNALLY <span>/ OWNER</span></h1>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem. voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, </p>
                   </div>
                </div>
            </div>
        </div> 

        <div className="container">
            <div className="row">
                <div className="member-group">
                    <div className="row">
                         <div className="member-img">
                             <img src={jared} alt=""/>
                         </div>
                         <div className="member-info">
                             <h2>MIKE LEE <span>/ CTO</span></h2>
                             <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                             <div className="social-icon">
                             <img src={insta} alt=""/>
                           <img src={facebook} alt=""/>
                           <img src={twitter} alt=""/>
                           <img src={linkedin} alt=""/>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="member-group">
                 <div className="row">
                      <div className="member-img">
                          <img src={jared} alt=""/>
                      </div>
                      <div className="member-info">
                          <h2>Kammie Melt0n <span>/Creative Director</span></h2>
                          <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                          <div className="social-icon">
                          <img src={insta} alt=""/>
                           <img src={facebook} alt=""/>
                           <img src={twitter} alt=""/>
                           <img src={linkedin} alt=""/>
                          </div>
                      </div>
                 </div>
             </div>
            </div>
       </div>

       <Footer/>
        
        </React.Fragment>
    )
}


export default Aboutus;