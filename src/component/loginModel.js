import React from 'react'


const LoginModel = (props) => {
    return (
        <div id="not-login">
            <h1>Please login to continue</h1>
            <div className='login-container1'>
                <button className='cancel-btn' onClick={props.closePopup}>Cancel</button>
                <a href='/login' className='login-btn'>Login</a>
            </div>
        </div>      
    )
}


export default LoginModel;