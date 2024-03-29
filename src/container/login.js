import React, { useContext } from 'react'
import Header from './header'
import Footer from './footer'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useSnackbar } from 'react-simple-snackbar';

const Invest = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component
    const history = useHistory(); // show history


    const onSubmit = async (data) => {

        let formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        await fetch("https://shredmetrix.com/airtable/api/login.php", {
            "method": "POST",
            "body":formData,
        }).then(response => response.json())
            .then((response) => {
                if(response.success === true){
                    localStorage.setItem('token',response.data.id);
                    history.push("/");
                    
                }
                openSnackbar(response.msg)
            })
            .catch(err => {
                console.log(err)
                openSnackbar(err)
            });


    };

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
                            <p>Be the first to receive data-focused, deeply analyzed gear suggestions considering your specific physical characteristics and preferences. </p>
                        </div>
                        <div className="login-side">
                            <div className="login-uptext">
                                <h1>Login</h1>
                                <p>New here? Register to personalize your gear geek out. </p>
                            </div>
      
                                <Link to="/register" className="login-facebook">
                                <p>Register</p>
                                </Link>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="wrapper No-wrapper">
                                <div className="contact-form">
                                <div className="input-fields">
                                <div>
                                    <p>EMAIL*</p>
                                    <input type="text" className="input" {...register("email", { required: 'This field is required' })} placeholder="dummy@gmail.com"/>
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                    <div>
                                        <p>PASSWORD*</p>
                                        <input type="password" className="input" {...register("password", { required: 'This field is required' })}  placeholder="********"/>
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>
                                </div>
                                <div className="check-btngroup">
                                    <div className="check-item">
                                        <input type="checkbox" id="check"/>
                                        <label for="check">Remember me</label>
                                    </div>
                                    <Link to="/forget"><p>Forgot your password?</p></Link>
                                </div>
                                <div className="contact-form">
                                    <button className="login-submit">Submit</button>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

</div> 

       <Footer/>
        
        </React.Fragment>
    )
}


export default Invest;