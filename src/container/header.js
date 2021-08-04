import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import NavbaLinkbar from '../component/nav_linkbar'


// images import
import applogo from '../assest/applogo.svg'
import navbar_logo from '../assest/nav-bar.svg'
import logo from '../assest/logo.svg'

const Header = (props) => {
    const [navclass , setNavclass] = useState("hidenav")

    
    const openNav = () => {
        setNavclass('shownav')
    }

    const closeNav = () => {
        setNavclass('hidenav')
    }



    return (
        <div className="app-header" id="main-header">
            <NavbaLinkbar classlist={navclass} closenav={closeNav}/>
                <img src={navbar_logo} className="navbar-link" alt="navbar" onClick={openNav}/> 
            <Link to="/">
                <img src={props.page === 'compare' ? applogo : logo}  className="app-logo" alt="ShredMetrix"/>
            </Link>    
        </div>
    )
}


export default Header