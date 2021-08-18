import React , { useState, useEffect,useRef} from 'react'
import Header from './header'
import Footer from './footer'
import Productcard from '../component/productcard2'
import Groupcard from '../component/groupcard'


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
                        if(products[i].id == userjson[j].ref)
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
                    <div className={activetab == "tab-1" ? "tabs tab-link-active" : "tabs"} onClick={() => setactivetab("tab-1")}>
                        Save products
                    </div>

                    <div className={activetab == "tab-2" ? "tabs tab-link-active" : "tabs"} onClick={() => setactivetab("tab-2")}>
                    Save comparisons
                    </div>
                </div>

                <div className={activetab == "tab-1" ? "tab-content tab-content-active" : "tab-content"}>
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

                <div className={activetab == "tab-2" ? "tab-content tab-content-active" : "tab-content"}>
                    <Groupcard numbers={4}/>
                    <Groupcard numbers={2}/>
                    <Groupcard numbers={3}/>
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