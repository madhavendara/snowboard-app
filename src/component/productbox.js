import React from 'react'
import evo from '../assest/evo.svg'
import addtocompare from '../assest/addtocompare.svg'
import addimg from '../assest/productAdded.svg'



export default function Productbox(props) {
    const size_array = props.sizes.split(" , ");

    
    return (
        <div className="product-box-container">
            <div className="product-box">
                <div className="product-box-row">
                    <div className="product-img-box">
                        <img src={props.productimg} className="product-img" alt={props.title}/> 
                    </div>    
                    <div className="product-content-box">
                        <h2>{props.title}</h2>
                        <h5>Camber/Rocker/Camber</h5>
                    </div>
                </div>

                <div className="product-box-3">
                    <div className="size-container">
                        <h4>Sizes</h4>
                        <div className="size-list">
                    {
                         size_array.map(size_ => {
                            return (
                                <div className="size-box">
                                    <h4>{size_}</h4>    
                                </div>    
                            )
                        })
                    }
                    </div>
                    </div>

                    <div className="buy-envo">
                        <h4>Buy on evo.com</h4>
                        <a className="buy-btn" href={props.url} target="_blank">
                            <img src={evo} alt="evo" className="evo-img"/>
                            {props.price}
                        </a>
                    </div>


                </div>

                <div className="product-box-2">
                    {
                        !props.added ? <img 
                        src={addtocompare} 
                        className="add-to-compare"
                        alt="add-to-compare"
                        onClick={() => props.productadded(props.id)}
                         
                         /> :
                        
                        <img src={addimg} alt="product-added"/>
                    }
                    <p onClick={props.closePopup}>Close</p>
                </div>
                
            </div>
        </div>
    )
}
