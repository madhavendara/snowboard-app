import React, { useContext } from 'react'
import Header from './header'
import Footer from './footer'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useSnackbar } from 'react-simple-snackbar';

const Forget = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component
    const history = useHistory(); // show history


    const onSubmit = async (data) => {

        let formData = new FormData();
        formData.append('email', data.email);
        await fetch("https://www.shredmetrix.com/airtable/api/forget-password.php", {
            "method": "POST",
            "body":formData,
        }).then(response => response.json())
            .then((response) => {
               /* if(response.success === true){
                    //localStorage.setItem('token',response.data.id);
                    history.push("/");

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
                                <h1>Forget Password</h1>
                                {/*<p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem </p>*/}
                            </div>

                            <Link to="/login" className="login-facebook">
                                <p>Login</p>
                            </Link>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="wrapper">
                                    <div className="contact-form">
                                        <div className="input-fields">
                                            <div>
                                                <p>EMAIL*</p>
                                                <input type="text" className="input" {...register("email", { required: 'This field is required' })} placeholder="dummy@gmail.com"/>
                                                {errors.email && <span>{errors.email.message}</span>}
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


export default Forget;