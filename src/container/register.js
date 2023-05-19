import React, { useState, useEffect,useRef}  from 'react'
import Header from './header'
import Footer from './footer'
import { Link,useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import productline from "../assest/product-line-1.svg";
import { useSnackbar } from 'react-simple-snackbar'


const Invest = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component
    const history = useHistory(); // show history

    const onSubmit = async (data) => {

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        await fetch("https://shredmetrix.com/airtable/api/register.php", {
            "method": "POST",
            "body":formData,
        }).then(response => response.json())
            .then(response => {
                /*if(response.success === true){
                    localStorage.setItem('token',response.data.id);
                    history.push("/dashboard");
                }*/
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="wrapper No-wrapper">
                                <div className="contact-form">
                                <div className="input-fields">

                                <div>
                                    <p>Your name</p>
                                    <input type="text" className="input" {...register("name", { required: 'This field is required' })} placeholder="your name"/>
                                    {errors.name && <span>{errors.name.message}</span>}
                                </div>
                                <div>
                                    <p>Enter EMAIL*</p>
                                    <input type="text" className="input" {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Please enter a valid email',
                                        } })} placeholder="dummy@gmail.com"/>
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                    <div>
                                        <p> Choose PASSWORD*</p>
                                        <input type="password" className="input" {...register("password", {
                                            required: 'This field is required',
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                        })}  placeholder="********"/>
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>

                                    <div>
                                        <p> Re enter PASSWORD*</p>
                                        <input type="password" className="input" {...register("confirmPassword", {
                                            required: 'This field is required',
                                            validate: value =>
                                                value === password.current || "The passwords do not match"

                                        })}/>
                                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                    </div>


                                    
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