

// component import
import React , { useState, useEffect,useRef} from 'react'
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import Productcard from '../component/productcard'
import Toolbar from '../component/toolbar'
import Header from './header'
import Completegraph from '../component/completegraph'
import Productgraphics from '../component/productgraphics'
import Productgraphics2 from '../component/productgraphics_text'
import Loading from '../component/loading'

// images import
import placeholder_graphics from '../assest/placeholder-box.svg'
import arrowline from '../assest/arrow-line.svg'
import expandbtn from '../assest/expand-arrow.svg'



// Json import
import  {Product} from '../JSON/products'
import productsGraphicsJSON from '../JSON/productGraphics'


const Comparison = () => {

    const [copyJSON , changecopy]  = useState([])
    const [loading] = useState(true)
    const [activeproduct] = useState([])
    const [activeGraphics] = useState([])
    const [activebars , setActivebar] = useState([])
    const [activebars2 , setActivebar2] = useState([])



    const [colorSets] = useState(["#A5AEC6","#7479EC" , "#47D5D5" , "#19A0E3"])
    const [canvasHeight, setCanvasHeight] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(null)

    // toggle states
    const [collapsible , setcollapsible] = useState(false)
    const [alignBottom , setalignBottom] = useState(false)
    const [graphactive , setgraphactive] = useState(false)
    const [lineview , setlineview] = useState(false)
    const [sidebarshow,setsidebarshow] = useState(false)


    const [products,setProducts] = useState([])
    const [selectedProducts,setSelectedProducts] = useState([])

    // graphs base 

    const sizebase = 175;
    const EffectiveEdgebase = 1200;
    const TipWidthbase = 350;
    const WaistWidthbase = 300;

    const taperbase = 12;
    const Sidecutradiusbase = 8.0;
    const StanceSetbackbase = 64;


    const canvas = useRef(null)
    let anotherCopy = [];
    let tempRight = []
  

    useEffect(() => {
        
        Product.getProduct().then((products,err)=>{
            if(!err){

                let exampleCopy = [...products];
                for(let i = 0; i < exampleCopy.length; i++)
                {
                    exampleCopy[i]["added"] = false
                }

                anotherCopy = [...products];

                console.log(anotherCopy)


                setProducts(exampleCopy)
                setCanvasHeight(canvas.current.offsetHeight)
                setCanvasWidth(canvas.current.offsetWidth)
                changecopy(exampleCopy)
            }
        })
        //

    }, [])

    useEffect(() => {
        if(graphactive)
        {
            window.scrollTo(0, 200)
        }
        else
        {
            window.scrollTo(0, 0)
        }
    },[graphactive])

    const productAdded = (key) => {

           for(let i = 0; i < products.length; i++)
            {
              
                if(products[i].id === key)
                {
                    if(products[i].added === true)
                    {
                        
                        const index = activeproduct.indexOf(products[i].id)

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
                        products[i].added = false
                    }
                   
              
                    else
                    {
                        if(activeproduct.length < 4)
                        {
                        activeproduct.push(products[i].id)


                        for(let i = 0; i < products.length; i++)
                        {
                            if(products[i]["ref"] === key)
                            {
                                activeGraphics.push(products[i])
                            }
                        }

                            products[i].added = true
                        }
                        else
                        {
                            alert("Can't compare more than 4 products at a time")
                        }        
                    }
                    changecopy(products)
                }
            }
            
            barUpdate(activeGraphics)
          
     }


     const barUpdate = (graphics) => {
            let newOne = [];
            let newOne2 = []; 
            for (let i = 0; i < graphics.length; i++)
                {
                   
                        let elements = [ { amount : graphics[i].size , precentage : Math.floor(graphics[i].size / sizebase * 100)}  , 
                        { amount : graphics[i]["taper"] , precentage : Math.floor(graphics[i]["taper"] / taperbase * 100)}, 
                        { amount : graphics[i].TipWidth , precentage : Math.floor(graphics[i].TipWidth / TipWidthbase * 100)},
                        { amount : graphics[i].WaistWidth , precentage : Math.floor(graphics[i].WaistWidth / WaistWidthbase * 100)}
                        ];

                        let elements2 =  
                            [
                               { amount : graphics[i]["size"] , precentage : Math.floor(graphics[i]["size"] / sizebase * 100) }  , 
                               { amount : graphics[i]["taper"] , precentage : Math.floor(graphics[i]["taper"] / taperbase * 100)}, 
                               { amount : graphics[i]["Sidecut radius"] , precentage : Math.floor(graphics[i]["Sidecut radius"] / Sidecutradiusbase * 100) },
                               { amount : graphics[i]["Stance Setback"] , precentage : Math.floor(graphics[i]["Stance Setback"] / StanceSetbackbase * 100) }
                            ]

                        newOne.push(elements)
                        newOne2.push(elements2)
                    
                
                }
            
                setActivebar(newOne)
                setActivebar2(newOne2)
            
    }

     const Graphicsrender =  activeGraphics.map((graphics , i) => {
        return (
            <Productgraphics 
            color={colorSets[i]} 
             url={graphics["outline"]}
             url2={graphics["line"]}
             lineview={lineview} 
             key={graphics.id}
             title={graphics.Title}
             size={graphics.size}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth}

             />
        )
    })

    const graphicsoutline = activeGraphics.map((graphics , i) => {
        return (
            <Productgraphics2 
            color={colorSets[i]} 
             key={graphics.id}
             title={graphics.Title}
             size={graphics.size}
            //  graph={graphics.graph}
             graph=  {
            [
               { amount : graphics.size , precentage : Math.floor(graphics.size / sizebase * 100) , name : "size"}  , 
               { amount : graphics["taper"] , precentage : Math.floor(graphics["taper"] / taperbase * 100) , name : "taper"},
               { amount : graphics.TipWidth , precentage : Math.floor(graphics.TipWidth / TipWidthbase * 100) , name : "TipWidthbase"},
               { amount : graphics.WaistWidth , precentage : Math.floor(graphics.WaistWidth / WaistWidthbase * 100) , name : "WaistWidth"}
            ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth}
           
             />    
        )
    })


    const graphicsprofile = activeGraphics.map((graphics , i) => {
        return (
            <Productgraphics2 
            color={colorSets[i]} 
             key={graphics.id}
             title={graphics.Title}
             size={graphics.size}
            //  graph={graphics.graph}
            graph =  {
                [
                   { amount : graphics["size"] , precentage : Math.floor(graphics["size"] / sizebase * 100) , name : "size"}  , 
                   { amount : graphics["taper"] , precentage : Math.floor(graphics["taper"] / taperbase * 100) , name : "taper"}, 
                   { amount : graphics["Sidecut radius"] , precentage : Math.floor(graphics["Sidecut radius"] / Sidecutradiusbase * 100) , name : "Sidecutradius"},
                   { amount : graphics["Stance Setback"] , precentage : Math.floor(graphics["Stance Setback"] / StanceSetbackbase * 100) , name : "StanceSetback"}
                ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth}
           
             />    
        )
    })


    





    const placeholder = <img className="image-center" src={placeholder_graphics} alt="placeholder"/>

    return (
        <React.Fragment>

            <Loading active={loading}/>
        
        <section id="comparison-app" data-callpased={sidebarshow ? true : false}>
            <div className='app-sidebar'>
                <img src={expandbtn} className="expand-btn" alt="expand-btn" onClick={() => setsidebarshow(!sidebarshow)}/>    
                <Header page="compare"/>
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
                    <Toolbar 
                    collapsd={() => !collapsible ? setcollapsible(true) : setcollapsible(false)}
                    base={() => !alignBottom ? setalignBottom(true) : setalignBottom(false)}
                    graphfun={() => !graphactive ? setgraphactive(true) : setgraphactive(false)}
                    callapsible={collapsible}
                    alignBottom={alignBottom}
                    graphactive={graphactive}

                    />
                <div className="canvas-header">
                    <h1>ALL SELECTED PRODUCTS</h1>
                    <div className="outline-profile-switch">
                        <button className="switch-button button" data-active={!lineview} onClick={()=> setlineview(false)}>OUTLINE</button>
                        <img src={arrowline} alt="arrow-line"/>    
                        <button className="switch-button button" data-active={lineview} onClick={ ()=> setlineview(true)}>PROFILE</button>
                    </div>
                </div>
                <div className="canvas-content"
                 data-lineview={lineview}

                        
data-callpased={collapsible ? "true" : "false"} data-alignbottom={alignBottom ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? Graphicsrender : placeholder
                        }   
                </div>
                
                        
                <div className="canvas-text" data-active={!lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? graphicsoutline : null
                        }   
                </div>

                <div className="canvas-text" data-active={lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? graphicsprofile : null
                        }   
                </div>

                

                <Completegraph activestatus={!lineview} callpaseds={collapsible ? "true" : "false"} graph={graphactive ? "true" : "false"}  activeBars={activebars} colorSets={colorSets}/>

                <Completegraph activestatus={lineview} callpaseds={collapsible ? "true" : "false"} graph={graphactive ? "true" : "false"} activeBars={activebars2} colorSets={colorSets}/>
               
                {/* <Productgraphics color="red"  url={productsGraphicsJSON[0]["img"]}/> */}
    
           </div>
        </section>
        </React.Fragment>
    )
}

export default Comparison;