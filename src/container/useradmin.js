import React , { useState, useEffect, useRef} from 'react'
import Header from './header'
import Footer from './footer'
import Productcard from '../component/productcard2'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar';
import { useForm } from "react-hook-form";

import  {Product} from '../JSON/products'
import {User} from '../JSON/user'

import userimg from '../assest/user.png'
import edit from '../assest/edit.svg'


const Admin = () => {

    const [userproducts , setuserproducts] = useState([]);
    const [user , setUser] = useState(null);
    const [activetab,setactivetab] = useState("tab-1")

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm({
        defaultValues: { name: "", email: "" },
    });
    const password = useRef({});
    password.current = watch("password", "");


    useEffect(() => {
        
        Product.getBookmarkProduct().then((products,err)=>{
            if(!err){
                setuserproducts(products)
            }
        })

        // get user data
        User.getUser().then((userData,err)=>{
            if(!err){
                const Data = userData.data || '';
                setUser(Data.fields)
                reset(Data.fields);
            }
        })


    }, [reset])




    const deletebookmark = (key) => {
        Product.deleteProduct(key).then((res,err)=>{
            if(!err) {
                openSnackbar(res.msg)
                var index = userproducts.findIndex(p => p.wishlist_id === key);
                userproducts.splice(index, 1);
            }
        })
    }

    const onSubmit = async (data) => {
        User.updateProfile(data).then((userData,err)=>{
            if(!err){
                if(userData.success === true){
                    setUser(data)
                }
                openSnackbar(userData.msg)
            }
        })
    }

    return (
<React.Fragment>
<div className="dashboard">
    <div className="container padding-top">
        <Header page="compare"/>

        <div className="dashboard-container">
            <div className="user-box div">
                <div className="user-image-container">
                        {/* <img src={edit} alt="user" className="edit-content"/> */}
                     <img src={userimg} alt="user" className="user-image"/>
                </div>


                <h3>{ (user)?user.Name:'' }</h3>
                <h5>{ (user)?user.Email:'' }</h5>

            </div>
            <div className="user-docs div">
                <div className="user-tabs">
                    <div className={activetab === "tab-1" ? "tabs tab-link-active" : "tabs"} onClick={() => setactivetab("tab-1")}>
                        Save products
                    </div>

                    <div className={activetab === "tab-2" ? "tabs tab-link-active" : "tabs"} onClick={() => setactivetab("tab-2")}>
                   My Profile
                    </div>
                </div>

                <div className={activetab === "tab-1" ? "tab-content tab-content-active" : "tab-content"}>
                {

                    
                    userproducts.map(product => {
                        console.log(product)
                        return (
                            <Productcard
                    productimg={product["img"]} 
                    title={product["Title"]}
                    console={product}
                    type={product["type"]}
                    stars={product["stars"]}
                    price={product["Price"]}
                    added={true}
                    class={true}
                    key = {product["id"]}
                    id = {product["id"]}
                    wishlistId = {product["wishlist_id"]}
                    deletebookmark={deletebookmark}

                    /> 
                        )
                    })
                }
                </div>

                <div className={activetab === "tab-2" ? "tab-content tab-content-active" : "tab-content"}>
                <div className="wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="contact-form">
                                <div className="input-fields user-panel-profile">

                                <div>
                                    <p>Your name</p>
                                    <input type="text" className="input" {...register("Name", { required: 'This field is required' })} placeholder="your name" defaultValue={(user)?user.Name:''} />
                                    {errors.name && <span>{errors.Name.message}</span>}
                                </div>
                                <div>
                                    <p>Enter EMAIL*</p>
                                    <input type="text" className="input" {...register("Email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Please enter a valid email',
                                        } })} placeholder="dummy@gmail.com" defaultValue={(user)?user.Email:''} />
                                    {errors.Email && <span>{errors.Email.message}</span>}
                                </div>
                                    <div>
                                        <p> Choose PASSWORD*</p>
                                        <input type="text" defaultValue='' {...register("password", {
                                            //required: 'This field is required',
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                        })} className="input" placeholder="********"/>
                                        {errors.password && <span>{errors.password.message}</span>}
                                    </div>

                                    <div>
                                        <p> Re enter PASSWORD*</p>
                                        <input type="text" {...register("confirmPassword", {
                                            //required: 'This field is required',
                                            validate: value =>
                                                value === password.current || "The passwords do not match"

                                        })} className="input"/>
                                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                    </div>                                    
                                </div>
                            
                                <div className="contact-form">
                                    <button className="login-submit">Submit</button>
                                </div>
                                </div>
                    </form>
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


export default Admin;