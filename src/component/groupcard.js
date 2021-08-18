import React from 'react'
import product from '../assest/product/product-1.jpg'
import product2 from '../assest/product/product-1.jpg'
const Groupcard = (props) => {

const productlist = [product,product2,product2,product]    

    return (
        <div className='group-card'>
            <h3>{props.numbers} products</h3>

            <div className="images-list">
            {
                productlist.map((img , i) => {
                    return (
                        i <= 1 ? <img src={img} alt="title" className="group-class"/> : null
                    )
                })
            }

            { props.numbers > 2 ? <div className="number-circle">+{props.numbers - 2}</div> : null}

            </div>
        </div>  
    )
}


export default Groupcard;