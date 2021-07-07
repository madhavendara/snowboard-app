// component import
import React , { useState, useEffect,useRef} from 'react'
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import Productcard from '../component/productcard'
import Toolbar from '../component/toolbar'

// images import
import Productgraphics from '../component/productgraphics'
import applogo from '../assest/applogo.svg'
import placeholder_graphics from '../assest/placeholder-box.svg'
import arrowline from '../assest/arrow-line.svg'


// Json import
import ProductJSON from '../JSON/products'
import productsGraphicsJSON from '../JSON/productGraphics'


const Comparison = () => {

    const [copyJSON , changecopy]  = useState([])
    const [activeproduct] = useState([])
    const [activeGraphics] = useState([]);
    const [colorSets] = useState(["#74A1DC","#C4CADA" , "#A3AFD3" , "#2E69E2"]);
    const [canvasHeight, setCanvasWidth] = useState(null);
    const canvas = useRef(null)
    let anotherCopy = [...ProductJSON];


    useEffect(() => {
        let exampleCopy = [...ProductJSON];

        for(let i = 0; i < exampleCopy.length; i++)
        {
            exampleCopy[i]["added"] = false
        }

        setCanvasWidth(canvas.current.offsetHeight)
        changecopy(exampleCopy)
    }, [])

    const productAdded = (key) => {

        
            for(let i = 0; i < 8; i++)
            {
              
                if(anotherCopy[i].id === key)
                {
                    if(anotherCopy[i].added === true)
                    {
                        
                        const index = activeproduct.indexOf(anotherCopy[i].id)

                        for(let i = 0; i < activeGraphics.length; i++)
                        {
                            if(activeGraphics[i]["ref"] === key)
                            {
                                activeGraphics.splice(i,1);
                            }
                        }

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


                        for(let i = 0; i < productsGraphicsJSON.length; i++)
                        {
                            if(productsGraphicsJSON[i]["ref"] === key)
                            {
                                activeGraphics.push(productsGraphicsJSON[i])
                            }
                        }        

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

     const Graphicsrender =  activeGraphics.map((graphics , i) => {
        return (
            <Productgraphics 
            color={colorSets[i]} 
             url={graphics["img"]} 
             key={graphics.id}
             title={graphics.Title}
             size={graphics.size}
             canvasHeight={canvasHeight}
             />
        )
    })

    const placeholder = <img className="image-center" src={placeholder_graphics} alt="placeholder"/>

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
                    <Toolbar/>
                <div className="canvas-header">
                    <h1>ALL SELECTED PRODUCTS</h1>
                    <div className="outline-profile-switch">
                        <button className="switch-button switch-active">OUTLINE</button>
                        <img src={arrowline} alt="arrow-line"/>    
                        <button className="switch-button">PROFILE</button>
                    </div>
                </div>
                <div className="canvas-content" ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? Graphicsrender : placeholder
                        }
                </div>
               
                {/* <Productgraphics color="red"  url={productsGraphicsJSON[0]["img"]}/> */}
    
           </div>
        </section>
    )
}

export default Comparison;