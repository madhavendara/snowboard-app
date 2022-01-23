import React from 'react'
import Header from './header'
import Footer from './footer'
import { useForm } from "react-hook-form";
import { useSnackbar } from 'react-simple-snackbar';

// images 
import fly from '../assest/fly.png'
import cloud from '../assest/cloud.png'
import vector from '../assest/Vector.svg'

import {User} from '../JSON/user'
import {Product} from "../JSON/products";
import { Widget } from '@typeform/embed-react'

const Invest = () => {

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component

    const onSubmit = async (data) => {
        User.contact(data).then((res,err)=>{
            if(!err) {
                reset();
                openSnackbar(res.msg)
            }
        })

    };

    return (
<React.Fragment>
<div className="wall-Invest">
            <div className='snowboard-menu container'>
                <Header/>
            </div>


            <div className="Invest-main container">
                <div className="row">
                    <div className="Invest-text ">
                        <h1>INVESTOR RELATIONS WITH SHREDMETRIX</h1>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                    </div>
                </div>
                <div className="fly-img">
                    <img src={fly} alt=""/>
                </div>
                <div className="cloud-img">
                    <img src={cloud} alt=""/>
                </div>
                <div className="row">
                    <div className="INVESTMENT">
                    </div>
                </div>
            </div>

            <div className="columes container">
                <div className="row">
                    <div className="colume">
                        <h3>1</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume">
                        <h3>2</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume last">
                        <h3>3</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                </div>
                <div className="row two">
                    <div className="colume">
                        <h3>4</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume">
                    <h3>5</h3>
                    <h6>What is Lorem Ipsum?</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <div className="colume last">
                    <h3>6</h3>
                    <h6>What is Lorem Ipsum?</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                </div>
            </div>

</div> 

<div className="Qick-wall">
   <div className="container">
       <div className="row">
           <div className="QUICK-text">
                <h1>ADVANTAGE OF INVESTING OPPORTUNITIES WITH SHREDMETRIX</h1>
                <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius </p>
           </div>
           <div className="QUICK-Login">

           <Widget id="tRZWymIb" className="my-form" />
               {/* <h1>QUICK INVEST</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className="wrapper">
                <div className="contact-form">
                  <div className="input-fields">
                   <div>
                    <p>YOUR NAME*</p>
                    <input type="text" className="input" {...register("name", { required: 'This field is required' })} placeholder="Type your name"/>
                       {errors.name && <span>{errors.name.message}</span>}
                   </div>
                   <div>
                       <p>YOUR EMAIL ADDRESS*</p>
                       <input type="text" className="input" {...register("email", {
                           required: "This field is required",
                           pattern: {
                               value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                               message: 'Please enter a valid email',
                           } })} placeholder="dummy@gmail.com"/>
                       {errors.email && <span>{errors.email.message}</span>}
                   </div>
                    <div>
                        <p>INVESTMENT AMOUNT*</p>
                        <input type="number" {...register("price", { required: 'This field is required' })} className="input"  placeholder="$250"/>
                        {errors.price && <span>{errors.price.message}</span>}
                    </div>
                   </div>
                   <div className="contact-form">
                     <button><img src={vector} alt=""/></button>
                   </div>
                 </div>
              </div>
           </form> */}
          </div>
       </div>
   </div>
</div>
       <Footer/>
        
        </React.Fragment>
    )
}


export default Invest;