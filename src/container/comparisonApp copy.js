// component import
import React , { useState, useEffect,useRef} from 'react'
import Draggable from "react-draggable";
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import ProductFilter2 from '../component/filter2'
import Productcard from '../component/productcard'
import Toolbar from '../component/toolbar'
import NavbaLinkbar from '../component/nav_linkbar'
import Completegraph from '../component/completegraph'
import Productgraphics from '../component/productgraphics'
import Productgraphics2 from '../component/productgraphics_text'
import Loading from '../component/loading'

// popup model
import LoginModel from '../component/loginModel'
import BookmarkModel from '../component/bookmarkModel'

// function import 
import PositionCalculator from '../functions/positionCalculator'
import PositionCalculator2 from '../functions/positionCalculator2'

// images import
import placeholder_graphics from '../assest/placeholder-box.svg'
import arrowline from '../assest/arrow-line.svg'
import expandbtn from '../assest/expand-arrow.svg'
import zoomImg from '../assest/zoom.svg'
import logo_img from '../assest/logo-white.svg'
import loader from '../assest/Rhombus.gif'
import skis from '../assest/skis.png'
import chev from '../assest/chevron-down.svg'
import snowboard from '../assest/snowboard.png'




// Json import
import  {Product} from '../JSON/products'
import  {Product2} from '../JSON/products_2'

import { useSnackbar } from 'react-simple-snackbar';
import bookmark_active from "../assest/bookmark-active.svg";


