import React from 'react'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'


const Invest = () => {
    return (
<React.Fragment>
<div className="wall-Login">
            <div className='snowboard-menu container'>
                <Header/>
            </div>

                <div className="container login-container">
                    <div className="row">
                        <div className="login-text">
                            <img src="img/blue-line.png" alt=""/>
                            <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem voluptatem sequi nesciunt. Neque porro </p>
                        </div>
                        <div className="login-side">
                            <div className="login-uptext">
                                <h1>LOG-IN</h1>
                                <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem </p>
                            </div>
                            <a href="#about" className="login-facebook">
                                <img src="img/facebook-circle.png" alt=""/>
                                <p>Log in with Facebook</p>
                            </a>
                            <div className="wrapper">
                                <div className="contact-form">
                                <div className="input-fields">
                                <div>
                                    <p>EMAIL*</p>
                                    <input type="text" className="input" placeholder="dummy@gmail.com"/>
                                </div>
                                    <div>
                                        <p>PASSWIRD*</p>
                                        <input type="text" className="input"  placeholder="********"/>
                                    </div>
                                </div>
                                <div className="check-btngroup">
                                    <div className="check-item">
                                        <input type="checkbox" id="check"/>
                                        <label for="check">Remember me</label>
                                    </div>
                                    <p>Forgot your password?</p>
                                </div>
                                <div className="contact-form">
                                    <Link to="/dashboard" className="login-submit">Submit</Link>
                                </div>
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


export default Invest;