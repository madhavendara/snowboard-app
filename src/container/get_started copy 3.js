import React , { useState, useRef} from 'react'
import Header from './header'
import Footer from './footer'
import Nouislider from "nouislider-react";
import Draggable, {DraggableCore} from 'react-draggable';
import "../nouislider.css";




// images 

import logo_img from '../assest/logo-white.svg'
import skies_select from '../assest/skies_select.png'
import snowboard_select from '../assest/snowboard_select.png'
import help from '../assest/help-circle.svg'
import left from '../assest/chevron-left_.svg'

import down from '../assest/down.svg'
import explainmark from '../assest/explainmark.svg'
import hide from '../assest/hide.png'
import p_arrow from '../assest/p-arrow.svg'
import snow_m from '../assest/snow_m.png'
import up from '../assest/up.svg'
import x from '../assest/x.svg'
import darg from '../assest/darg.svg'
import video from '../assest/hype_video.mp4'
import play from '../assest/play.svg'






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
    const [sport,setSport] = useState("Skies")
    const [height , setHeight] = useState(100)
    const [current_level , setcurrent_level] = useState("First timer")
    const [current_terrain , setcurrent_terrain] = useState([])
    const [current_snowcondition , setcurrent_snowcondition] = useState("")
    const [price,setPrice] = useState("Performance")
    const [playdisable,setplaydisable] = useState(false)

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

    const [bootsize_type,setBootsize] = useState("US Women's size")
    const [bootsize_value,setbootsizevalue] = useState(22.0)
    const [bootwidth , setbootwidth] = useState(1000)

    const [position_boot , setbootPosition] = useState(0)
    
    const [terrain] = useState([
        {
            "name": "Groomers",
            "selection": "All-Mountain@Carvin"
          },
          {
            "name": "Park",
            "selection": "Park &amp; Pipe@Freestyle"
          },
          {
            "name": "Powder",
            "selection": "Powder"
          },
          {
            "name": "Big Mountain",
            "selection": "Freeride@Big Mountain"
          },
          {
            "name": "Trees",
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


    const [current_weight , setcurrent_weight] = useState('4ft')
    const [current_weightin , setcurrent_weightin] = useState('10in')

     const [current_weight2 , setcurrent_weight2] = useState('50')

     const video_ref = useRef(null)

    const update_feet = (e) => {
        setcurrent_feet(e.target.value)
     
    }    

    const update_inch = (e) => {
        setcurrent_inch(e.target.value)
  
    } 

   const playVideo = (e) => {
      video_ref.current.play();
      setplaydisable(true)
    }

    const skill_level_func = (e) => {

      setcurrent_level(e)
     
        // let ari = [...current_level];
        // if(ari.indexOf(e) !== -1)
        // {
        //     ari.splice(ari.indexOf(e), 1);
        //     setcurrent_level(ari);
        // }
        // else
        // {
        //     ari.push(e);
        //     setcurrent_level(ari);
        // }

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

    
    const DraggableEventHandler = (e) => {
      
         console.log(e)

       // srcElement offsetParent

       if(e.srcElement.offsetParent) {
          if(e.srcElement.offsetParent.getAttribute("style"))
          {
            let css = e.srcElement.offsetParent.getAttribute("style")
            let final_range = css.replace("transform: translate(-","")
            let range = final_range.replace("px, 0px);","")
    
            setbootPosition(range)
            console.log(range)
          }
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
  //skill select open close 
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = event => {
    // 👇️ toggle isActive state on click
    setIsActive2(current => !current);
  };
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = event => {
    // 👇️ toggle isActive state on click
    setIsActive3(current => !current);
  };
  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = event => {
    // 👇️ toggle isActive state on click
    setIsActive4(current => !current);
  };
  const [isWeight, setIsweight] = useState(true);
  const Handle_weight = event => {
    // 👇️ toggle isActive state on click
    setIsweight(true);

    setIsweight2(false)
  };
  const [isWeight2, setIsweight2] = useState(false);
  const Handle_weight2 = event => {
    // 👇️ toggle isActive state on click
    setIsweight2(true);
    setIsweight(false);
  };
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
            <button key={data.name} className={ current_terrain.indexOf(data.name) != -1 ? "BTN-Choose-dif Btn_back" : "BTN-Choose-dif"}
            onClick={(e) => terrain_level_func(data.name)} data-type={data.name}
            >
                {data.name}
                         </button>

        )
    })
    
    const snowcondition_html =  snow_condition.map((data) => {
        return (
            <button key={data.name} className={ current_snowcondition.indexOf(data.name) != -1 ? "BTN-Choose-dif Btn_back" : "BTN-Choose-dif"}
            onClick={(e) => snow_condition_level_func(data.name)} data-type={data.name}
            >
                {data.name}
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


    const size_type = () => {
        switch(bootsize_type) {
            case "Mondo's size":
                return mondo.map((data) => {
                    return (
                        <button 
                        className={ bootsize_value == data ? "BTN-Choose active" : "BTN-Choose"}
                        onClick={() =>  {setbootsizevalue(data);  setIsActive3(false) }}
                        >{data}</button>
                        
                    )
                })
              break;
            case "US Women's size":
                return women_size.map((data) => {
                    return (
                      <button 
                      className={ bootsize_value == data ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() =>  {setbootsizevalue(data);   setIsActive3(false)}}
                      >{data}</button>
                    )
                })
                break;
            case "US Men's size":
                return men_size.map((data) => {
                    return (
                      <button 
                      className={ bootsize_value == data ? "BTN-Choose active " : "BTN-Choose"}
                      onClick={() =>  {setbootsizevalue(data);  setIsActive3(false)}}
                      >{data}</button>
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
               <div className='MW_size'>
               <button 
              className={bootsize_type == "Mondo's size" ? "BTN-Choose active" : "BTN-Choose"}
              onClick={() =>{setBootsize("Mondo's size"); setbootsizevalue(22.0);  setbootwidth(2000); setbootPosition(0)}}
              >Mondo</button>
              <button 
              className={bootsize_type == "US Men's size" ? "BTN-Choose active" : "BTN-Choose"}
              onClick={() => {setBootsize("US Men's size"); setbootsizevalue(4.0); setbootwidth(1800); setbootPosition(0)}}
              >Men</button>
              <button 
              className={bootsize_type == "US Women's size" ? "BTN-Choose active" : "BTN-Choose"}
              onClick={() => {setBootsize("US Women's size"); setbootsizevalue(5.0); setbootwidth(1000); setbootPosition(0)}}
              >Women</button>
               </div>
            </React.Fragment>
        )
    }

    const boothtml2 = () => {
        return (
            <React.Fragment>
              <button 
              className={bootsize_type == "US Men's size" ? "BTN-Choose active" : "BTN-Choose"}
              onClick={() => setBootsize("US Men's size")}
              >Men</button>
              <button 
              className={bootsize_type == "US Women's size" ? "BTN-Choose active" : "BTN-Choose"}
              onClick={() => setBootsize("US Women's size")}
              >Women</button>
            </React.Fragment>
        )
    }
       
    const applyChanges = () => {

        sporttype(sport);
        notfirst();

        let budget = [212.46,587.83]
        let Performance = [500,1070.91]
        let Premium = [587.83,1800]

        switch(price) {
          case "Budget" : priceFunction(budget[0],budget[1])
          break;
          case "Performance" : priceFunction(Performance[0],Performance[1])
          break;
          case "Premium" : priceFunction(Premium[0],Premium[1])
        }

        // priceFunction(price.start,price.end)
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
         if(current_level == skilllevel[i]["type"]) {

                    if(skill_final.indexOf(skilllevel[i]["dataPoint"]) == -1)
                    {
                        skill_final.push(skilllevel[i]["dataPoint"])
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
                <div className={step == 0 ? "wrapper wrapper_hide" : "wrapper"}>
                  <img src={play}  className={!playdisable ? 'play-button' :'play-button d-none' } onClick={playVideo} />
                <video width="100%" height="100%" controls autoplay ref={video_ref}>
                        <source src={video} type="video/mp4"/>
                      </video>
                <div className={step == 1 ? "sidebar activesidebar" : "sidebar"}>
                    
                        <div className="profile-qus">
                   
                            <p>Quiz 1/5</p>
                            <h3>Your sports</h3>
                            <div className="choose-sk">
                                <button 
                                className={sport == "Snowboard" ? "BTN-Choose active" : "BTN-Choose"}
                                onClick={() => setSport("Snowboard")}
                                >Snowboarding</button>
                                <button 
                                className={sport == "Skies" ? "BTN-Choose active" : "BTN-Choose"}
                                onClick={() => setSport("Skies")}
                                >Skiing</button>
                            </div>
                        </div>

                        <div className="profile-qus">
                        <p>Quiz 2/5</p>
                        <h3>Your height</h3>
                        {/* onClick={() => setcurrent_feet(4)} */}

                        <div className='height-container'>

                        
                        <form className="in-de_form">
                        {/* <input type="number" id="number" placeholder='' onChange={(e) => {setcurrent_weight(e.target.value); console.log(current_weight)}}/> */}
                     
                         <div className='Select-skill' onClick={handleClick2}>
                          <div className={isActive2 ? 'select-content select-content-active' : 'select-content'}>
                               <div className={current_weight == "4ft" ? "BTN-Choose active" : "BTN-Choose"} 
                                  onClick={() => setcurrent_weight("4ft")}>4ft
                               </div>
                               <div className={current_weight == "5ft" ? "BTN-Choose active" : "BTN-Choose"} 
                                  onClick={() => setcurrent_weight("5ft")}>5ft
                               </div>
                             <div className={current_weight == "6ft" ? "BTN-Choose active" : "BTN-Choose"} 
                                 onClick={() => setcurrent_weight("6ft")}>6ft
                                 </div>
                             <div className={current_weight == "7ft" ? "BTN-Choose active" : "BTN-Choose"} 
                                 onClick={() => setcurrent_weight("7ft")}>7ft
                              </div>
                          </div> 
                               <span>{current_weight}</span>
                               <div className='Arrow-down'></div>
                          </div>
                        </form>

                        <form className="in-de_form">
                        {/* <input type="number" id="number" placeholder='' onChange={(e) => {setcurrent_weight(e.target.value); console.log(current_weight)}}/> */}
                        <div className='Select-skill' onClick={handleClick}>
                          <div className={isActive ? 'select-content select-content-active' : 'select-content'}>
                               <div className={current_weightin == "10in" ? "BTN-Choose active" : "BTN-Choose"} 
                                  onClick={() => setcurrent_weightin("10in")}>10in
                               </div>
                               <div className={current_weight == "12in" ? "BTN-Choose active" : "BTN-Choose"} 
                                  onClick={() => setcurrent_weightin("12in")}>12in
                               </div>
                             <div className={current_weight == "13in" ? "BTN-Choose active" : "BTN-Choose"} 
                                 onClick={() => setcurrent_weightin("13in")}>13in
                                 </div>
                             <div className={current_weight == "14in" ? "BTN-Choose active" : "BTN-Choose"} 
                                 onClick={() => setcurrent_weightin("14in")}>14in
                              </div>
                          </div> 
                               <span>{current_weightin}</span>
                               <div className='Arrow-down'></div>
                          </div>
                        </form>

                        </div>


                        </div>

                        <div className="profile-qus">
                        <p>Quiz 3/5</p>
                        <h3>Your weight</h3>
                        <div className='MW_size'>
                            <button  className={isWeight ? 'BTN-Choose' : 'BTN-Choose Btn_back'} onClick={Handle_weight} >
                                LBS
                            </button>
                            <button className={isWeight2 ? 'BTN-Choose' : 'BTN-Choose Btn_back'}onClick={Handle_weight2}>
                                Kg
                            </button>
                        </div>
                        <form className="in-de_form">
                          <div className={isWeight ? 'input-label showd-none' : 'input-label d-none'}>
                            <input type="number" id="number" placeholder='' onChange={(e) => {setcurrent_weight(e.target.value); console.log(current_weight)}}/>
                            <label>LBS</label>
                          </div>
                          <div className={isWeight2 ? 'input-label showd-none' : 'input-label d-none'}>
                            <input type="number" id="number" placeholder='' onChange={(e) => {setcurrent_weight2(e.target.value); console.log(current_weight2)}}/>
                            <label>Kg</label>
                          </div>
                        <div className="in-de-value">
                        <div className="value-button" id="increase"  value="Increase Value"><img src={up} alt=""/></div> 
                        <div className="value-button" id="decrease" value="Decrease Value"><img src={down} alt=""/></div>
                        </div>
                        </form>
                        </div>

                        <div className="choose-sk2">
                        <button className="BTN-Next Btn_back">Back</button>
                        <button  className="BTN-Next Blue_BTN-Next" onClick={() => stepState(2)}>Next</button>
                        <button className="BTN-Quit" onClick={() => applyChanges()} >Apply</button>
                        </div>

              </div>
              
              <div className={step == 2 ? "sidebar activesidebar" : "sidebar"} id="First_text">

              <div className="profile-qus">
                <p>Quiz 4/5</p>
                <h3>Your skill level</h3>
                <div className="choose-sk choose-sk3">
                     <div className='Select-skill-Box' onClick={handleClick}>
                           <div className='Select-skill'>
                              <span>{current_level}</span>
                              <div className='Arrow-down'></div>
                           </div>
                           <div className={isActive ? 'Hide-content Hide-content-active' : 'Hide-content'} >
                           <button 
                      className={current_level == "First timer" ? "BTN-Choose active" : "BTN-Choose"} 
                      onClick={() => setcurrent_level("First timer")}
                      >First timer</button>
                      <button 
                      className={current_level == "Novice" ? "BTN-Choose active" : "BTN-Choose"} 
                      onClick={() => setcurrent_level("Novice")}
                      >Novice</button>
                      <button 
                      className={current_level == "Comfortable Novice" ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() => setcurrent_level("Comfortable Novice")}
                      >Comfortable Novice</button>
                      <button 
                      className={current_level == "Intermediate" ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() => setcurrent_level("Intermediate")}
                      >Intermediate</button>
                      <button 
                      className={current_level == "Advanced" ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() => setcurrent_level("Advanced")}
                      >Advanced</button>
                      <button 
                      className={current_level == "Expert" ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() => setcurrent_level("Expert")}
                      >Expert</button>
                      <button 
                      className={current_level == "Shredder" ? "BTN-Choose active" : "BTN-Choose"}
                      onClick={() => setcurrent_level("Shredder")}
                      >Shredder</button>
                           </div>
                     </div>
                    
                </div>
              </div>

              <div className="profile-qus">
              <p>Quiz 5/5</p>
              <h3>Price range</h3>
              <div className="choose-sk choose-sk3">
                  <button 
                  className={price == "Budget" ? "BTN-Choose active" : "BTN-Choose"}
                  onClick={() => setPrice("Budget")}
                  >Budget</button>
                  <button 
                  className={price == "Performance" ? "BTN-Choose active" : "BTN-Choose"}
                  onClick={() => setPrice("Performance")}
                  >Performance</button>
                  <button 
                  className={price == "Premium" ? "BTN-Choose active" : "BTN-Choose"}
                  onClick={() => setPrice("Premium")}
                  >Premium</button>
              </div>
              </div>
            
              <div className="choose-sk2">
              <button className="BTN-Next" onClick={() => stepState(1)} >Back</button>
              <button className="BTN-Next Blue_BTN-Next" onClick={() => stepState(3)}>Next</button>
              <button className="BTN-Quit" onClick={() => applyChanges()}>Apply</button>
              </div>

              </div>
              {/* <div className={step == 3 ? "sidebar activesidebar" : "sidebar"} id="Second_text" >

              <div className="profile-img">
              <img src={snow_m} width="50%"alt=""/>
              </div> 

              <div className="profile-Text">
              <h3>Great job, you did it well!</h3>
              <p>You have completed basic quiz
              Click "Increase Customization" for more advanced quiz</p>
              <p>or To begin comparing, click "Start Comparing"</p>
              </div>

              <div className="choose-sk4 choose-sk4-1">
              <button className="BTN-Next" onClick={() => applyChanges()}>Start Comparing</button>
              <button className="BTN-2" onClick={() => stepState(4)}>Increase Customization</button>
              </div>

              </div> */}
              <div className={step == 3 ? "sidebar activesidebar" : "sidebar"} id="Increase_costmiz">

              <div className="profile-qus">
              <p>Quiz 1/3</p>
              <h3>The terrain you'll shred</h3>
              
              <div className="choose-sk choose-sk3">
                  {terrain_html}
              </div>
              </div>



              <div className="profile-qus">
              <p>Quiz 2/3</p>
              <h3>Your boot size</h3>
              <div className="choose-sk choose-sk3">

                {
                  sport == "Skies" ? boothtml1() : boothtml2()
                }
            
                  <Draggable
                            axis="x"
                            defaultPosition={{x: 0, y: 0}}
                            bounds={{left: -bootwidth, top: 0, right: 0, bottom: 0}}
                            onStop={DraggableEventHandler}
                            scale={1}
                            position={{x : -position_boot, y : 0}}
                            >
                              <div className='Select_box'>
                                <div className='Select-skill' onClick={handleClick3}>
                                    <span>{bootsize_value}</span>
                                    <div className='Arrow-down'></div>
                               </div>
                                  <div className={isActive3 ? 'scroll-hight Hide-hight Hide-hight-active' : 'scroll-hight Hide-hight'}>
                                        {size_type()}
                                  </div>
                              </div>
                  </Draggable>
                  {/* <p className="Drag-Text">Drag right <img src={darg} className="Drag-img" alt=""/></p> */}

              </div>
              </div>
             
              <div className="choose-sk2">
              <button className="BTN-Next" onClick={() => stepState(2)}>Back</button>
              <button className="BTN-Next Blue_BTN-Next" onClick={() => stepState(4)}>Next</button>
              <button className="BTN-Quit" onClick={() => applyChanges()}>Apply</button>
              </div>

              </div>
              <div className={step == 4 ? "sidebar activesidebar" : "sidebar"} id="Increase_Next">

                      <div className="profile-qus">
                      <p>Quiz 3/3</p>
                      <h3>The Snow condition you'll shred</h3>
                      
                      <div className="choose-sk choose-sk3 Scroll-Part">
                        {snowcondition_html}
                      </div>
                      </div>
                      <div className="choose-sk2">
                           <button className="BTN-Next" onClick={() => stepState(3)}>Back</button>
                           <button className="BTN-Next Blue_BTN-Next Btn_back">Next</button>
                           <button className="BTN-Quit" onClick={() => applyChanges()}>Apply</button>
              </div>
              </div>
              </div>

        </React.Fragment>
    )
}


export default Getstarted;