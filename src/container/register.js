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
                                <h1>Register now</h1>
                                <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem </p>
                            </div>

                            <Link to="/login" className="login-facebook">
                                <p>Log in</p>
                                
                                </Link>

                            <div className="wrapper">
                                <div className="contact-form">
                                <div className="input-fields">

                                <div>
                                    <p>Your name</p>
                                    <input type="text" className="input" placeholder="your name"/>
                                </div>
                                <div>
                                    <p>Enter EMAIL*</p>
                                    <input type="text" className="input" placeholder="dummy@gmail.com"/>
                                </div>
                                    <div>
                                        <p> Choose PASSWIRD*</p>
                                        <input type="password" className="input"  placeholder="********"/>
                                    </div>

                                    <div>
                                        <p> Re enter PASSWIRD*</p>
                                        <input type="text" className="input"/>
                                    </div>


                                    
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