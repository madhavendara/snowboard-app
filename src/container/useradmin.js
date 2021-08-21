import React , { useState, useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import Productcard from '../component/productcard2'
import { Link } from 'react-router-dom'

import  {Product} from '../JSON/products'
import userjson from '../JSON/user'

import userimg from '../assest/user.png'
import edit from '../assest/edit.svg'


const Admin = () => {

    const [userproducts , setuserproducts] = useState([]);
    const [activetab,setactivetab] = useState("tab-1")

    useEffect(() => {
        
        Product.getProduct().then((products,err)=>{
            if(!err){

                let usercopy = [];
                for(let i = 0; i < products.length; i++)
                {
                    for(let j = 0; j < userjson.length; j++)
                    {
                        if(products[i].id === userjson[j].ref)
                        {
                            let use = products[i];
                            usercopy.push(use)

                            console.log(usercopy)
                        }
                    }
                }

                setuserproducts(usercopy)

               
                // anotherCopy = [...products];

                // changecopy(exampleCopy)


            }
        })
        //

    }, [])

    return (
<React.Fragment>

<div className="dashboard">
    <div className="container padding-top">
        <Header page="compare"/>

        <div className="dashboard-container">
            <div className="user-box div">
                <div className="user-image-container">
                        <img src={edit} alt="user" className="edit-content"/>
                     <img src={userimg} alt="user" className="user-image"/>
                </div>
                
                <h3>madhavendra pahari</h3>
                <h5>madhavendrapahari943@gmail.com</h5>

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
                        return (
                            <Productcard
                    productimg={product["img"]} 
                    title={product["Title"]} 
                    type={product["type"]}
                    stars={product["stars"]}
                    price={product["Price"]}
                    added={true}
                    class={true}
                    key = {product["id"]}
                    id = {product["id"]}
          
                    /> 
                        )
                    })
                }
                </div>

                <div className={activetab === "tab-2" ? "tab-content tab-content-active" : "tab-content"}>
                <div className="wrapper">
                                <div className="contact-form">
                                <div className="input-fields user-panel-profile">

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
</div>
       <Footer/>
        
        </React.Fragment>
    )
}


export default Admin;