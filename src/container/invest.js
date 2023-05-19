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
                        <h1>INVEST IN YOUR FUTURE</h1>
                        <p>Ready to become a part of something big? Shredmetrix brings science into extreme sports to allow anyone to maximize their shredding experience through accurate data visualization and education. Now is the time to become a part of the future of extreme sports. Oh, and by the way - we have two patents pending, so don’t wait too long!</p>
                 
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
                        <h6>Proprietary systems</h6>
                        <p>Our data collection, gear measurement, and visualizations we designed and built in house- and yes, our patents are pending. </p>
                    </div>
                    <div className="colume">
                        <h3>2</h3>
                        <h6>Disrupt the Industry</h6>
                        <p>No more specs tables. No more uneducated suggestions from gear “experts”. No more guessing which board or ski is best for you and your specific needs. We are changing the game, and you can be a part of it.</p>
                    </div>
                    <div className="colume last">
                        <h3>3</h3>
                        <h6>Industry Involvement</h6>
                        <p>We plan to use capital to become a mojor player in the industry - sponsoring contest, events, videos and movies, and working with manufacturers to enhance the customer/shredder experience.</p>
                    </div>
                </div>
                <div className="row two">
                    <div className="colume">
                        <h3>4</h3>
                        <h6>Dedicated Leadership</h6>
                        <p>Imagine a world where you can be matched with the best gear for your ability level, conditions, and desired improvement? Our founder and executives are dedicated to bringing this solution to the world.</p>
                    </div>
                    <div className="colume">
                    <h3>5</h3>
                    <h6>Future efforts</h6>
                    <p>We have a slew of future features and functions that we plan to implement through several phases which are planned to be completed by 2023.</p>
                </div>
                <div className="colume last">
                    <h3>6</h3>
                    <h6>Exit Strategy</h6>
                    <p>Sell to the gear manufacturers and merchants - change the world by bringing this tool to the souce our of gear.
</p>
                </div>
                </div>
            </div>

</div> 

<div className="Qick-wall">
   <div className="container">
       <div className="row">
           <div className="QUICK-text">
                <h1>READY TO GET INVOLVED?</h1>
                <p>Make a donation to help us change the world (of extreme sports). Every dollar helps get us where we want to be. Your donation will be applied to marketing campaigns, feature and function advancement and development, partnership development efforts, athlete sponsorship, event hosting and sponsorship, and anything else that our capable executive team deems necessary to make the biggest impact possible.</p>
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