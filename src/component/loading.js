import React from 'react'
import logoicon from '../assest/logo-icon.png'

const Loading = (props) => {
    return (
        <div id="loader" className={props.active ? 'loader-active' : null}>
         
                <img src={logoicon} className="center-icon" alt="logo-icon"/>
                <h5>Loading...</h5>
 
            
        </div>      
    )
}


export default Loading;