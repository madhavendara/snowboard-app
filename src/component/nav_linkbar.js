import React from 'react'

//images import
import login from '../assest/login.png'
import search from '../assest/search.svg'
import usa from '../assest/usa.png'
import insta from '../assest/insta.svg'
import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'

const Navbar_linkbar = (props) => {
    return (
        <ul id="menu" className={props.classlist}>
        <li className="login">
            <p>Close</p>
           <a href="#" className="close-btn" onClick={props.closenav}>&times;</a>
        </li>
        <li className="login">
            <a href="#">LOGIN</a>
            <img src={login} alt="login"/>
        </li>
        
        <li className="login">
            <img src={search} alt=""/>
            <input type="text" name="fname" placeholder="Search Here."/>
        </li>
        <li><a href="#about">About us</a></li>
        <li><a href="#contact">INVEST</a></li>
        <li><a href="#feedback">REVIEW</a></li>
        <div className="login">
            <img src={usa} alt=""/>
            <a>United State</a>
        </div>
         <div className="in-item">
            <div className="social-icon">
                <img src={insta} alt="insta"/>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
        </div>
    </ul>  
    )
}


export default Navbar_linkbar;