import React from 'react'
import { useForm } from "react-hook-form";
import {User} from '../JSON/user'

export default function Comingsoon() {

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        User.Subscribe(data).then((res,err)=>{
            if(!err) {
                reset();
                alert(res.msg)
            }
        })

    };

    return (
        <div className="under-construction">
                  <div className="center-content">
                        <h1>SHREDMETRIX MOBILE APP</h1>
                        <h4>Under construction</h4>
                        <p>Join our mailing list!</p>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="subscribe-box">
                              <input type="email" className="type-text"
                              {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                } })}

                              placeholder="Enter your email address"/>
                              {errors.email && <span>{errors.email.message}</span>}
                              <input type="submit" value="Submit" className="type-submit"/>

                        </form>      
         
                  </div>
            </div>
    )
}
