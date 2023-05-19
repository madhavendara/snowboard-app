import React from 'react'
import Header from './header'
import Footer from './footer'

// images 

import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'
import insta from '../assest/insta.svg'
import jared from '../assest/JARED.png'
import kammie from '../assest/kammie.png'
import mike from '../assest/mike.png'

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
                        <h5>What happens when you bring a lifelong boardsports enthusiast together with a rocket engineer and a social scientist? Shred happens.</h5>
                      <p>Our goal is to enable extreme sports connoisseurs to reach their athletic potential through visualizing and comparing gear specification data.</p>
                   </div>
                </div>
                <div className="row">
                    <div className="JARED-img">
                       <img src={jared} alt=""/>
                       {/* <div className="social-icon">
                           <img src={insta} alt=""/>
                           <img src={facebook} alt=""/>
                           <img src={twitter} alt=""/>
                           <img src={linkedin} alt=""/>
                       </div> */}
                    </div>
                    <div className="JARED-text ">
                        <h1>JARED MCNALLY <span>/ OWNER</span></h1>
                        <p>Jared is a boardsports enthusiast and considers himself a “board nerd”. He also happens to be a scientist who specializes in visual representation of data and education through data. The idea for ShredMetrix spawned in 2019 when Jared was trying to find a solution to allow him to compare the physical specs and dimensions of snowboards. After a phone call to his best friend and business partner, Mike Lee, Jared realized that there was no solution in the marketplace for a true visualization and comparison of boards virtually. ShredMetrix is a true passion project for Jared, and after several years of development, his efforts have paid off.</p>

                   </div>
                </div>
            </div>
        </div> 

        <div className="container team-container">
            <div className="row">
                <div className="member-group">
                    <div className="row">
                         <div className="member-img">
                             <img src={mike} alt=""/>
                         </div>
                         <div className="member-info">
                             <h2>MIKE LEE <span>/ CTO</span></h2>
                             <p>Mike specializes in understanding. Being one of the top engineers in the world, he brings a unique perspective to the extreme sports world. His focus - accurately measuring gear specs and simplifying the not-so-elementary physics behind gear AND athlete performance so that the rest of us can understand how to maximize performance. Mike has been instrumental in developing the proprietary measuring and visualization processes that make ShredMetrix unique.</p>
      
                         </div>
                    </div>
                </div>
                <div className="member-group">
                 <div className="row">
                      <div className="member-img">
                          <img src={kammie} alt=""/>
                      </div>
                      <div className="member-info">
                          <h2>Kammie Melt0n <span>/Creative Director</span></h2>
                          <p>Kammie is a passionate skier (she shreds) and is passionate about assessing and improving the user experience in software design with a focus on presentation and end-user interpreation of data. Her ongoing input has been a key factor is the creating and optimizing the UI and UX of the ShredMetrix platform. When it comes to understanding what users want, Kammie is the go-to.</p>
                
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