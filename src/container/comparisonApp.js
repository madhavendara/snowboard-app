

// component import
import React , { useState, useEffect,useRef} from 'react'
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import Productcard from '../component/productcard'
import Toolbar from '../component/toolbar'
import NavbaLinkbar from '../component/nav_linkbar'
import Completegraph from '../component/completegraph'
import Productgraphics from '../component/productgraphics'
import Productgraphics2 from '../component/productgraphics_text'
import Loading from '../component/loading'

// function import 
import PositionCalculator from '../functions/positionCalculator'
import PositionCalculator2 from '../functions/positionCalculator2'

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
    const [filterJSON , changefilter] = useState([])
    const [loading] = useState(true)
    const [activeproduct] = useState([])
    const [activeGraphics] = useState([])
    const [activebars , setActivebar] = useState([])
    const [activebars2 , setActivebar2] = useState([])
    const [reset , setReset] = useState(false)
    const [search, setSearch] = useState("");
    const [loadingStatus , setLoadingStatus] = useState(true)
    const [offset , setOffset] = useState(null)
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
        end: 80
    })

    const [lengthRange, setlengthRange] = useState({
        start: 140,
        end: 180
    })
    const [RockerType , SetRockerType] = useState([])
    const [widthType , SetwidthType] = useState([])
    const [walkthrough ,Setwalkthrough] = useState(0)



    const [navclass , setNavclass] = useState("hidenav")

    
    const openNav = () => {
        setNavclass('shownav')
    }

    const closeNav = () => {
        setNavclass('hidenav')
    }
    

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

    const RockerTypeClear = () => {
        SetRockerType([])
    }


    const setsOffset = () => {
        copyJSON.find((obj,i) => i < 1 ? setOffset(obj.offset) : null)
        console.log(offset)
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

        console.log("this is the way")
    }

    const WidthTypeClear = () => {
        SetwidthType([])
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
    const [zoomMode,setZoomMode] = useState(false)
    const [sidebarSize , setsidebarSize] = useState()


    const [products,setProducts] = useState([])


    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component

    const handleSearchChange = ({ target }) => {
        setSearch(target.value);
    };

    
    useEffect(() => {
        if(walkthrough === 7)
        {
            setTimeout(function(){
                setlineview(false)
                setalignBottom(false)
                setcollapsible(false)
                setgraphactive(false)
                
                Setwalkthrough(null)
            },2000)
        }
    },[walkthrough])


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


    const outlineUnit = <div className="unit-text">
    <div className="unit-row">
        <h4>Size</h4>
    </div>  
    <div className="unit-row">
        <h4>Taper</h4>
    </div>
    <div className="unit-row">
        <h4>Tip</h4>
    </div> 
    <div className="unit-row">
        <h4>Waist</h4>
    </div>   
</div> 

const profileUnit = <div className="unit-text">
    <div className="unit-row">
        <h4>Size</h4>
    </div>  
    <div className="unit-row">
        <h4>Taper</h4>
    </div>
    <div className="unit-row">
        <h4>Sidecut</h4>
    </div> 
    <div className="unit-row">
        <h4>Stance</h4>
    </div>   
</div> 

  

    useEffect(() => {
        
        Product.getProduct(search,priceRange,RockerType,widthType,setbackRange,lengthRange).then((products,err)=>{
            if(!err){

                let exampleCopy = [...products];
                for(let i = 0; i < exampleCopy.length; i++)
                {
                    exampleCopy[i]["added"] = false
                }
// eslint-disable-next-line
                anotherCopy = [...products];

                setProducts(exampleCopy)
                changecopy(exampleCopy)

                console.log(products)
                setLoadingStatus(false)
            }
        })
        //

        console.log(search)
        setCanvasHeight(window.innerHeight)
        setCanvasWidth(window.innerWidth)
    }, [search,priceRange,RockerType,widthType,setbackRange,lengthRange])

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
        let size = window.innerWidth * 30 /100

        size < 444 ? setsidebarSize(size) : setsidebarSize(444)
       
        
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
        let new_left
        let new_top
        if(!sidebarshow)
        {
            new_left = ev.pageX - (sidebarSize + window.innerWidth * 0.109809663)
            new_top = ev.pageY - window.innerHeight * 0.3953125
        }

        else
        {
            new_left = ev.pageX - (window.innerWidth * 0.209809663)
            new_top = ev.pageY - window.innerHeight * 0.3953125
        }
        

        setMousePosition({left: new_left, top: new_top});
     

     }

     
     const zoomClick = () => {

        if(!zoomMode) return false
         
         if(walkthrough > 0)
         return false
        if(window.innerWidth < 1500)
        {
            if(!sidebarshow)
            {
                if(MousePosition.left > windowWidth * 1/100 && MousePosition.left < windowWidth * 50/100)
                {
                    if(MousePosition.top > -(windowHeight * 40/100) && MousePosition.top < windowHeight * 70/100)
                    {
                        setZoom(!zoom)
                        if(reset)
                        {
                            setgraphactive(true)
                            setReset(false)
                        }

                        if(!reset)
                        {
                           if(graphactive)
                           {
                               console.log("maki")
                               setgraphactive(false)
                               setReset(true)
                           }
                        }
                    }
                    
                }
            }

            else
            {
                // setZoom(!zoom)
                if(MousePosition.left > -windowWidth * 10/100 && MousePosition.left < windowWidth * 60/100)
                {
                    if(MousePosition.top > windowHeight * 1/100 && MousePosition.top < windowHeight * 70/100)
                    {
                        setZoom(!zoom)
                        if(reset)
                        {
                            setgraphactive(true)
                            setReset(false)
                        }

                        if(!reset)
                        {
                           if(graphactive)
                           {
                               console.log("maki")
                               setgraphactive(false)
                               setReset(true)
                           }
                        }
                    }
                    
                }
            }
        }

        else
        {
            
            if(!sidebarshow)
            {
                if(MousePosition.left > -windowWidth * 10/100 && MousePosition.left < windowWidth * 60/100)
                {
                    if(MousePosition.top > -(windowHeight * 40/100) && MousePosition.top < windowHeight * 70/100)
                    {
                        setZoom(!zoom)
                        if(reset)
                        {
                            setgraphactive(true)
                            setReset(false)
                        }

                        if(!reset)
                        {
                           if(graphactive)
                           {
                               
                               setgraphactive(false)
                               setReset(true)
                           }
                        }
                        console.log("kutiya")
    
                    }

                   
                    
                }

                
            }

            else
            {
                setZoom(!zoom)
                if(reset)
                {
                    setgraphactive(true)
                    setReset(false)
                }

                if(!reset)
                {
                   if(graphactive)
                   {
                       console.log("maki")
                       setgraphactive(false)
                       setReset(true)
                   }
                }
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
                   
                        let elements = [ { amount : graphics[i].size , precentage : Math.floor(graphics[i].size / sizebase * 100) , unit : 'cm'}  , 
                        { amount : graphics[i]["taper"] , precentage : Math.floor(graphics[i]["taper"] / taperbase * 100) , unit : 'mm'}, 
                        { amount : graphics[i].TipWidth , precentage : Math.floor(graphics[i].TipWidth / TipWidthbase * 100) , unit : 'mm'},
                        { amount : graphics[i].WaistWidth , precentage : Math.floor(graphics[i].WaistWidth / WaistWidthbase * 100) , unit : 'mm'}
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
             title={graphics.Model}
             size={graphics.size}
             tail={graphics.tail}
             tip={graphics.tip}
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
             title={graphics.Model}
             size={graphics.size}
             tail={graphics.tail}
             tip={graphics.tip}
            //  graph={graphics.graph}
             graph=  {
            [
               { amount : graphics.size , precentage : Math.floor(graphics.size / sizebase * 100) , name : "cm"}  , 
               { amount : graphics["taper"] , precentage : Math.floor(graphics["taper"] / taperbase * 100) , name : "mm"},
               { amount : graphics.TipWidth , precentage : Math.floor(graphics.TipWidth / TipWidthbase * 100) , name : "mm"},
               { amount : graphics.WaistWidth , precentage : Math.floor(graphics.WaistWidth / WaistWidthbase * 100) , name : "mm"}
            ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth - (canvasWidth * 30/100 < 444 ? canvasWidth * 30/100 : 444)}
           
             />    
        )
    })


    const graphicsprofile = activeGraphics.map((graphics , i) => {
        return (
            <Productgraphics2 
            color={colorSets[i]} 
             key={graphics.id}
             title={graphics.Model}
             size={graphics.size}
             tail={graphics.tail}
             tip={graphics.tip}
            //  graph={graphics.graph}
            graph =  {
                [
                   { amount : graphics["size"] , precentage : Math.floor(graphics["size"] / sizebase * 100) , name : "cm"}  , 
                   { amount : graphics["taper"] , precentage : Math.floor(graphics["taper"] / taperbase * 100) , name : "mm"}, 
                   { amount : graphics["Sidecut radius"] , precentage : Math.floor(graphics["Sidecut radius"] / Sidecutradiusbase * 100) , name : "m"},
                   { amount : graphics["Stance Setback"] , precentage : Math.floor(graphics["Stance Setback"] / StanceSetbackbase * 100) , name : "mm"}
                ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth - (canvasWidth * 30/100 < 444 ? canvasWidth * 30/100 : 444)}
           
             />    
        )
    })


    



    

    const placeholder = <img className="image-center" src={placeholder_graphics} alt="placeholder"/>

    return (
        <React.Fragment>
             <NavbaLinkbar classlist={navclass} closenav={closeNav}/>
             
            <div className={walkthrough === 0 ? "walkthrough-content" : "walkthrough-none"}>
                <div className="walkthrough-box">
                    <h1>New to ShredMetrix?</h1>
                    <p>Click here for a quick walkthrough!</p>
                    <button className="start-link" onClick={() => Setwalkthrough(1)} >Start</button>
                    <button className="close-link" onClick={() => Setwalkthrough(null)}>Skip</button>
                </div>    
            </div>    
              
        <Loading active={loading}/>
        <section id="comparison-app" data-callpased={sidebarshow ? true : false}>
            <div className='app-sidebar'>
                <img src={expandbtn} className="expand-btn" alt="expand-btn" onClick={() => setsidebarshow(!sidebarshow)}/>    
                {/* <Header page="compare"/> */}
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
                    RockerType={RockerType}
                    RockerTypeClear={RockerTypeClear}
                    widthFunction={widthFunction}
                    widthType={widthType}
                    WidthTypeClear={WidthTypeClear}
                    walkfunction={() => Setwalkthrough(2)}
                    walkthrough={walkthrough}
                    amount={copyJSON.length}
                    />
                </div>
                <div className={!walkthrough ? "product-listing product-listing-active" : "product-listing"}>

                            {
                                !loadingStatus && !copyJSON.length ? <h5 className="name-products">no products to show</h5> : null

                            }
                {/* product card start*/}

                {
                    !loadingStatus  ?
                    copyJSON.map((product , i) => {
                        return (
                            
                            <Productcard
                                productimg={product["img"]} 
                                setback={product["Stance Setback"]}
                                title={product["Model"]}
                                Brand={product["Brand"]} 
                                url={product["url"]}
                                type={product["type"]}
                                stars={product["stars"]}
                                price={product["Price"]}
                                size={product["size"]}
                                added={product["added"]}
                                class={activeproduct}
                                key = {product["id"]}
                                id = {product["id"]}
                                offset={products["offset"]}
                                i={i}
                                walkfunction={() => Setwalkthrough(3)}
                                walkthrough={walkthrough}
                                productBoxactive={popupOpen === product["id"] ? true : false}
                                productadded = {productAdded}
                                popupOne = {() => setpopOpen(product["id"]) }
                                closePopup = {() => setpopOpen("") }
                                bookmarkadd = {bookmarkAdded}

                    />
                        )

                       
                    })

                    :  <div className="loading-container">
                    <img src={loader} alt="loading.." className="loading-image"/>
                    <h5>Loading...</h5>
                   </div> 
                      
                }

         
                   <button onClick={setsOffset}>Load More</button>

                {/* product card end*/}

                </div>
            </div>

            <div 
            className={!zoom  ? 'canvas-area' : 'canvas-area canvas-area-zoom'} 
            onMouseMove={(ev) => handleMouseMove(ev)} 
            onClick={zoomClick}
            data-zoom={zoomMode}
            style={zoom ? {right : PositionCalculator(MousePosition.left , sidebarshow , sidebarSize, windowWidth , collapsible) , marginTop : -PositionCalculator2(MousePosition.top , windowHeight,collapsible) } : null}
            >

                    <Toolbar 
                    collapsd={() => !collapsible ? setcollapsible(true) : setcollapsible(false)}
                    base={() => !alignBottom ? setalignBottom(true) : setalignBottom(false)}
                    graphfun={() => !graphactive ? setgraphactive(true) : setgraphactive(false)}
                    lineviewfun ={() => !lineview ? setlineview(true) : setlineview(false)}
                    callapsible={collapsible}
                    alignBottom={alignBottom}
                    graphactive={graphactive}
                    lineview={lineview}
                    zoomMode={zoomMode}
                    setZoom={() => setZoomMode(!zoomMode)}
                    tabline={() => Setwalkthrough(4)}
                    tabOne={() => Setwalkthrough(5)}
                    tabTwo={() => Setwalkthrough(6)}
                    tabthree={() => Setwalkthrough(7)}
                    walkthrough={walkthrough}
                    openNav={openNav}
                    />
                {/* <div className="canvas-header">
                    <div className="outline-profile-switch">
                        <button className="switch-button button" data-active={!lineview} onClick={()=> setlineview(false)}>OUTLINE</button>
                        <img src={arrowline} alt="arrow-line"/>    
                        <button className="switch-button button" data-active={lineview} onClick={ ()=> setlineview(true)}>
                            PROFILE
                        {
                            walkthrough === 3 ? <>
                            <div className="blue-box-1">
                            <ol className="list-blue-box-1">    
                                <li>Switch from “Outline View” to “Profile View”</li>
                            </ol>
                            <button className="gotit-btn" onClick={() => Setwalkthrough(4)}>Got it</button>  
                            </div>    
                            <div className="backdrop">
                            </div>  
                            </> : null
                        }    
                        </button>
                    </div>
                </div> */}
                <div className={!graphactive ? "canvas-content" :"canvas-content canvas-graph" }
                 data-lineview={lineview}

                        
data-callpased={collapsible ? "true" : "false"} data-alignbottom={alignBottom ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length && graphactive ? outlineUnit : null
                        } 
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? Graphicsrender : null
                        }   
                </div>
                
                        
                <div className="canvas-text" data-active={!lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                       
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   outlineUnit : null
                        } 
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   graphicsoutline : null
                        }   
                </div>
                
                <div className="canvas-text" data-active={lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   profileUnit : null
                        } 
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? graphicsprofile : null
                        }   
                </div>

                

                <Completegraph 
                activestatus={!lineview} 
                callpaseds={collapsible ? "true" : "false"} 
                graph={graphactive ? "true" : "false"}  
                activeBars={activebars} 
                colorSets={colorSets}
                names={outlineUnit}
                />

                <Completegraph 
                activestatus={lineview} 
                callpaseds={collapsible ? "true" : "false"} 
                graph={graphactive ? "true" : "false"} 
                activeBars={activebars2} colorSets={colorSets}
                names={profileUnit}
                />
               
                {/* <Productgraphics color="red"  url={productsGraphicsJSON[0]["img"]}/> */}
    
           </div>
        </section>
        </React.Fragment>
    )
}

export default Comparison;