const Comparison = () => {

    const [copyJSON , changecopy]  = useState([])
    const [filterJSON , changefilter] = useState([])
    const [bookmark , setBookmark] = useState([])
    const [loading] = useState(true)
    const [activeproduct , setActiveproduct] = useState([])
    const [activeGraphics,setActiveGraphics] = useState([])
    const [activebars , setActivebar] = useState([])
    const [activebars2 , setActivebar2] = useState([])
    const [reset , setReset] = useState(false)
    const [search, setSearch] = useState("");
    const [loadingStatus , setLoadingStatus] = useState(true)
    const [loadingStatus1 , setLoadingStatus1] = useState(true)
    const [offset , setOffset] = useState("")
    const [noproducts , setnoproducts] = useState(false)
    const [colorSets] = useState(["#949FBD","#7479EC" , "#3BCACA" , "#19A0E3"])
    const [canvasHeight, setCanvasHeight] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(null)
    const [windowWidth , setWindowWidth] = useState(null)
    const [windowHeight , setWindowHeight] = useState(null)
    const [switchoption , setswitchoption] = useState("Skis");
    
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    const [priceRange, setpriceRange] = useState({
        start: 200,
        end: 1000
    })

    const [setbackRange, setsetbackRange] = useState({
        start: 15,
        end: 80
    })

    const [lengthRange, setlengthRange] = useState({
        start: 140,
        end: 200
    })
    const [RockerType , SetRockerType] = useState([])
    const [widthType , SetwidthType] = useState([])
    const [walkthrough ,Setwalkthrough] = useState(null)
    const [setbackActive , updateSetback] = useState(null);
    const [login_model , setlogin_model] = useState(false)
    const [bookmark_model , setbookmark_model] = useState(false)
    const [brandsActive, setbrand] = useState([]);

    // skis masurement

    const [Tip_width, setTip_width] = useState({
        start: 80,
        end: 200
    })

    const [Waist_width, setWaist_width] = useState({
        start: 60,
        end: 150
    })

    const [Tail_width, setTail_width] = useState({
        start:80,
        end: 160
    })

    const [ski_radius, setski_Radius] = useState([]);

    const [ski_Length, setski_Length] = useState({
        start: 80,
        end: 160
    })

    const [Longitudina, setLongitudina] = useState({
        start: 20,
        end: 40
    })

    const [Torsional, setTorsional] = useState({
        start: 20,
        end: 40
    })

    const [ski_Ability, setski_Ability] = useState([]);

    const [ski_Terrain, setski_Terrain] = useState([]);

    const [ski_Brands, setski_Brands] = useState([]);

    


    const [mobileCanvas, setmobileCanvas] = useState(false);
    const [navclass , setNavclass] = useState("hidenav")




    const RockerTypeFunction = (ev) => {

            SetRockerType(ev)
    
        setnoproducts(false)
    }

    const brandsFunction = (ev) => {
        setbrand(ev)
         setnoproducts(false)
    }

    const RockerTypeClear = () => {
        SetRockerType([])

        setnoproducts(false)
    }



    
    const openNav = () => {
        setNavclass('shownav')
    }

    const closeNav = () => {
        setNavclass('hidenav')
    }

    const mobileOption = () => {
        if(activeproduct.length >= 2 || mobileCanvas)
        {
            return <>
                {!mobileCanvas ? <button className='compare-btn' onClick={() => setmobileCanvas(!mobileCanvas)}>Compare</button> : <button className='compare-btn2' onClick={() => setmobileCanvas(!mobileCanvas)}>Back</button>}


                {mobileCanvas ? <Toolbar 
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
                      tabfour={() => Setwalkthrough(8)}
                      walkthrough_terminate={walkthrough_terminate}
                      walkfunction_null={() => Setwalkthrough(null)}
                      walkthrough={walkthrough}
                      openNav={openNav}
                      /> : null}
                    </>
                
        }
    }


    const setsOffset = () => {
        copyJSON.find((obj,i) => {
            if(i == copyJSON.length -1)
            {
                if(obj.offset)
                {
                    setOffset(obj.offset)
                }
                else
                {
                    setnoproducts(true)
                }
                
            }
        
        })
      
    }

    const widthFunction = (ev) => {
        
        SetwidthType(ev)
        setnoproducts(false)
    }

    const WidthTypeClear = () => {
        SetwidthType([])
        setnoproducts(false)
    }

 

    

    const lengthFunction = (start,end) => {
        setlengthRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })

        setnoproducts(false)
    }

    const priceFunction = (start,end) => {
        setpriceRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })
        setnoproducts(false)
    }

    const setbackFunction = (start,end) => {
        setsetbackRange({
            start : Math.floor(start),
            end : Math.floor(end)
        })

        setnoproducts(false)
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

    const handleSearchChange = (target) => {
        
        setSearch(target);
        console.log(target)
        setnoproducts(false)
    };


    const walkthrough_terminate = () => {
        setlineview(false)
                setalignBottom(false)
                setcollapsible(false)
                setgraphactive(false)
                
                Setwalkthrough(null)
    }
    
    useEffect(() => {
        if(walkthrough === 8)
        {
            setTimeout(function(){
                setlineview(false)
                setalignBottom(false)
                setcollapsible(false)
                setgraphactive(false)
                
                Setwalkthrough(null)
            },5000)
        }

        if(walkthrough === null)
        {
            setmobileCanvas(false)
        }

        if(walkthrough === 3)
        {
            if(window.innerWidth < 900)
            {
                setmobileCanvas(!mobileCanvas)
            }
        }
    },[walkthrough])


    useEffect(() => {
        if (! localStorage.noFirstVisit) {
            Setwalkthrough(0);
            
            localStorage.noFirstVisit = "1";
           }
    },[])

    
    

    // graphs base 

    const sizebase = 175;
    const EffectiveEdgebase = 1200;
    const TipWidthbase = 350;
    const WaistWidthbase = 300;

    const taperbase = 60;
    const Sidecutradiusbase = 10;
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



const outlineUnit2 = <div className="unit-text">
<div className="unit-row">
    <h4>Size (cm)</h4>
</div>  
<div className="unit-row">
    <h4>Taper (mm)</h4>
</div>
<div className="unit-row">
    <h4>Tip (mm)</h4>
</div> 
<div className="unit-row">
    <h4>Waist (mm)</h4>
</div>   
</div> 

const profileUnit2 = <div className="unit-text">
<div className="unit-row">
    <h4>Size (cm)</h4>
</div>  
<div className="unit-row">
    <h4>Taper (mm)</h4>
</div>
<div className="unit-row">
    <h4>Sidecut (mm)</h4>
</div> 
<div className="unit-row">
    <h4>Stance (mm)</h4>
</div>   
</div>



    useEffect(() => {

        Product.getBookmarkProduct().then((products,err)=>{
            if(!err){
                //if(products.data.length > 0){
                setBookmark(products);
                //}
            }
        })

        setLoadingStatus(true)
        Product.getProduct(search,priceRange,RockerType,widthType,setbackRange,lengthRange,setbackActive,brandsActive,switchoption).then((products,err)=>{
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

     
                setLoadingStatus(false)
            }


        })
        //

 
        setCanvasHeight(window.innerHeight)
        setCanvasWidth(window.innerWidth)

        console.log(window.innerWidth)
    }, [search,priceRange,RockerType,widthType,setbackRange,lengthRange,setbackActive,brandsActive,switchoption])



    useEffect(() => {
        setLoadingStatus1(true)
        Product2.getProduct(offset,priceRange,RockerType,widthType,setbackRange,lengthRange,setbackActive,brandsActive,switchoption).then((products,err)=>{
  
            if(!err){

                let exampleCopy = [...copyJSON,...products];
                for(let i = 0; i < exampleCopy.length; i++)
                {
                    if(!exampleCopy.includes("added"))
                    {
                        exampleCopy[i]["added"] = false
                    }
                    
                }
// eslint-disable-next-line
                anotherCopy = [...products];

                setProducts(exampleCopy)
                changecopy(exampleCopy)
                setLoadingStatus1(false)
            }
        })
        //

        setCanvasHeight(window.innerHeight)
        setCanvasWidth(window.innerWidth)
    }, [offset])

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
                if(res.msg == "You are not logged In.")
                {
                    setlogin_model(true)
                }

                if(res.success){
                   // var newBookmarkChecked = bookmark.push({'id':key});
                   //console.log(bookmark)
                   // setBookmark(bookmark)
                   setbookmark_model(true)
                    document.getElementById(key).src=bookmark_active;
                    
                }

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

        if(window.innerWidth < 900)
        {
            if(!sidebarshow)
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
               
                               setgraphactive(false)
                               setReset(true)
                           }
                        }
    
                    
      
            }

            console.log('good')
        }  
        else if(window.innerWidth > 900 && window.innerWidth < 1500)
        {
            if(!sidebarshow)
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


            }

            else
            {
                // setZoom(!zoom)


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


            }
        }

        else
        {
            
            if(!sidebarshow)
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
             
                       setgraphactive(false)
                       setReset(true)
                   }
                }
            }
        }

       
            
     }


   

     const handleEvent = (e, data) => {
        console.log('Event Type', e.type);
        console.log(e, data);
        console.log(MousePosition.top)


        // y: -30.000030517578125
        //y: 231.42852783203125
        //x: 122.85711288452148
        //x: -64.2857551574707
      }
    const productAdded = (key) => {


            for(let i = 0; i < products.length; i++)
            {
              let active = false;
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
                        if(windowWidth > 900)
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

                        else
                        {
                            if(activeproduct.length < 2)
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
                                alert("Can't compare more than 2 products at a time")
                            }  
                        }
                              
                    }
                    changecopy(products)
                    active = true
                }

            }
 

           
            
            barUpdate(activeGraphics)
          
     }

     const productAdded2 = (key) => {
        const index = activeproduct.indexOf(key)

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

        for(let i = 0; i < products.length; i++)
            {
                if(products[i].id === key)
                    {
                        products[i].added = false
                    }
            }

            barUpdate(activeGraphics)
     }





     const buttonReturn = (func) => {

        let status = false
        copyJSON.find((obj,i) => {
            if(i == copyJSON.length-1)
            {
                if(obj.offset)
                {
                    status = true
                }

            }
        })

        return status ? <a href="#bottom" onClick={func} className="load-more">Load More</a> : <p>No more products to show</p>
    }


     const barUpdate = (graphics) => {
            let newOne = [];
            let newOne2 = []; 
            for (let i = 0; i < graphics.length; i++)
                {
                    let stance_value;
                    let stance_precentage;
                    // if(graphics[i]["Stance Setback"].includes(".") && graphics[i]["Stance Setback"] <= 3.149606299212598)
                    // {
                    //     stance_value = "0"+graphics[i]["Stance Setback"]
                    //     stance_value = stance_value*25.4

                    //     console.log("ke;lka;l"+stance_value)
                    // }
                    if(graphics[i]["Stance Setback"] == 0)
                    {
                        stance_value = "Center"
                        stance_precentage = 40
      
                      
                    }
                    else if(graphics[i]["Stance Setback"] > 0 && graphics[i]["Stance Setback"] <= 3.149606299212598)
                    {
                        stance_value = Math.floor(graphics[i]["Stance Setback"]*25.4)
                        stance_precentage = Math.floor(stance_value / StanceSetbackbase * 100)

              
                    }

                    else
                    {
                        stance_value = Math.floor(graphics[i]["Stance Setback"])
                        stance_precentage = Math.floor(stance_value / StanceSetbackbase * 100)
                 
           
                    }


                    let sidecut_;

                        if(graphics[i]["Sidecut radius"].match("/"))
                        {
                            let num = graphics[i]["Sidecut radius"].indexOf("/");

                            sidecut_ = graphics[i]["Sidecut radius"].substring(0, num)
                        }

                        else
                        {
                            sidecut_ = graphics[i]["Sidecut radius"]
                        }
                  

                 
                   
                        let elements = [ { amount : graphics[i].size , precentage : Math.floor(graphics[i].size / sizebase * 100) , unit : 'cm'}  , 
                        { amount : graphics[i]["taper"] < 1 ? "0" : graphics[i]["taper"] , precentage : graphics[i]["taper"] < 1 ? 0 : Math.floor(graphics[i]["taper"] / taperbase * 100) , unit : 'mm'}, 
                        { amount : graphics[i].TipWidth , precentage : Math.floor(graphics[i].TipWidth / TipWidthbase * 100) , unit : 'mm'},
                        { amount : graphics[i].WaistWidth , precentage : Math.floor(graphics[i].WaistWidth / WaistWidthbase * 100) , unit : 'mm'}
                        ];

                        let elements2 =  
                            [
                               { amount : graphics[i]["size"] , precentage : Math.floor(graphics[i]["size"] / sizebase * 100) }  , 
                               { amount : graphics[i]["taper"] == 0 ? "0" : graphics[i]["taper"] , precentage : graphics[i]["taper"] == 0 ? 0 : Math.floor(graphics[i]["taper"] / taperbase * 100) , unit : 'mm'}, 
                               { amount : parseInt(sidecut_) , precentage : Math.floor(parseInt(sidecut_) / Sidecutradiusbase * 100) },
                               { amount : stance_value , precentage : stance_precentage , name :  graphics["Stance Setback"] <= 0 || !graphics["Stance Setback"] ? "" : "mm"}
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
             switchoption={switchoption}
             lineview={lineview} 
             key={graphics.id}
             title={graphics.Model}
             size={graphics.size}
             tail={graphics.tail}
             tip={graphics.tip}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth}
             onClick1={zoomClick}

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
             productadded = {productAdded2}
             id={graphics.id}
             switchoption={switchoption}
            //  graph={graphics.graph}
             graph=  {
            [
               { amount : graphics.size , precentage : Math.floor(graphics.size / sizebase * 100) , name : "cm"}  , 
               { amount : graphics["taper"] < 1 ? "0mm" : graphics["taper"] , precentage : graphics["taper"] < 1 ? 0 :  Math.floor(graphics["taper"] / taperbase * 100) , name : graphics["taper"] < 1 ? "" : "mm"},
               { amount : graphics.TipWidth , precentage : Math.floor(graphics.TipWidth / TipWidthbase * 100) , name : "mm"},
               { amount : graphics.WaistWidth , precentage : Math.floor(graphics.WaistWidth / WaistWidthbase * 100) , name : "mm"}
            ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth - (canvasWidth * 30/100 < 444 ? canvasWidth * 30/100 : 444)}
             onClick1={zoomClick}
           
             />    
        )
    })


    const graphicsprofile = activeGraphics.map((graphics , i) => {

        let stance_value;
        let stance_precentage;
        // if(graphics[i]["Stance Setback"].includes(".") && graphics[i]["Stance Setback"] <= 3.149606299212598)
        // {
        //     stance_value = "0"+graphics[i]["Stance Setback"]
        //     stance_value = stance_value*25.4

        //     console.log("ke;lka;l"+stance_value)
        // }
        if(graphics["Stance Setback"] == 0)
        {
            stance_value = "Center"
            stance_precentage = 40

          
        }
        else if(graphics["Stance Setback"] > 0 && graphics["Stance Setback"] <= 3.149606299212598)
        {
            stance_value =  Math.floor(graphics["Stance Setback"]*25.4)
            stance_precentage = Math.floor(stance_value / StanceSetbackbase * 100)

 
        }

        else
        {
            stance_value = Math.floor(graphics["Stance Setback"])
            stance_precentage = Math.floor(stance_value / StanceSetbackbase * 100)


        }

        let sidecut_;

        if(graphics["Sidecut radius"].match("/"))
        {
            let num = graphics["Sidecut radius"].indexOf("/");
            sidecut_ = graphics["Sidecut radius"].substring(0, num)
      
        }

        else
        {
            sidecut_ = graphics["Sidecut radius"]
  
        }

        return (
            <Productgraphics2 
            color={colorSets[i]} 
             key={graphics.id}
             title={graphics.Model}
             size={graphics.size}
             tail={graphics.tail}
             tip={graphics.tip}
             productadded = {productAdded2}
             id={graphics.id}
            //  graph={graphics.graph}
            graph =  {
                [
                   { amount : graphics["size"] , precentage : Math.floor(graphics["size"] / sizebase * 100) , name : "cm"}  , 
                   { amount : graphics["taper"] < 1 ? "0mm" : graphics["taper"] , precentage : graphics["taper"] < 1 ? 0 :  Math.floor(graphics["taper"] / taperbase * 100) , name : graphics["taper"] < 1 ? "" : "mm"},
                   { amount : graphics["Sidecut radius"] , precentage : Math.floor(parseInt(sidecut_) / Sidecutradiusbase * 100) , name : "m"},
                   { amount :stance_value , precentage : stance_precentage , name :  graphics["Stance Setback"] == 0 || !graphics["Stance Setback"] ? "" : "mm"}
                ]}
             canvasHeight={canvasHeight}
             canvasWidth={canvasWidth - (canvasWidth * 30/100 < 444 ? canvasWidth * 30/100 : 444)}
             onClick1={zoomClick}
           
             />    
        )
    })


    



    

    const placeholder = <img className="image-center" src={placeholder_graphics} alt="placeholder"/>

    return (
        <React.Fragment>
{zoom && window.innerWidth < 900 ? <button className='mobile-zoomClass' onClick={() => setZoom(!zoom)}>Zoom out</button> : null}
          {login_model ?<LoginModel closePopup={() => setlogin_model(false)} /> : null }  
          {bookmark_model ?<BookmarkModel closePopup={() => setbookmark_model(false)} /> : null } 
          
             <NavbaLinkbar classlist={navclass} closenav={closeNav}/>
             
            <div className={walkthrough === 0 ? "walkthrough-content" : "walkthrough-none"}>
                <div className="walkthrough-box">
                    <h1>New to ShredMetrix?</h1>
                    <p>Click here for a quick walkthrough!</p>
                    <button className="start-link" onClick={() => Setwalkthrough(1)} >Start</button>
                    <button className="close-link" onClick={() => Setwalkthrough(null)}>Skip Demo</button>
                </div>    
            </div>    
              
        <Loading active={loading}/>
        <section id="comparison-app" data-callpased={sidebarshow ? true : false}>
            
            <div className={mobileCanvas ? 'app-sidebar d-none' : "app-sidebar"} >
                <div className='comparison-select'>
                    <div className={switchoption == "Skis" ? 'active-compare compare-selection' : 'compare-selection'}
                     onClick={() => setswitchoption("Skis")}
                    >
                        <h2>Skis</h2>
                    </div>
                    <div className={switchoption == "Snowboard" ? 'active-compare compare-selection' : 'compare-selection'}
                    onClick={() => setswitchoption("Snowboard")}
                    >
                        <h2>Snowboard</h2>
                    </div>
                    
                </div>
                <img src={expandbtn} className="expand-btn" alt="expand-btn" onClick={() => setsidebarshow(!sidebarshow)}/>    
                {/* <Header page="compare"/> */}
                {window.innerWidth < 900 ? <>
                <NavbaLinkbar classlist={navclass} closenav={closeNav}/>
                <div className='shredmetrix-logo'>
                    <img src={logo_img} onClick={openNav} alt="shredmetrix" />
                    </div> 
                    </>
                    : null}
                <div className="filter-container">
                    <Searchbar  onChange={handleSearchChange} value={search} />
                    {
                
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
                        brandsFunction={brandsFunction}
                        widthType={widthType}
                        WidthTypeClear={WidthTypeClear}
                        walkfunction={() => Setwalkthrough(2)}
                        walkthrough={walkthrough}
                        amount={copyJSON.length}
                        updateSetback2={() => updateSetback(true)}
                        updateSetback1={() => updateSetback(false)}
                        walkfunction_null={() => Setwalkthrough(null)}
                    />  
                    }
                    
                </div>
                <div className={!walkthrough ? "product-listing product-listing-active" : "product-listing"}>

                            {
                                !loadingStatus && !copyJSON.length ? <h5 className="name-products">no products to show</h5> : null

                            }
                {/* product card start*/}

                {
                  !loadingStatus ? 
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
                                walkfunction_null={() => Setwalkthrough(null)}
                                walkthrough={walkthrough}
                                productBoxactive={popupOpen === product["id"] ? true : false}
                                productadded = {productAdded}
                                popupOne = {() => setpopOpen(product["id"]) }
                                closePopup = {() => setpopOpen("") }
                                bookmarkadd = {bookmarkAdded}
                                bookmarkCheck = {bookmark}

                    />
                        )

                       
                    }) : <div className="loading-container">
                    <img src={loader} alt="loading.." className="loading-image"/>
                    <h5>Loading...</h5>
                   </div>

                    
                      
                }

         
                 { !loadingStatus1 ?  buttonReturn(setsOffset) : <div className="loading-container">
                  <img src={loader} alt="loading.." className="loading-image"/>
                  <h5>Loading...</h5>
                 </div> 
                  } 
                 

                {/* product card end*/}
                  <div id='bottom'></div>
                </div>
            </div>

            <div 
            className={!zoom  ? 'canvas-area' : 'canvas-area canvas-area-zoom'} 
            data-callpased={collapsible ? "true" : "false"}
            onMouseMove={(ev) => handleMouseMove(ev)} 
           
            data-zoom={zoomMode}
            style={zoom ? {right : PositionCalculator(MousePosition.left , sidebarshow , sidebarSize, windowWidth , collapsible) , marginTop : -PositionCalculator2(MousePosition.top , windowHeight,collapsible) } : null}
            >

                  { !zoom ? 
                      window.innerWidth > 800 ? <Toolbar 
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
                      tabfour={() => Setwalkthrough(8)}
                      walkfunction_null={() => Setwalkthrough(null)}
                      walkthrough_terminate={walkthrough_terminate}
                      walkthrough={walkthrough}
                      openNav={openNav}
                      /> : mobileOption()

                      : null
                  }
        
                    
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
                 { zoom && window.innerWidth < 900 ? 

                         // y: 
        //y: 
        //x: 
        //x: 


                <Draggable

                bounds={{ top: -35.000030517578125, left: -74.2857551574707, right: 135.85711288452148, bottom: 350 + MousePosition.top }}
                    onDrag={handleEvent}
                    onStart={handleEvent}
                    onStop={handleEvent}
                >
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
                </Draggable> :
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
            }
                
               {  !zoom ?  
                <div className="canvas-text" data-active={!lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                       
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   outlineUnit : null
                        } 
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   graphicsoutline : null
                        }   
                </div> : null
                } 
                 {  !zoom ?  
                <div className="canvas-text" data-active={lineview ? "true" : "false"} data-callpaseds={collapsible ? "true" : "false"} data-graph={graphactive ? "true" : "false"} ref={canvas}>
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ?   profileUnit : null
                        } 
                        {
                        Array.isArray(activeGraphics) && activeGraphics.length ? graphicsprofile : null
                        }   
                </div> : null
                    }
                

                <Completegraph 
                activestatus={!lineview} 
                callpaseds={collapsible ? "true" : "false"} 
                graph={graphactive ? "true" : "false"}  
                activeBars={activebars} 
                colorSets={colorSets}
                names={outlineUnit2}
                />

                <Completegraph 
                activestatus={lineview} 
                callpaseds={collapsible ? "true" : "false"} 
                graph={graphactive ? "true" : "false"} 
                activeBars={activebars2} colorSets={colorSets}
                names={profileUnit2}
                />
               
                {/* <Productgraphics color="red"  url={productsGraphicsJSON[0]["img"]}/> */}
    
           </div>
        </section>
        </React.Fragment>
    )
}

export default Comparison;