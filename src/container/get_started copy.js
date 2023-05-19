import React , { useState, useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import Nouislider from "nouislider-react";
import "../nouislider.css";

// images 

import logo_img from '../assest/logo-white.svg'
import skies_select from '../assest/skies_select.png'
import snowboard_select from '../assest/snowboard_select.png'
import help from '../assest/help-circle.svg'
import left from '../assest/chevron-left_.svg'





const Getstarted = ({
    sporttype,
    notfirst,
    priceFunction,
    lengthFunction,
    RockerTypeFunction,
    terrainTypeFunction,
    snowConditionFunction
}) => {
    const [step , stepState]  = useState(1)
    const [totalSteps, setTotal] = useState(8)
    const [sport,setSport] = useState(null)
    const [height , setHeight] = useState(100)
    const [current_level , setcurrent_level] = useState([])
    const [current_terrain , setcurrent_terrain] = useState([])
    const [current_snowcondition , setcurrent_snowcondition] = useState("")
    const [price,setPrice] = useState({
        start: 200,
        end: 1800
    })

    const [skies_level, setSkies_level] = useState([
        {name : "First timer" , description : "Never skied before or r is not yet able to stop with confidence on a gentle slope." , url : "../assest/first_timer.jpg"},
        {name : "Novice" , description : "Learning to turn in control on gentle slopes. Usually rides magic carpet lifts. May progress to chairlifts and other easy green runs." , url : "../assest/novice.png"},
        {name : "Comfortable Novice" , description : "Can link strong snowplow turns or wide stance parallel on green runs. Occasionally skis a blue run, but cautiously. Has experience riding chairlifts (while skiing)." , url : "../assest/comfortable_novice.png"},
        {name : "Intermediate" , description : "Able to ski narrow parallel turns. Can ski most blue runs, but more advanced blues remain a challenge. Would like to explore more varied terrain." , url : "../assest/intermediate.png"},
        {name : "Advanced" , description : "Able to ski strong parallel turns on all blue runs and easy black runs. Learning shorter turns, off-piste, moguls, powder, and more difficult terrain." , url : "../assest/advanced.png"},
        {name : "Expert" , description : "Enjoy the challenge of skiing in control in all conditions and terrain and want to refine these skills." , url : "../assest/expert.png"},
        {name : "Shredder" , description : "Hucking backies on chunder, sailing past the drowners on deep days, dropping cliffs before breakfast, hunting for the narrowest chutes, and generally shredding." , url : "../assest/shredder.png"}
        
    ])


    const [snowboard_level, setSnowboard_level] = useState([
        {name : "First timer" , description : "Never snowboarded before or requires hand assistance to stop safely."},
        {name : "Novice" , description : "Able to stop safely, mobile on toe-side and heel-side edges. Pendulum/falling leaf skills. Using magic carpets and may progress to the chairlift."},
        {name : "Comfortable Novice" , description : "Can complete heel side and toe side turns on gentle green terrain. Learning to link turns. Using magic carpets and chairs in the learning area."},
        {name : "Intermediate" , description : "Can link turns and control speed and turn with confidence on all green runs and easier blue runs. Can use all chairlifts."},
        {name : "Advanced" , description : "Can link turns on blue runs. Learning shorter turns, off-piste, moguls, powder, and more difficult terrain. Can do basic freestyle inside and outside of terrain parks."},
        {name : "Expert" , description : "Can snowboard in control on black runs and comfortable riding in the terrain park. Learning steeps, trees, drops, off-piste, and improving all-mountain freestyle skills."},
        {name : "Shredder" , description : "Hucking backies on chunder, sailing past the drowners on deep days, dropping cliffs before breakfast, hunting for the narrowest chutes, and generally shredding."}
        
    ])



    const [snow_condition, setSnow_condition] = useState([
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

    const [bootsize_type,setBootsize] = useState("")

    const [terrain] = useState([
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

    const [mondo,setMondo] = useState([
        "22.0",
        "22.5",
        "23.0",
        "23.5",
        "24.0",
        "24.5",
        "25.5",
        "26.0",
        "26.5",
        "27.0",
        "27.5",
        "28.0",
        "28.5",
        "29.0",
        "29.5",
        "30.0",
        "30.5",
        "31.0",
        "31.5",
        "32.0",
        "32.5",
        "33.0",
        "33.5",
        "34.0",
    ])

    const [women_size,setwomen_size] = useState([
        "5.0",
        "5.5",
        "6.0",
        "6.5",
        "7.0",
        "7.5",
        "8.0",
        "8.5",
        "9.0",
        "9.5",
        "10.0",
        "10.5",
        "11.0",
        "11.5",
        "12.0"
    ])

    const [men_size,setmen_size] = useState([
        "4.0",
        "4.5",
        "5.0",
        "5.5",
        "6.0",
        "6.5",
        "7.0",
        "7.5",
        "8.0",
        "8.5",
        "9.0",
        "9.5",
        "10.0",
        "10.5",
        "11.0",
        "11.5",
        "12.0",
        "12.5",
        "13.0",
        "14.0",
        "14.5",
        "15.0",
        "15.5",
        "16.0"
    ])




 
    const [rider_height_feet, setRider_height_feet] = useState([
        "4",
        "5",
        "6"
    ])

    const [rider_height_inch, setRider_height_inch] = useState([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
    ])


    const [current_inch , setcurrent_inch] = useState(1)
    const [current_feet, setcurrent_feet] = useState(4)


    const [current_weight , setcurrent_weight] = useState(null)
 

    const update_feet = (e) => {
        setcurrent_feet(e.target.value)
     
    }    

    const update_inch = (e) => {
        setcurrent_inch(e.target.value)
  
    } 

    const skill_level_func = (e) => {
     
        let ari = [...current_level];
        if(ari.indexOf(e) !== -1)
        {
            ari.splice(ari.indexOf(e), 1);
            setcurrent_level(ari);
        }
        else
        {
            ari.push(e);
            setcurrent_level(ari);
        }

    }


    const snow_condition_level_func = (e) => {
     
        let ari = [...current_snowcondition];
        if(ari.indexOf(e) !== -1)
        {
            ari.splice(ari.indexOf(e), 1);
            setcurrent_snowcondition(ari);
        }
        else
        {
            ari.push(e);
            setcurrent_snowcondition(ari);
        }

    }


    const terrain_level_func = (e) => {
     
        let ari = [...current_terrain];
        if(ari.indexOf(e) !== -1)
        {
            ari.splice(ari.indexOf(e), 1);
            setcurrent_terrain(ari);
        }
        else
        {
            ari.push(e);
            setcurrent_terrain(ari);
        }

    }

    

    

    const [rider_masument, setrider_masurment] = useState([
        {
          "Rider Height (ft/in)": "4'10",
          "Rider Height (in)": 58,
          "Rider Height (cm)": 147.3,
          "Min Rider Weight (lbs)": 110,
          "Max Rider Weight (lbs)": 120,
          "Max Rider Weight (kg)": 49.9,
          "Min Rider Weight (kg)": 54.4,
          "Minimum Snowboard Length (cm)": 128,
          "Maximum Snowboard Length (cm)": 136
        },
        {
          "Rider Height (ft/in)": "4'11",
          "Rider Height (in)": 59,
          "Rider Height (cm)": 149.9,
          "Min Rider Weight (lbs)": 112.5,
          "Max Rider Weight (lbs)": 125,
          "Max Rider Weight (kg)": 51,
          "Min Rider Weight (kg)": 56.7,
          "Minimum Snowboard Length (cm)": 131.5,
          "Maximum Snowboard Length (cm)": 138.5
        },
        {
          "Rider Height (ft/in)": "5'0",
          "Rider Height (in)": 60,
          "Rider Height (cm)": 152.4,
          "Min Rider Weight (lbs)": 115,
          "Max Rider Weight (lbs)": 130,
          "Max Rider Weight (kg)": 52.2,
          "Min Rider Weight (kg)": 59,
          "Minimum Snowboard Length (cm)": 133,
          "Maximum Snowboard Length (cm)": 141
        },
        {
          "Rider Height (ft/in)": "5'1",
          "Rider Height (in)": 61,
          "Rider Height (cm)": 154.9,
          "Min Rider Weight (lbs)": 120,
          "Max Rider Weight (lbs)": 132.5,
          "Max Rider Weight (kg)": 54.4,
          "Min Rider Weight (kg)": 60.1,
          "Minimum Snowboard Length (cm)": 136,
          "Maximum Snowboard Length (cm)": 143.5
        },
        {
          "Rider Height (ft/in)": "5'2",
          "Rider Height (in)": 62,
          "Rider Height (cm)": 157.5,
          "Min Rider Weight (lbs)": 125,
          "Max Rider Weight (lbs)": 135,
          "Max Rider Weight (kg)": 56.7,
          "Min Rider Weight (kg)": 61.2,
          "Minimum Snowboard Length (cm)": 139,
          "Maximum Snowboard Length (cm)": 147
        },
        {
          "Rider Height (ft/in)": "5'3",
          "Rider Height (in)": 63,
          "Rider Height (cm)": 160,
          "Min Rider Weight (lbs)": 130,
          "Max Rider Weight (lbs)": 140,
          "Max Rider Weight (kg)": 59,
          "Min Rider Weight (kg)": 63.5,
          "Minimum Snowboard Length (cm)": 141.5,
          "Maximum Snowboard Length (cm)": 149.5
        },
        {
          "Rider Height (ft/in)": "5'4",
          "Rider Height (in)": 64,
          "Rider Height (cm)": 162.6,
          "Min Rider Weight (lbs)": 135,
          "Max Rider Weight (lbs)": 145,
          "Max Rider Weight (kg)": 61.2,
          "Min Rider Weight (kg)": 65.8,
          "Minimum Snowboard Length (cm)": 144,
          "Maximum Snowboard Length (cm)": 152
        },
        {
          "Rider Height (ft/in)": "5'5",
          "Rider Height (in)": 65,
          "Rider Height (cm)": 165.1,
          "Min Rider Weight (lbs)": 137.5,
          "Max Rider Weight (lbs)": 150,
          "Max Rider Weight (kg)": 62.4,
          "Min Rider Weight (kg)": 68,
          "Minimum Snowboard Length (cm)": 146.5,
          "Maximum Snowboard Length (cm)": 154.5
        },
        {
          "Rider Height (ft/in)": "5'6",
          "Rider Height (in)": 66,
          "Rider Height (cm)": 167.6,
          "Min Rider Weight (lbs)": 140,
          "Max Rider Weight (lbs)": 155,
          "Max Rider Weight (kg)": 63.5,
          "Min Rider Weight (kg)": 70.3,
          "Minimum Snowboard Length (cm)": 149,
          "Maximum Snowboard Length (cm)": 157
        },
        {
          "Rider Height (ft/in)": "5'7",
          "Rider Height (in)": 67,
          "Rider Height (cm)": 170.2,
          "Min Rider Weight (lbs)": 145,
          "Max Rider Weight (lbs)": 160,
          "Max Rider Weight (kg)": 65.8,
          "Min Rider Weight (kg)": 72.6,
          "Minimum Snowboard Length (cm)": 151.5,
          "Maximum Snowboard Length (cm)": 159.5
        },
        {
          "Rider Height (ft/in)": "5'8",
          "Rider Height (in)": 68,
          "Rider Height (cm)": 172.7,
          "Min Rider Weight (lbs)": 150,
          "Max Rider Weight (lbs)": 165,
          "Max Rider Weight (kg)": 68,
          "Min Rider Weight (kg)": 74.8,
          "Minimum Snowboard Length (cm)": 154,
          "Maximum Snowboard Length (cm)": 162
        },
        {
          "Rider Height (ft/in)": "5'9",
          "Rider Height (in)": 69,
          "Rider Height (cm)": 175.3,
          "Min Rider Weight (lbs)": 155,
          "Max Rider Weight (lbs)": 170,
          "Max Rider Weight (kg)": 70.3,
          "Min Rider Weight (kg)": 77.1,
          "Minimum Snowboard Length (cm)": 156.5,
          "Maximum Snowboard Length (cm)": 164.5
        },
        {
          "Rider Height (ft/in)": "5'10",
          "Rider Height (in)": 70,
          "Rider Height (cm)": 177.8,
          "Min Rider Weight (lbs)": 160,
          "Max Rider Weight (lbs)": 175,
          "Max Rider Weight (kg)": 72.6,
          "Min Rider Weight (kg)": 79.4,
          "Minimum Snowboard Length (cm)": 159,
          "Maximum Snowboard Length (cm)": 167
        },
        {
          "Rider Height (ft/in)": "5'11",
          "Rider Height (in)": 71,
          "Rider Height (cm)": 180.3,
          "Min Rider Weight (lbs)": 165,
          "Max Rider Weight (lbs)": 180,
          "Max Rider Weight (kg)": 74.8,
          "Min Rider Weight (kg)": 81.6,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 168.5
        },
        {
          "Rider Height (ft/in)": "6'0",
          "Rider Height (in)": 72,
          "Rider Height (cm)": 182.9,
          "Min Rider Weight (lbs)": 170,
          "Max Rider Weight (lbs)": 185,
          "Max Rider Weight (kg)": 77.1,
          "Min Rider Weight (kg)": 83.9,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        },
        {
          "Rider Height (ft/in)": "6'1",
          "Rider Height (in)": 73,
          "Rider Height (cm)": 185.4,
          "Min Rider Weight (lbs)": 175,
          "Max Rider Weight (lbs)": 190,
          "Max Rider Weight (kg)": 79.4,
          "Min Rider Weight (kg)": 86.2,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        },
        {
          "Rider Height (ft/in)": "6'2",
          "Rider Height (in)": 74,
          "Rider Height (cm)": 188,
          "Min Rider Weight (lbs)": 180,
          "Max Rider Weight (lbs)": 195,
          "Max Rider Weight (kg)": 81.6,
          "Min Rider Weight (kg)": 88.5,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        },
        {
          "Rider Height (ft/in)": "6'3",
          "Rider Height (in)": 75,
          "Rider Height (cm)": 190.5,
          "Min Rider Weight (lbs)": 185,
          "Max Rider Weight (lbs)": 200,
          "Max Rider Weight (kg)": 83.9,
          "Min Rider Weight (kg)": 90.7,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        },
        {
          "Rider Height (ft/in)": "6'4",
          "Rider Height (in)": 76,
          "Rider Height (cm)": 193,
          "Min Rider Weight (lbs)": 190,
          "Max Rider Weight (lbs)": 205,
          "Max Rider Weight (kg)": 86.2,
          "Min Rider Weight (kg)": 93,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        },
        {
          "Rider Height (ft/in)": "6'5",
          "Rider Height (in)": 77,
          "Rider Height (cm)": 195.6,
          "Min Rider Weight (lbs)": 195,
          "Max Rider Weight (lbs)": 210,
          "Max Rider Weight (kg)": 88.5,
          "Min Rider Weight (kg)": 95.3,
          "Minimum Snowboard Length (cm)": 160,
          "Maximum Snowboard Length (cm)": 170
        }
      ])

      const [skilllevel,setskilllevel] = useState([
        {
          "type": "First timer",
          "dataPoint": "Beginner-Intermediate"
        },
        {
          "type": "Novice",
          "dataPoint": "Beginner-Intermediate"
        },
        {
          "type": "Comfortable Novice",
          "dataPoint": "Beginner-Intermediate"
        },
        {
          "type": "Intermediate",
          "dataPoint": "Intermediate-Advanced"
        },
        {
          "type": "Advanced",
          "dataPoint": "Intermediate-Advanced"
        },
        {
          "type": "Expert",
          "dataPoint": "Advanced-Expert"
        },
        {
          "type": "Shredder",
          "dataPoint": "Advanced-Expert"
        }
      ])
      
      

      const skies_level_html =  skies_level.map((skies_level) => {

        // let url = require(skies_level.url); 
        // console.log(url)
        return (
            <button key={skies_level.name}
            className={current_level.indexOf(skies_level.name) != -1 ? "action-btn active-action-btn image-btn" : "action-btn image-btn"} data-type={skies_level.name}
            onClick={(e) => skill_level_func(skies_level.name)}
            >
                                <img src={skies_select} alt="skies" className='button-img'/>
                                <h5>{skies_level.name}</h5>
                                <div className='help-container'>
                                    <p>{skies_level.description}</p>
                                    <img src={help} className="help-icon" alt='help'/>
                                </div>
                         </button>
        )
    })



    const snowboard_level_html =  snowboard_level.map((skies_level) => {
        return (
            <button key={skies_level.name}
            className={current_level.indexOf(skies_level.name) != -1 ? "action-btn active-action-btn image-btn" : "action-btn image-btn"}
            onClick={(e) => skill_level_func(skies_level.name)} data-type={skies_level.name}
            >
                                <img src={skies_select} alt="skies" className='button-img'/>
                                <h5>{skies_level.name}</h5>
                                <div className='help-container'>
                                    <p>{skies_level.description}</p>
                                    <img src={help} className="help-icon" alt='help'/>
                                </div>
                         </button>
        )
    })


    const terrain_html =  terrain.map((data) => {
        return (
            <button key={data.name} className={ current_terrain.indexOf(data.name) != -1 ? "action-btn active-action-btn image-btn" : "action-btn image-btn"}
            onClick={(e) => terrain_level_func(data.name)} data-type={data.name}
            >
                                <img src={skies_select} alt="skies" className='button-img'/>
                                <h5>  {data.name}</h5>
                         </button>
        )
    })

    const snowcondition_html =  snow_condition.map((data) => {
        return (
            <button key={data} className={ current_snowcondition.indexOf(data.name) != -1 ? "action-btn active-action-btn image-btn" : "action-btn image-btn"}
            onClick={(e) => snow_condition_level_func(data.name)} data-type={data.name}
            >
               
                                <img src={skies_select} alt="skies" className='button-img'/>
                                <h5 style={{fontSize : "13px"}}>  {data.name}</h5>

                                <div className='help-container'>
                                    <p>{data.description}</p>
                                    <img src={help} className="help-icon" alt='help'/>
                                </div>
                         </button>
        )
    })

  


    
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
    // 
    const size_type = () => {
        switch(bootsize_type) {
            case "Mondo's size":
                return mondo.map((data) => {
                    return (
                        <option>{data}</option>
                    )
                })
              break;
            case "US Women's size":
                return women_size.map((data) => {
                    return (
                        <option>{data}</option>
                    )
                })
                break;
            case "US Men's size":
                return men_size.map((data) => {
                    return (
                        <option>{data}</option>
                    )
                }) 
              break;
            default:
              // code block
          }
    }

    const boothtml1 = () => {
        return (
            <React.Fragment>
            <option>Mondo's size</option>
            <option>US Men's size</option>
            <option>US Women's size</option>
            </React.Fragment>
        )
    }

    const boothtml2 = () => {
        return (
            <React.Fragment>
            <option>US Men's size</option>
            <option>US Women's size</option>
            </React.Fragment>
        )
    }
       
    const applyChanges = () => {

        sporttype(sport);
        notfirst();
        priceFunction(price.start,price.end)
        let min
        let max
        let min_weight
        let max_weight
        let skill_final = [];
        let terrain_final = [];

        for(let i = 0; i < rider_masument.length; i++)
        {
           let good = parseInt(current_feet) + (current_inch * 0.0833333)

        let masure_array =   rider_masument[i]["Rider Height (ft/in)"].split("'");
        let masure_array_max = rider_masument[rider_masument.length - 1]["Rider Height (ft/in)"].split("'");
        let masure_array_min = rider_masument[0]["Rider Height (ft/in)"].split("'");

        
            if(parseInt(masure_array[0]) + parseInt(masure_array[1]) * 0.0833333  == good )
            {
                 min = rider_masument[i]["Minimum Snowboard Length (cm)"]
                 max = rider_masument[i]["Maximum Snowboard Length (cm)"]

        
                
               // alert(parseInt(masure_array[0]) + parseInt(masure_array[1])* 0.0833333)

        
            } 
            else if(parseInt(masure_array_max[0]) + parseInt(masure_array_max[1]) * 0.0833333  < good)
            {
                min = rider_masument[rider_masument.length - 1]["Minimum Snowboard Length (cm)"]
                max = rider_masument[rider_masument.length - 1]["Maximum Snowboard Length (cm)"]
             
            }
            else if(parseInt(masure_array_min[0]) + parseInt(masure_array_min[1]) * 0.0833333  > good)
            {
                min = rider_masument[0]["Minimum Snowboard Length (cm)"]
                max = rider_masument[0]["Maximum Snowboard Length (cm)"]
              
            }
        }


        for(let i = 0; i < rider_masument.length; i++)
        {
            let min_ = rider_masument[i]["Min Rider Weight (lbs)"]
            let max_ = rider_masument[i]["Max Rider Weight (lbs)"]

            if(min_ == current_weight || max_ == current_weight)
            {
               min_weight = rider_masument[i]["Minimum Snowboard Length (cm)"]
               max_weight = rider_masument[i]["Maximum Snowboard Length (cm)"]
            }
            else if(rider_masument[0]["Min Rider Weight (lbs)"] > current_weight)
            {
               min_weight = rider_masument[0]["Minimum Snowboard Length (cm)"]
               max_weight = rider_masument[0]["Maximum Snowboard Length (cm)"]
            }
            else if(rider_masument[rider_masument.length - 1]["Max Rider Weight (lbs)"] < current_weight)
            {
                min_weight = rider_masument[rider_masument.length - 1]["Minimum Snowboard Length (cm)"]
                max_weight = rider_masument[rider_masument.length - 1]["Maximum Snowboard Length (cm)"]
            }
        }

        

        // alert(min+" "+max)
        // alert(min_weight+" "+max_weight)

       lengthFunction(min < min_weight ? min : min_weight,max > max_weight ? max : max_weight)



        for(let i = 0; i < skilllevel.length; i++)
        {
            for(let j = 0; j < current_level.length; j++)
            {
                if(current_level[j] == skilllevel[i]["type"]) {

                    if(skill_final.indexOf(skilllevel[i]["dataPoint"]) == -1)
                    {
                        skill_final.push(skilllevel[i]["dataPoint"])
                    }
                    
                }
            }
        }


       
        
       
        // //console.log(skill_final)
         RockerTypeFunction(skill_final)

         terrainTypeFunction(current_terrain)
         snowConditionFunction(current_snowcondition)

    } 
   
        


    return (
        <React.Fragment>
            <div className='quiz-container' style={step == 8 ? {height : "130vh"} : {height : "100vh"}}>
                <div className='quiz-steps-header'>
                    <img src={logo_img} alt="shredmetrix" className="logo-icon"/>
                    <button className="skip-step">Skip & Start Comparing</button>
                </div>

                <button className='back-button' onClick={() => {
                    if(step > 1 && step <= totalSteps)
                    {
                        stepState(step-1) 
                    }
                    
                   
                    
                    }}>
                            <img src={left} alt="back"/>
                            Back
                        </button>

            {
                step == 8 ? <div className="options_fixed action-items options">
                <button className="action-btn"  onClick={applyChanges}>Start Comparing</button>
            </div>  : null
            }        
                      


                <div className='quiz-content-container' style={{transform : "translateY(-"+(step > 5 && window.innerWidth < 900 ? (step-1) * 0.98 : (step - 1) ) * (window.innerWidth > 900 ? 100 : 110) +"vh)"}} >
                    <div className='quiz-content-area' data-active={step == 1 ? true : false}>
                        <h1>what’s YOur Sports?</h1>
                        <p>Please select either ‘Start Comparing’ or Increase Customization</p>
                        <div className='action-items'>
                            <button className='action-btn' onClick={() => {stepState(2); setSport("Skies"); setBootsize("Mondo's size") }}>
                                <img src={skies_select} alt="skies" className='button-img'/>
                                Skiing
                                </button>
                            <button className='action-btn' onClick={() => {stepState(2); setSport("Snowboard"); setBootsize("US Men's size") }}>
                            <img src={snowboard_select} alt="skies" className='button-img'/>
                                Snowboarding
                                </button>

                        </div>
                    </div>

                    <div className='quiz-content-area' data-active={step == 2 ? true : false}>
                        <h1>what’s YOur Height?  </h1>
                        <p>Want to measured {sport}....</p>
                        <div className='measurment-type'>
                            <div className='feet'>
                                <h5>feet</h5>
                               <select name="feet" className='measurment-select' onChange={(e) => update_feet(e)}>
                               {
                                rider_height_feet.map((data) => {
                                    return (
                                        <option key={data}>{data}</option>
                                    )
                               })
                                 }
                                 </select> 
                            </div>
                            <div className='inch'>
                                <h5>inch</h5>
                                <select name="inch" className='measurment-select' onChange={(e) => update_inch(e)}>
                               {
                                rider_height_inch.map((data) => {
                                    let data_status = false
                                    
                                    for(let i = 0; i < rider_masument.length; i++)
                                    {
                                        let join = current_feet+"'"+data
                                        
                                        if(join == rider_masument[i]['Rider Height (ft/in)'])
                                        {
                                            data_status = true
                                        }
                                    }

                                    // if(data_status)
                                    // {
                                        return (
                                            <option key={data}>{data}</option>
                                        )
                                    // }
                                    
                               })
                                 }
                                 </select> 
                            </div>
                        </div>
                    


                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(3)}>
                            Increase Customization
                                </button>
                       

                        </div>
                    </div>


                    <div className='quiz-content-area' data-active={step == 3 ? true : false}>
                        <h1>what’s YOur Weight? (lbs) </h1>

                        <input type="number" min="50" max="300" name="weight" className="weight-rider" placeholder="Enter your weight" 
                        onChange={(e) => setcurrent_weight(e.target.value)}
                        />
                        {/* <select  className='measurment-select'>
                       {
                        rider_masument.map((data) => {
                            let current = current_feet+"'"+current_inch
                            let key = data['Rider Height (ft/in)']

                            if(current == key) {
                                return (
                                    <React.Fragment>
                                    <option key={data['Min Rider Weight (lbs)']}>{data['Min Rider Weight (lbs)']}</option>
                                    <option key={data['Max Rider Weight (lbs)']}>{data['Max Rider Weight (lbs)']}</option>
                                    </React.Fragment>
                                )
                            }

                        })
                       }
                       </select> */}
                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(4)} >
                            Increase Customization
                                </button>


                        </div>
                    </div>

                    <div className='quiz-content-area quiz-content-100' data-active={step == 4 ? true : false}>
                        <h1>Your Skill Level </h1>
                        
                        <div className='action-items'>
                            {sport == "Skies" ? skies_level_html : snowboard_level_html}
                        </div>

                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(5)} >
                            Increase Customization
                                </button>
                        </div>
                    </div>

                    <div className='quiz-content-area quiz-content-70' data-active={step == 5 ? true : false}>
                        <h1>The terrain you'll shred</h1>
                        
                        <div className='action-items'>
                            {terrain_html}
                        </div>

                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(6)} >
                            Increase Customization
                                </button>
                        </div>
                    </div>


                    <div className='quiz-content-area' data-active={step == 6 ? true : false}>
                        <h1>Choose price range</h1>
                        
                        <div className='action-items'>
                        <Nouislider 
                                                    range={{ min: 200, max: 1800}} 
                                                    start={[Math.floor(price.start), Math.floor(price.end)]} 
                                                    connect 
                                                    onChange={(ev) => priceFunction1(ev[0],ev[1])} 
                                                    // set={[Math.floor(price.start),Math.floor(price.end)]}

                                                    />

<div className="numbercontainer">
                                                        <h1>
                                    $
                                                           <input type="text" name="price-start" className='price-start'
                                                           onChange={priceFunction2}
                                                           value={price.start}
                                                           />
                                                            
                                                            </h1>
                                                        <h1>
                                                            $
                                                        <input type="text" name="price-end" className='price-end'
                                                       onChange={priceFunction3}
                                                       value={price.end}
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

                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(7)} >
                            Increase Customization
                                </button>
                        </div>
                    </div>

                    <div className='quiz-content-area' data-active={step == 7 ? true : false}>
                        <h1>what's your boot size</h1>
                        
                        <div className='action-items'>
                        <div className='measurment-type measurment-type-1'>
                            <div className='select-container'>
                                <h5>select size type</h5>
                                <select type="text" name="shell-size" className='select-step' onChange={(e) => setBootsize(e.target.value)}>
                                    { 
                                        sport == "Skies" ? boothtml1() : boothtml2()
                                    }
                                </select>
                            </div>
                            <div  className='select-container'>
                            <h5>{sport == "Skies" ? "Mondo's size" : "US Men's size"}</h5>
                                <select type="text" name="shell-size" className='select-step'>
                                   {size_type()}
                                </select>
                            </div>
                            {/* <div  className='select-container'>
                            <h5>Gender</h5>
                                <select type="text" name="shell-size" className='select-step'>
                                    <option>Men</option>
                                    <option>Women</option>

                                </select>
                            </div> */}
                        </div>
                        </div>

                        <div className='action-items options'>
                            <button className='action-btn'  onClick={applyChanges}>
                            Start Comparing
                                </button>
                            <button className='action-btn' onClick={() => stepState(8)}  >
                            Increase Customization
                                </button>
                        </div>
                    </div>

                    <div className='quiz-content-area quiz-content-110' data-active={step == 8 ? true : false}>
                        <h1>What type of snow will you shred?</h1>
                        
                        <div className='action-items action-item-1'>
                            {snowcondition_html}
                        </div>

                    </div>



                   


                </div>



            </div>

            <div className='progress-container'>
                <div className='progress-bar' style={{width : step/totalSteps * 100 +"%"}}>
                </div>    
            </div>
        </React.Fragment>
    )
}


export default Getstarted;