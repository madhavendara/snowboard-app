import React from 'react'
import bookmark from '../assest/bookmark.svg'

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
                              <a href={props.url} target="_blank" rel="noreferrer">
                                    <h1>{props.title}</h1>    
                                  </a>  
                                <h5>{props.type}</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>{props.price}</h3>
                                <button className={props.added ? "selection-check active-selection-" + active_type() : "selection-check no-active-selection"}
                                    onClick = {() => props.productadded(props.id)}
                                >
                                </button>

                                <img onClick={props.bookmarkadd} src={bookmark} alt="save" className="bookmark"/>    

                            </div>

                        </div>
                    </div>  
    )
}


export default Productcard;