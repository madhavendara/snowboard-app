import React , {useState} from 'react'
import Navbar_linkbar from '../component/nav_linkbar'


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
            <Navbar_linkbar classlist={navclass} closenav={closeNav}/>
                <img src={navbar_logo} className="navbar-link" alt="navbar" onClick={openNav}/>   
                <img src={props.page == 'compare' ? applogo : logo}  className="app-logo" alt="ShredMetrix"/>
        </div>
    )
}


export default Header