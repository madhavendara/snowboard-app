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
    brandsFunction,
    walkthrough,
    walkfunction,
    amount,
    updateSetback2,
    updateSetback1,
    walkfunction_null,
    switchoption,
    radiusFunction,
    terrainTypeFunction,
    terrain_,
    snowCondition_,
    snowConditionFunction
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
        end: 1800
    })

    const [price_changed,setprice_changed] = useState(false)
    const [length_changed,setlength_changed] = useState(false)


    const [message, setMessage] = useState('');
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
    const [brands,setBrands] = useState([
        'Never Summer','Lib Tech','Burton','Salomon','Jones','Season','Arbor','Roxy','Nitro','Nidecker','CAPiTA','Bataleon','GNU','Sims','United Shapes','Gentemstick','Yes.','Cardiff','Weston','Moss Snowstick','Ride','K2','Rossignol','Slash','Public Snowboards','Korua Shapes'
    ]) 

    const [Rockerchanged, setrockerChanged] = useState(false)

    const [terrainChanged, setterrainChanged] = useState(false)

    const [brand_2,setBrands_2] = useState(["Armada",
    "Atomic",
    "Black Crows",
    "Blizzard",
    "Coalition Snow",
    "DPS",
    "Dynafit",
    "Dynastar",
    "Elan",
    "Faction",
    "Fischer",
    "G3",
    "Head",
    "Icelantic",
    "K2",
    "Lib Tech",
    "Liberty",
    "Line Skis",
    "Moment",
    "Movement",
    "Nordica",
    "ON3P",
    "RMU",
    "Rossignol",
    "Salomon",
    "Scott",
    "Season",
    "Stöckli",
    "Völkl",
    "WNDR Alpine",
    "ZAG",
    ])

    const [currentsnow_condition,setcurrentsnow_condition] = useState([]);

    const [snow_condition] = useState([
        {name : "Corn" , description : "Corn snow, usually found in the spring, is identified by large, semi-loose granules during the day which freeze together at night, and then loosen again during the day, but still have enough adhesion to make the skiing easy. Once corn loses its adhesion, it becomes LSGR, which is no fun at all. Some ski resorts report sloppy spring conditions as corn. Note that true corn will support a planted ski pole, and your ski boots won't noticeably sink."},
        {name : "Deep Powder" , description : "6-12 inches of cold, new, loose, fluffy, dry snow that has not been compacted."},
        {name : "Frozen Granular (FG)" , description : "Frozen granular is a hard surface of old snow formed by granules freezing together after a rain or warm temperatures. It is generally grayish in color. Frozen granular surfaces can vary widely, but generally, all FG surfaces will support a ski pole stuck into the surface. FG can be re-groomed without forming ice chips. It can be pleasurable to ski on, depending on the temperature. If you can't stab a ski pole into it, or if the ski pole won't stand up, it's not FG."},
        {name : "Hard Pack (HP)" , description : "When snow becomes very firmly packed. Like Frozen Granular, you can plant a pole in Hard Pack with some effort. But unlike FG, HP is white in color. HP has not melted and re-crystallized, it is tightly packed via grooming and/or continuous wind. Your ski boots will not punch into HP. "},
        {name : "Ice (I or Icy)" , description : "Ice is a hard, translucent, glazed surface created either by freezing rain, frozen groundwater, or by melting and re-freezing. Don't confuse ice with frozen granular (FG); FG is opaque whereas I is translucent."},
        {name : "Loose Granular (LSGR) or Sugar Snow" , description : "Snow thaws, then refreezes and re-crystalizes as granules that do not cling together. LSGR is frequently the result of an accumulation of sleet. This is also created by machine grooming of frozen or icy snow. Has no form or body; will not support a pole planted into it. Sometimes referred to as 'that loose snow cone stuff' and it is probably the toughest surface to ski on. When slopes are a combination of Ice and Loose Granular, the skiers opt for the ice."},
        {name : "Machine Groomed Granular (MGG)" , description : "Loose granular that has been repeatedly groomed so that it is somewhat more packed and allegedly more skiable than LSGR. Created after a thaw and re-freeze when the resort operator mashes the heck out of the snow with grooming equipment over and over. If it supports a ski pole, it's ok. Otherwise, it's troublesome."},
        {name : "Man Made Granular (MMG)" , description : "Same as Machine Groomed Granular immediately above, saying that it has been pulverized by man into its present form."},
        {name : "Packed Powder (PP)" , description : "A dry snow, either natural or machine-made, that has been packed down by skiing or grooming. The snow is no longer fluffy, but it is not hard. It will support a ski pole, although sometimes the pole might fall. Your skis will not generally sink into PP, but your ski boots usually will to some extent."},
        {name : "Powder" , description : "Up to 5 inches of cold, new, loose, fluffy, dry snow that has not been compacted."},
        {name : "Sastrugi" , description : "New powder snow that has been blown into dense ridges by strong winds. "},
        {name : "Serious Powder" , description : "13+ inches of cold, new, loose, fluffy, dry snow that has not been compacted."},
        {name : "Variable Conditions (VC)" , description : "No primary surface (at least 70%) can be determined as one specific surface condition, VC is used to describe a range of surfaces that can be encountered. Unfortunately, many ski areas report VC in lieu of a much less desirable condition such as I or LSGR."},
        {name : "Wet Granular Snow (WETGR)" , description : "Loose or frozen granular snow which has become wet after rainfall or high temperatures. This usually results from rainy days or a thaw and is generally easy to ski on."},
        {name : "Wet Packed Snow (WETPS)" , description : "Snow, either natural or machine-made that has been packed and gets wet from rain or misting conditions. You can usually stab a ski pole into it, and it is generally skiable until temperatures drop drastically. "},
        {name : "Wet Snow (WETSN)" , description : "Powder snow that has become moist due to warm sunshine, a thaw or rainfall, or snow that fell with a high moisture content. Will not support a ski pole right at the surface, skis sink until pressure forms a support layer, and boots will sink more deeply. Common in the east and midwest, known in the west as 'Sierra Cement' and 'Cascade Concrete.' Can be quite troublesome until it is packed a bit by skiers or grooming."},
        {name : "Windblown Snow (WBLN)" , description : "Wind blows the surface snow into a varied surface of drifts and firmly packed base snow. Pay attention and react quickly to ski this stuff."},
        {name : "Wind-scoured" , description : "Strong winds can remove all surface snow, leaving an ice-like surface in wind-affected areas. It is hard to set an edge in wind-scoured snow. "}
             
    ])

    const [currentTerrain,setCurrentTerrain] = useState([]);


    const [terrain,setTerrain] = useState([
        {
            "name": "Groomers",
            "selection": "All-Mountain@Carvin"
          },
          {
            "name": "Moguls",
            "selection": "All-Mountain"
          },
          {
            "name": "Powder",
            "selection": "Powder"
          },
          {
            "name": "Jumps",
            "selection": "Park &amp; Pipe@Freestyle"
          },
          {
            "name": "Rails",
            "selection": "Park &amp; Pipe@Freestyle"
          },
          {
            "name": "Trees",
            "selection": "Freeride"
          },
          {
            "name": "Steeps",
            "selection": "Freeride@Big Mountain"
          },
          {
            "name": "Banks",
            "selection": "Freeride"
          },
          {
            "name": "Uphill",
            "selection": "Alpine Touring@Splitboarding"
          }
    ])

 

    let terrain_html =   terrain.map((value) => {

        return (
            <div className="check-box" key={value.name}>
            <input type="checkbox" id="horns" name="horns" value={value.name} checked={currentTerrain.indexOf(value.name) !== -1 } 
            onChange={(e) => terrien_typefunction1(value.name)}
            />
            <label >{value.name}</label>
            </div>
        );
    }) 


    let snowcondition_html =   snow_condition.map((value) => {
        return (
            <div className="check-box" key={value.name}>
            <input type="checkbox" id="horns" name="horns" value={value.name} checked={currentsnow_condition.indexOf(value.name) !== -1}
            onClick={(e) => snowCondition_typefunction1(value.name)}
            />
            <label >{value.name}</label>
            </div>
        );
    }) 


    const [brandsActive , setbrands] = useState([]);

    const [radius , Setradius] = useState([]);

    const radius_function = (ev) => {

        let value;
        let radius_value = [...radius];

        if(ev == "Short")
        {
            value = "0-16"
        }

        else if (ev == "Medium")
        {
            value = "16-22"
        }

        else
        {
            value = "22-100"
        }


        if(radius.indexOf(value) !== -1)
        {
            radius_value.splice(radius.indexOf(value),1);
            Setradius(radius_value)
            console.log(radius+" del")
        }

        else
        {
            radius_value.push(value)
            Setradius(radius_value)
            console.log(radius+" add")
        }

            
    }

    const brandsFunction1 = (ev) => {

        const letBrand = [...brandsActive]
        if(letBrand.includes(ev))
        {
            const index = letBrand.indexOf(ev);
            if (index > -1) {
                letBrand.splice(index, 1);
                setbrands(letBrand)
            }
        }

        else
        {
            letBrand.push(ev)
            setbrands(letBrand)
        }

        console.log(brandsActive)
    }


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

        if(!Rockerchanged)
        {
            setrockerChanged(true)
        }
    }


    const terrien_typefunction1 = (ev) => {

        const letterrain = [...currentTerrain]
        if(letterrain.includes(ev))
        {
            const index = letterrain.indexOf(ev);
            if (index > -1) {
                letterrain.splice(index, 1);
                setCurrentTerrain(letterrain)
            }
        }

        else
        {
            letterrain.push(ev)
            setCurrentTerrain(letterrain)
        }

        if(!terrainChanged)
        {
            setterrainChanged(true)
        }
    }


    const snowCondition_typefunction1 = (ev) => {

        const letconditon = [...currentsnow_condition]
        if(letconditon.includes(ev))
        {
            const index = letconditon.indexOf(ev);
            if (index > -1) {
                letconditon.splice(index, 1);
                setcurrentsnow_condition(letconditon)
            }
        }

        else
        {
            letconditon.push(ev)
            setcurrentsnow_condition(letconditon)
        }


    }




    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log(event.target);

        console.log(event.target.value);
      };

    const ClearAll = () => {
        priceFunction1(200 , 1800)
        setbackFunction1(15,80)
        lengthFunction1(100,200)
        setRocker([])
        setwidth([])
        setbrands([])
        Setradius([])
    }

    const applyFunction = () =>
    {
        priceFunction(price.start , price.end)
        if(setback_status !== null)
        {
            if(!setback_status)
            {
                updateSetback2()
                setbackFunction(setback.start,setback.end)
                console.log(setback.start,setback.end)
            }
            else
            {
                updateSetback1()

            }
        }
        lengthFunction(length.start,length.end)
        widthFunction(width)
        brandsFunction(brandsActive)
        RockerTypeFunction(Rocker)
        setfilteractive(false); 
        radiusFunction(radius);
        

    }


    const priceFunction1 = (start,end) => {
        setPrice({
            start : Math.floor(start),
            end : Math.floor(end)
        })
        console.log(start)
    }


    const priceFunction2  = event => {

        setPrice({
            start : event.target.value,
            end : price.end
        })
     
        console.log("events")
    }

    const priceFunction3  = event => {

        setPrice({
           
            start : price.start,
            end : event.target.value,
        })
     
        console.log("events")
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

    useEffect(() => {
        let copy = [...RockerType]
       setRocker(copy)
       let copy2 = [...terrain_]
       setCurrentTerrain(copy2)
    
       let copy3 = [...snowCondition_]
       setcurrentsnow_condition(copy3)

    },[]);
    
    useEffect(() => {
        let brand_let = [...brands];
        let brand_2_let = [...brand_2];
        brand_let = brand_let.sort();
        brand_2_let = brand_2_let.sort();

        setBrands(brand_let);
        setBrands_2(brand_2_let);
    },[]);

    useEffect(() => {

        priceFunction1(200 , 1800)
        if(switchoption == "Skies")
        {
            setbackFunction1(null)
        }
        else
        {
            setbackFunction1(15,80)
        }
        
        lengthFunction1(100,200)
        // setRocker([])
        setwidth([])
        setbrands([])
        Setradius([])
        
    },[switchoption])
    


    let brands_html =  switchoption == "Snowboard" ? brands.map((brand) => {
        return (
            <div className="check-box" key={brand}>
            <input type="checkbox" id="horns" name="horns" onChange={(e) => brandsFunction1(e.target.value)} value={brand} checked={brandsActive.indexOf(brand) !== -1 }/>
            <label >{brand}</label>
            </div>
        );
    }) : brand_2.map((brand) => {
        return (
            <div className="check-box" key={brand}>
            <input type="checkbox" id="horns" name="horns" onChange={(e) => brandsFunction1(e.target.value)} value={brand} checked={brandsActive.indexOf(brand) !== -1 }/>
            <label >{brand}</label>
            </div>
        );
    })



    return (

        <React.Fragment>

                        <div className="filter-bar-container" >

                        
                       
                            {
                                walkthrough === 1 ? <>
                                    <div className="blue-box-1">
                                        <h2>Refine your options by filtering</h2>
                                        {  amount > 0 ?
                                            <><button className="gotit-btn" onClick={walkfunction}>Got it</button> <button className="skipit-btn" onClick={walkfunction_null}>Skip Demo</button> </>  : null 
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
                                                    range={{ min: 200, max: 1800}} 
                                                    start={[Math.floor(priceRange.start), Math.floor(priceRange.end)]} 
                                                    connect 
                                                    onChange={(ev) => {priceFunction1(ev[0],ev[1]); setprice_changed(true)}} 
                                                    // set={[Math.floor(price.start),Math.floor(price.end)]}

                                                    />
                                                    <div className="numbercontainer">
                                                        <h1>
                                    $
                                                           <input type="text" name="price-start" className='price-start'
                                                           onChange={priceFunction2}
                                                           value={price_changed ? price.start : priceRange.start}
                                                           />
                                                            
                                                            </h1>
                                                        <h1>
                                                            $
                                                        <input type="text" name="price-end" className='price-end'
                                                       onChange={priceFunction3}
                                                       value={price_changed ? price.end : priceRange.end}
                                                        />
                                                        
                                                        </h1>

                                                        {/* <input
                                                            type="text"
                                                            id="message"
                                                            placeholder="Your message"
                                                            onChange={handleChange}
                                                            value={message}
                                                        /> */}
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion>

                           {switchoption == "Snowboard" ? 
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
                                           onChange={(ev) => setbackFunction1(ev[0],ev[1])} 
                                           />

                                           <div className="numbercontainer">
                                               <h1>{Math.floor(setback.start)}</h1>
                                               <h1>{Math.floor(setback.end)}</h1>
                                           </div> 
                                       </div>
                                   </div>  
                               </div>
                           </div>    
                           </Accordion> : null
                        
                        }
                                    

                                    {/* <Accordion title="SETBACK">
                                        <div className="Accordion-content">
                                                  
                                        </div>
                                </Accordion> */}
                                <Accordion title="Ability Level">
                                    <div className="Accordion-content">
                                         <div className="check-box">
                                            <input type="checkbox" id="horns" value="Beginner-Intermediate" name="ability-level"  onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Beginner-Intermediate") !== -1}/>
                                            <label >Beginner</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Intermediate-Advanced" name="ability-level" onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Intermediate-Advanced") !== -1}/>
                                            <label>Intermediate</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Intermediate-Advanced" name="ability-level"  onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Intermediate-Advanced") !== -1}/>
                                            <label >Advanced</label>
                                        </div>

                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Advanced-Expert" name="ability-level"  onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Advanced-Expert") !== -1}/>
                                            <label >Expert</label>
                                        </div>

                                        <div className="check-box">
                                            <input type="checkbox" id="horns" value="Advanced-Expert" name="ability-level"  onChange={(e) => RockerTypeFunction1(e.target.value)} checked={Rocker.indexOf("Advanced-Expert") !== -1}/>
                                            <label >Extreme</label>
                                        </div>
                                                                               
                                    </div>
                                </Accordion>

                                <Accordion title="TERRAIN type">
                                    <div className="Accordion-content">
                                         {terrain_html}                                     
                                    </div>
                                </Accordion>


                                <Accordion title="SNOW CONDITIONS">
                                    <div className="Accordion-content">
                                         {snowcondition_html}                                     
                                    </div>
                                </Accordion>


                                <Accordion title="BRAND">
                                <div className="Accordion-content">
                                  {brands_html}
                            
                                </div>
                            </Accordion>

                                <Accordion title="LENGTH">
                                    <div className="Accordion-content">
                                    <div className="middle">
                                                <div className="multi-range-slider">
                                                    <Nouislider 
                                                    range={{ min: 100, max: 200 }} 
                                                    start={[lengthRange.start, lengthRange.end]} 
                                                    connect 
                                                    onChange={(ev) => {lengthFunction1(ev[0],ev[1]); setlength_changed(true)}} 
                                                    />

                                                    <div className="numbercontainer">
                                                        <h1>
                                                          
                                                        <input type="text" name="price-start" className='price-start diffrent'
                                                           onChange={(ev) => lengthFunction1(ev.target.value,length.end)}
                                                           value={!length_changed ? lengthRange.start : length.start}
                                                           />
                                                           CM
                                                           </h1>
                                                        <h1>
                                                        
                                                            <input type="text" name="price-start" className='price-end'
                                                           onChange={(ev) => lengthFunction1(length.start,ev.target.value)}
                                                           value={!length_changed ? lengthRange.end : length.end}
                                                           />
                                                           CM
                                                           </h1>
                                                    </div> 
                                                </div>
                                    </div> 
                                    </div>
                               </Accordion>
                               {/* {switchoption == "Snowboard" ? 
                            <Accordion title="WIDTH TYPE">
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
                            </Accordion> : null
    } */}

{switchoption == "Skies" ? <Accordion title="RADIUS">
                                    <div className="Accordion-content">
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="radius" value="Short" onChange={(e) => radius_function(e.target.value)} checked={radius.indexOf("0-16") !== -1 } />
                                        <label >Short</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="radius" value="Medium" onChange={(e) => radius_function(e.target.value)} checked={radius.indexOf("16-22") !== -1 } />
                                        <label >Medium</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="radius" value="Long" onChange={(e) => radius_function(e.target.value)} checked={radius.indexOf("22-100") !== -1 }/>
                                        <label >Long</label>
                                    </div>
                          
                                    </div>
                               </Accordion> : null
    }


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