

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
import zoomImg from '../assest/zoom.svg'

import loader from '../assest/Rhombus.gif'



// Json import
import  {Product} from '../JSON/products'

import { useSnackbar } from 'react-simple-snackbar';


const Comparison = () => {

    const [copyJSON , changecopy]  = useState([])
    const [loading] = useState(true)
    const [activeproduct] = useState([])
    const [activeGraphics] = useState([])
    const [activebars , setActivebar] = useState([])
    const [activebars2 , setActivebar2] = useState([])
    const [search, setSearch] = useState("");


    const [colorSets] = useState(["#A5AEC6","#7479EC" , "#47D5D5" , "#19A0E3"])
    const [canvasHeight, setCanvasHeight] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(null)
    const [windowWidth , setWindowWidth] = useState(null)
    const [windowHeight , setWindowHeight] = useState(null)
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    const [priceRange, setpriceRange] = useState({
        start: 500,
        end: 600
    })

    const [setbackRange, setsetbackRange] = useState({
        start: 15,
        end: 70
    })

    const [lengthRange, setlengthRange] = useState({
        start: 140,
        end: 200
    })

    const [RockerType , SetRockerType] = useState([])

    const [widthType , SetwidthType] = useState([])




    

    const RockerTypeFunction = (ev) => {

        const letRocker = [...RockerType]
        if(letRocker.includes(ev))
        {
            const index = letRocker.indexOf(ev);
            if (index > -1) {
                letRocker.splice(index, 1);
                SetRockerType(letRocker)
            }
        }

        else
        {
            letRocker.push(ev)
            SetRockerType(letRocker)
        }
        
    }

    const widthFunction = (ev) => {

        const letWidth = [...widthType]
        if(letWidth.includes(ev))
        {
            const index = letWidth.indexOf(ev);
            if (index > -1) {
                letWidth.splice(index, 1);
                SetwidthType(letWidth)
            }
        }

        else
        {
            letWidth.push(ev)
            SetwidthType(letWidth)
        }

    }

    const filterApply = (data) => {
        if(data["Price"] > priceRange.start && data["Price"] < priceRange.end )
        {
            
            if(data["size"] > lengthRange.start && data["size"] < lengthRange.end)
            {
                
                if(data["Stance Setback"] > setbackRange.start && data["Stance Setback"] < setbackRange.end)
                {
                    if(RockerType.length !== 0)
                    {   if(RockerType.indexOf(data["Ability Level"]) !== -1)
                        {
                            if(widthType.length !== 0)
                            {
                                if(widthType.indexOf(data["type"]) !== -1)
                                {
                                    return true
                                }

                                else
                                {
                                    return false
                                }
                            }

                            else
                            {
                                return true
                            }
                        }

                        else
                        {
                            return false
                        }
                        
                    }

                    else
                    {
                        if(widthType.length !== 0)
                        {
                            if(widthType.indexOf(data["type"]) !== -1)
                            {
                                return true
                            }

                            else
                            {
                                return false
                            }
                        }

                        else
                        {
                            return true
                        }
                    }
                }
                else
                {
                    return false
                }
            }
            else
            {
                return false
            }
        }

        else
        {
            return false
        }
    }

    

    const lengthFunction = (start,end) => {
        setlengthRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

    const priceFunction = (start,end) => {
        setpriceRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

    const setbackFunction = (start,end) => {
        setsetbackRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

   


    

    // toggle states
    const [collapsible , setcollapsible] = useState(false)
    const [alignBottom , setalignBottom] = useState(false)
    const [graphactive , setgraphactive] = useState(false)
    const [lineview , setlineview] = useState(false)
    const [sidebarshow,setsidebarshow] = useState(false)
    const [popupOpen , setpopOpen] = useState([])
    const [zoom , setZoom] = useState(false)


    const [products,setProducts] = useState([])


    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component

    const handleSearchChange = ({ target }) => {
        setSearch(target.value);
    };
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
  

    useEffect(() => {
        
        Product.getProduct(search).then((products,err)=>{
            if(!err){

                let exampleCopy = [...products];
                for(let i = 0; i < exampleCopy.length; i++)
                {
                    exampleCopy[i]["added"] = false
                }
// eslint-disable-next-line
                anotherCopy = [...products];


                console.log(anotherCopy)


                setProducts(exampleCopy)
                setCanvasHeight(canvas.current.offsetHeight)
                setCanvasWidth(canvas.current.offsetWidth)
                changecopy(exampleCopy)
            }
        })
        //

        console.log(search)

    }, [search])

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

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    },[])




    // save data in bookmark
    const bookmarkAdded = (key) => {
        Product.addProduct(key).then((res,err)=>{
            if(!err){
                openSnackbar(res.msg)
            }
        })
    }
    function handleMouseMove(ev) { 
        setMousePosition({left: ev.pageX, top: ev.pageY});
     }

     const zoomClick = () => {

        if(MousePosition.left > windowWidth * 30/100 && MousePosition.left < windowWidth * 90/100)
        {
            if(MousePosition.top > windowHeight * 30/100 && MousePosition.top < windowWidth * 90/100)
            {
                setZoom(!zoom)
            }
            
        }
            
     }

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
                    <Searchbar  onChange={handleSearchChange} value={search} />
                    <ProductFilter 
                    priceFunction={priceFunction} 
                    priceRange={priceRange} 
                    setbackRange={setbackRange}
                    setbackFunction={setbackFunction}
                    lengthFunction={lengthFunction}
                    lengthRange={lengthRange}
                    RockerTypeFunction={RockerTypeFunction}
                    widthFunction={widthFunction}
                    />
                </div>
                <div className="product-listing">

                {/* product card start*/}

                {
                    copyJSON.length ? 
                    copyJSON.map(product => {
                        return (
                            filterApply(product) ? 
                            <Productcard
                                productimg={product["img"]} 
                                title={product["Title"]} 
                                url={product["url"]}
                                type={product["type"]}
                                stars={product["stars"]}
                                price={product["Price"]}
                                size={product["size"]}
                                added={product["added"]}
                                class={activeproduct}
                                key = {product["id"]}
                                id = {product["id"]}
                                productBoxactive={popupOpen === product["id"] ? true : false}
                                productadded = {productAdded}
                                popupOne = {() => setpopOpen(product["id"]) }
                                closePopup = {() => setpopOpen("") }
                                bookmarkadd = {bookmarkAdded}

                    />  : null
                        )
                    })

                    : <div className="loading-container">
                    <img src={loader} alt="loading.." className="loading-image"/>
                    <h5>Loading...</h5>
                   </div> 
                       
                }

                    
                   

                {/* product card end*/}

                </div>
            </div>

            <div 
            className={!zoom ? 'canvas-area' : 'canvas-area canvas-area-zoom'} 
            onMouseMove={(ev) => handleMouseMove(ev)} 
            onClick={zoomClick}
            style={zoom ? {right : (-(windowWidth * 1/2) + MousePosition.left * 80/100) , marginTop : -(MousePosition.top * 60/100) } : null}
            >

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