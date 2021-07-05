import React , { useState, useEffect, useRef } from 'react'
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import Productcard from '../component/productcard'
import ProductJSON from '../JSON/products'


import applogo from '../assest/applogo.svg'


const Comparison = () => {

    const [copyJSON , changecopy]  = useState([])
    const [activeproduct , updateactive] = useState([])

    let anotherCopy = [...ProductJSON];
    const [image, setImage] = useState(null)
    const canvas = useRef(null)
    useEffect(() => {
      const src =   "https://spotlexdigital.com/compare/product_graphics/product-1.svg"
      const catImage = new Image();
      catImage.src = src.replace(/#74A1DC/g,'#e05030');
      catImage.onload = () => setImage(catImage)
    }, [])
  
    useEffect(() => {
      if(image && canvas) {
        const ctx = canvas.current.getContext("2d")
        ctx.fillStyle = "red"
        ctx.fillRect(0, 0, 400, 256 + 80)
        ctx.drawImage(image, (400 - 256) / 2, 40 , 300,300)
  
      }
    }, [image, canvas])


    useEffect(() => {
        for(let i = 0; i < anotherCopy.length; i++)
        {
            anotherCopy[i]["added"] = false
        }
        changecopy(anotherCopy)
    }, [])

    const productAdded = (key) => {

        
            for(let i = 0; i < 8; i++)
            {
              
                if(anotherCopy[i].id === key)
                {
                    if(anotherCopy[i].added === true)
                    {
                        
                        const index = activeproduct.indexOf(anotherCopy[i].id)
                        if (index > -1) {
                            activeproduct.splice(index, 1);
                        }
                        anotherCopy[i].added = false
                    }
                   
              
                    else
                    {
                        if(activeproduct.length < 4)
                        {
                        activeproduct.push(anotherCopy[i].id)
                        anotherCopy[i].added = true
                        }
                        else
                        {
                            alert("Can't compare more than 4 products at a time")
                        }        
                    }
                    changecopy(anotherCopy) 
                }
            }
          
     }

    return (
        
        <section id="comparison-app">
            <div className='app-sidebar'>
                <img src={applogo} className="app-logo" alt="ShredMetrix"/>

                <div className="filter-container">
                    <Searchbar />
                    <ProductFilter />
                </div>
                <div className="product-listing">

                {/* product card start*/}

                {
                    copyJSON.map(product => {
                        return (
                            <Productcard
                    productimg={product["img"]} 
                    title={product["Title"]} 
                    type={product["type"]}
                    stars={product["stars"]}
                    price={product["Price"]}
                    added={product["added"]}
                    class={activeproduct}
                    key = {product["id"]}
                    id = {product["id"]}
                    productadded = {productAdded}
                    /> 
                        )
                    })
                }

                    
                   

                {/* product card end*/}

                </div>
            </div>

            <div className='canvas-area'>

                <canvas 
                ref={canvas}
                width={400}
                height={256 + 80}
                className="cityof-dream"
                />
           </div>
        </section>
    )
}

export default Comparison;