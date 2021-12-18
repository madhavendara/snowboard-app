import React from 'react'
const Productcard = (props) => {

    return (
        <div className='product-card'>
                        <div className="product-img-container">
                           <img src={props.productimg.url} className="product-img" alt={props.title}/> 

                           {console.log(props.console)}
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>product</h1>
                                <h5>{props.type}</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>{props.price}</h3>
                                <button onClick={() => props.deletebookmark(props.wishlistId)} className="selection-check delete-selection"></button>
                            </div>

                        </div>
                    </div>  
    )
}


export default Productcard;