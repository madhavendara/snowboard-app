import React , {useState , useRef , useEffect}  from 'react'
import Nouislider from "nouislider-react";
import "../nouislider.css";
import Accordion from './accordion';
import close from "../assest/x.svg"

const ProductFilter = (
    {
    priceFunction , 
    priceRange , 
    setbackRange , 
    setbackFunction ,
    lengthFunction , 
    lengthRange , 
    RockerTypeFunction ,
    widthFunction,
    RockerType,
    widthType,
    RockerTypeClear,
    WidthTypeClear,
    walkthrough,
    walkfunction,
    amount,
    updateSetback2,
    updateSetback1
    }
    
    ) => {
    const [filteractive,setfilteractive] = useState(false) 


    // const [price] = useState({
    //     start: 200,
    //     end: 600
    // })

    // const [setback] = useState({
    //     start: 15,
    //     end: 80
    // })

    // const [length] = useState({
    //     start: 140,
    //     end: 180
    // })

    const [price,setPrice] = useState({
        start: 200,
        end: 600
    })

    const [setback_status, setbackActive] = useState(null)

    const [setback,Updatesetback] = useState({
        start: 15,
        end: 80
    })

    const [length,setLength] = useState({
        start: 100,
        end: 200
    })

    const [Rocker, setRocker] = useState([]);    
    const [width, setwidth] = useState([]); 


    const RockerTypeFunction1 = (ev) => {

        const letRocker = [...Rocker]
        if(letRocker.includes(ev))
        {
            const index = letRocker.indexOf(ev);
            if (index > -1) {
                letRocker.splice(index, 1);
                setRocker(letRocker)
            }
        }

        else
        {
            letRocker.push(ev)
            setRocker(letRocker)
        }
    }


    const ClearAll = () => {
        priceFunction1(200 , 600)
        setbackFunction1(15,80)
        lengthFunction1(100,200)
        setRocker([])
        setwidth([])
    }

    const applyFunction = () =>
    {
        priceFunction(price.start , price.end)
        if(setback_status !== null)
        {
            if(setback_status)
            {
                updateSetback1()
                setbackFunction(setback.start,setback.end)
            }
            else
            {
                updateSetback2()
            }
        }
        lengthFunction(length.start,length.end)
        widthFunction(width)
        RockerTypeFunction(Rocker)
        setfilteractive(false); 

    }


    const priceFunction1 = (start,end) => {
        setPrice({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

    const setbackFunction1 = (start,end) => {
        Updatesetback({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

 

   const lengthFunction1 = (start,end) => {
    setLength({
            start : Math.floor(start),
            end : Math.floor(end)
        })
    }

    const widthFunction1 = (ev) => {
        const letWidth = [...width]
        if(letWidth.includes(ev))
        {
            const index = letWidth.indexOf(ev);
            if (index > -1) {
                letWidth.splice(index, 1);
                setwidth(letWidth)
            }
        }
        else
        {
            letWidth.push(ev)
            setwidth(letWidth)
        }
    
    }

    return (

        <React.Fragment>

                        <div className="filter-bar-container" >

                        
                       
                            {
                                walkthrough === 1 ? <>
                                    <div className="blue-box-1">
                                        <h2>Refine your options by filtering</h2>
                                        {  amount > 0 ?
                                            <button className="gotit-btn" onClick={walkfunction}>Got it</button> : null 
                                        }
                                        
                                    </div> 
                                    <div className="backdrop">
                                    </div> 
                                </> : null
                            }
                               
                            <svg className="filter-icon" onClick={() => setfilteractive(true)} width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5983 18.3125C25.9921 15.724 23.653 13.79 20.8674 13.79C18.0818 13.79 15.7419 15.724 15.1358 18.3125H0V20.9634H15.1358C15.7419 23.5525 18.0818 25.4865 20.8674 25.4865C23.653 25.4865 25.9921 23.5525 26.5983 20.9634H41V18.3125H26.5983ZM23.7309 20.9634C23.2277 22.0345 22.1334 22.7785 20.8674 22.7785C19.6014 22.7785 18.5071 22.0345 18.0031 20.9634C17.8139 20.5602 17.708 20.1111 17.708 19.6379C17.708 19.1648 17.8139 18.7149 18.0031 18.3125C18.5071 17.2413 19.6014 16.4981 20.8674 16.4981C22.1334 16.4981 23.227 17.2413 23.7309 18.3125C23.9201 18.7149 24.0261 19.1648 24.0261 19.6379C24.0261 20.1111 23.9201 20.5602 23.7309 20.9634Z" fill="#F8F6F3"/>
                            <path d="M26.6883 5.00312C26.2759 2.17697 23.8233 0 20.8674 0C17.9115 0 15.4581 2.17697 15.0457 5.00312H0V7.65324H15.2712C16.0378 9.99721 18.2566 11.6965 20.8674 11.6965C23.4782 11.6965 25.6962 9.99721 26.4636 7.65324H41V5.00312H26.6883ZM23.4502 7.65324C22.8788 8.46039 21.9337 8.98846 20.8674 8.98846C19.8011 8.98846 18.856 8.46039 18.2839 7.65324C17.9206 7.14247 17.708 6.51962 17.708 5.84788C17.708 5.55526 17.7481 5.27242 17.8245 5.00312C18.1961 3.68069 19.4197 2.70805 20.8674 2.70805C22.3151 2.70805 23.538 3.68069 23.9095 5.00312C23.986 5.27242 24.0261 5.55526 24.0261 5.84788C24.0261 6.51962 23.8134 7.14247 23.4502 7.65324Z" fill="#F8F6F3"/>
                            </svg>
                        </div> 

                                
                                    <div className="side-filteroption" data-active={filteractive ? true : false}>
                                    <img src={close} onClick={(e) => {setfilteractive(false);e.preventDefault();}} className='filter-close'/>
                                <div className="top-title">
                                    <h1>Filter</h1>
                                </div>
                                <div className="accordion">
                                    <Accordion title="Price">
                                        <div className="Accordion-content">
                                      
                                            <div className="middle">
                                                <div className="multi-range-slider">
                                                    {/* <input type="range" id="input-left" min="0" max="100" /> */}
                                                    <Nouislider 
                                                    range={{ min: 200, max: 600}} 
                                                    start={[Math.floor(price.start), Math.floor(price.end)]} 
                                                    connect 
                                                    onUpdate={(ev) => priceFunction1(ev[0],ev[1])} 
                                                    set={[Math.floor(price.start),Math.floor(price.end)]}

                                                    />
                                                    <div className="numbercontainer">
                                                        <h1>${Math.floor(price.start)}</h1>
                                                        <h1>${Math.floor(price.end)}</h1>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion>

                                    <Accordion title="SETBACK OPTIONS">
                                    <div className="Accordion-content">
                                        <div className='select-containers'>
                                            <div className={setback_status && setback_status !== null ? 'active-option select-option' : "select-option"}  onClick={() => setbackActive(true)}>
                                            Centered
                                            </div>
                                            <div className={!setback_status && setback_status !== null  ? 'active-option select-option' : "select-option"} onClick={() => setbackActive(false)}>
                                            Setback
                                            </div>
                                        </div>
                                        <div className={setback_status || setback_status === null ? 'side-setback-options' : 'side-setback-options-active'}>
                                        <div className="middle">
                                                <div className="multi-range-slider">
                                                    <Nouislider 
                                                    range={{ min: 15, max: 80 }} 
                                                    start={[setback.start, setback.end]} 
                                                    connect
                                                    onUpdate={(ev) => setbackFunction1(ev[0],ev[1])} 
                                                    />

                                                    <div className="numbercontainer">
                                                        <h1>{Math.floor(setback.start)}</h1>
                                                        <h1>{Math.floor(setback.end)}</h1>
                                                    </div> 
                                                </div>
                                            </div>  
                                        </div>
                                    </div>    
                                    </Accordion>

                                    {/* <Accordion title="SETBACK">
                                        <div className="Accordion-content">
                                                  
                                        </div>
                                </Accordion> */}
                                <Accordion title="Ability Level">
                                    <div className="Accordion-content">
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Intermediate-Advanced" name="ability-level" onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Intermediate-Advanced") !== -1 }/>
                                            <label>intermediate-Advanced</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Advanced-Expert" name="ability-level"  onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Advanced-Expert") !== -1}/>
                                            <label >Advanced-Expert</label>
                                        </div>

                                    </div>
                                </Accordion>
                                {/* <Accordion title="BRAND">
                                    <div className="Accordion-content">
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Camber</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Rocker</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Flat</label>
                                        </div>
                                    </div>
                                </Accordion> */}

                                <Accordion title="LENGTH">
                                    <div className="Accordion-content">
                                    <div className="middle">
                                                <div className="multi-range-slider">
                                                    <Nouislider 
                                                    range={{ min: 100, max: 200 }} 
                                                    start={[length.start, length.end]} 
                                                    connect 
                                                    onUpdate={(ev) => lengthFunction1(ev[0],ev[1])} 
                                                    />

                                                    <div className="numbercontainer">
                                                        <h1>{Math.floor(length.start)}cm</h1>
                                                        <h1>{Math.floor(length.end)}cm</h1>
                                                    </div> 
                                                </div>
                                    </div> 
                                    </div>
                               </Accordion>
                               
                            <Accordion title="WIDTH">
                                <div className="Accordion-content">
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns" value="Mid-Wide" onChange={(e) => widthFunction1(e.target.value)} checked={width.indexOf("Mid-Wide") !== -1 }/>
                                        <label >Mid-Wide</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns" value="Regular" onChange={(e) => widthFunction1(e.target.value)} checked={width.indexOf("Regular") !== -1 }/>
                                        <label >Regular</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns" value="Wide" onChange={(e) => widthFunction1(e.target.value)} checked={width.indexOf("Wide") !== -1 } />
                                        <label >Wide</label>
                                    </div>
                                </div>
                            </Accordion>
                            
                                </div>

                               <div className="button-bottom-container">
                                    <button className="apply-filter" onClick={applyFunction}>
                                        Close & Apply
                                    </button>   

                                    <button className="clear-filter"  onClick={(e) => ClearAll(e)}>
                                        Clear All
                                    </button>
                                </div>                          
                            </div>
        </React.Fragment>

             
    )
}


export default ProductFilter;