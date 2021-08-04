import React , {useState} from 'react'
import NavbarLinkbar from '../component/nav_linkbar'


// images import
import barbtn from '../assest/btn.svg'


const Header2 = (props) => {
    const [navclass , setNavclass] = useState("hidenav")

    
    const openNav = () => {
        setNavclass('shownav')
    }

    const closeNav = () => {
        setNavclass('hidenav')
    }



    return (
    <nav className="click-item">
        <label id="icon" onClick={openNav}>
            <img src={barbtn} alt=""/>
        </label>
            <NavbarLinkbar classlist={navclass} closenav={closeNav}/>
    </nav>    
    )
}


export default Header2