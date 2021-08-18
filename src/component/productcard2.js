import React from 'react'
import deleteimg from '../assest/delete.svg'
const Productcard = (props) => {

    const active_type = () =>
    {
        if(props.added)
        {
            return props.class.indexOf(props.id) + 1;
        }
    }

    return (
        <div className='product-card'>
                        <div className="product-img-container">
                           <img src={props.productimg} className="product-img" alt={props.title}/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>{props.title}</h1>
                                <h5>{props.type}</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>{props.price}</h3>
                                <button class="selection-check delete-selection"></button>
                            </div>

                        </div>
                    </div>  
    )
}


export default Productcard;