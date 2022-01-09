import React from 'react'
import { Link,useHistory } from 'react-router-dom'

//images import
import login from '../assest/login.png'
import search from '../assest/search.svg'
import logout from '../assest/logout.svg'
import insta from '../assest/insta.svg'
import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'


const Navbar_linkbar = (props) => {
    let button;
    if (localStorage.getItem('token')) {
        button = <div className="login logout"> <img src={logout} alt=""/> <a onClick={()=>logoutUser()}>Log out</a> </div>;
    } else {
        button = '';
    }

    const history = useHistory(); // show history

    const logoutUser = ()=>{
        localStorage.removeItem("token")
        history.push("/login");
    }

    return (
        <ul id="menu" className={props.classlist}>
        <li className="login">
            <p>Close</p>
           <div className="close-btn" onClick={props.closenav}>&times;</div>
        </li>
        <li className="login">
        <Link to="/dashboard">My Account</Link>
            <img src={login} alt="login"/>
        </li>
{/*         
        <li className="login">
            <img src={search} alt=""/>
            <input type="text" name="fname" placeholder="Search Here."/>
        </li> */}
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/invest">INVEST</Link></li>
        {/* <li><Link to="/snowboardeducation">Snowboard Education</Link></li> */}
        {/* <li><a href="#feedback">REVIEW</a></li> */}
            {button}
         {/* <div className="in-item">
            <div className="social-icon">
                <img src={insta} alt="insta"/>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
        </div> */}
    </ul>  
    )
}


export default Navbar_linkbar;