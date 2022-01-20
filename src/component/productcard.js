import React from 'react'
import bookmark from '../assest/bookmark.svg'
import bookmark_active from '../assest/bookmark-active.svg'
import Productbox from './productbox';


const Productcard = (props) => {

    const active_type = () =>
    {
        if(props.added)
        {
            return props.class.indexOf(props.id) + 1;
        }
    }

    

    return (
        
        <div className='product-card-2'>
                        <div className="product-img-col">
                           <img src={props.productimg} className="product-img" alt={props.title}/> 
                        </div>
                        <div className="product-content-col">
                            
                                <h1><a href={props.url} target="_blank" className="product-card-link"> {props.title}</a></h1> 
                            
                                    <p>{props.Brand}</p>
                                    <h5>{props.size}cm</h5>
                                    <p>{props.type}</p> 
                                    <h3>${props.price}</h3>
                                    <div className="star star-4"></div>
                        </div>
                        
                                <button 
                                className={props.added ? "selection-check active-selection-" + active_type() : "selection-check no-active-selection"}
                                onClick = {() => props.productadded(props.id)}
                                >
                                {
                                    props.i === 0 && props.walkthrough === 2 ? <>
                                    <div className="blue-box-1">
                                    <h2>Select 2-4 Boards</h2>
                                    <button className="gotit-btn" onClick={props.walkfunction}>Got it</button>  
                                    <button className="skipit-btn" onClick={props.walkfunction_null}>Skip Demo</button>  
                                    
                                    </div>    
                                    <div className="backdrop">
                                    </div>  
                                    </> : null
                                }    
                                </button>

                                { (props.bookmarkCheck.some(e1=> e1.id === props.id))?<img src={bookmark_active} onClick={() => props.bookmarkadd(props.id)} className='bookmarkAddition' />:<img src={bookmark} onClick={() => props.bookmarkadd(props.id)} className='bookmarkAddition' />}
                                
                    </div>
                  
                 
    )
}


export default Productcard;