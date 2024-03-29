import React from 'react'
import swag from '../assest/swag.png'

const Toolbar2 = (props) => {
    return (

        <>
        <div className="toolbar-container">

  
        {window.innerWidth > 900 ? <button className="toolbar-options nav_bar"
            onClick={props.openNav}
            > 
            </button> : null}

        {/* <button className="toolbar-options lineview" 
            onClick={props.lineviewfun}
            data-button-active={props.lineview}
            
            >
                {
                props.walkthrough === 3 ? <>
                <div className="blue-box-2">   
                    <h2>Switch from “Outline View” to “Profile View”</h2>
               
                <button className="gotit-btn" onClick={props.tabline}>Got it</button>  
                <button className="skipit-btn" onClick={props.tabfour}>Skip Demo</button>  
        
                </div>    
                </> : null
                }
            </button> */}


            
            <button className="toolbar-options collapsible" 
            onClick={props.collapsd}
            data-button-active={props.callapsible}
            
            >
                {
                props.walkthrough === 4 ? 
                <>
                    <div class="blue-box-2">
                    <h2>Switch from Overlay to side-by-side</h2>
                    <button class="gotit-btn" onClick={props.tabOne}>Got it</button>
                    <button className="skipit-btn" onClick={props.tabfour}>Skip Demo</button>  
                    </div>
                </>
                 : null
                }
            </button>
            <button className={!props.lineview ? "toolbar-options base" : "toolbar-options base-left"} 
            onClick={props.base}
            data-button-active={props.alignBottom}
            >

                {
                props.walkthrough === 5 ? 
                <>
                    <div class="blue-box-2">
                    <h2>Switch from center to bottom Alignment</h2>
                    <button class="gotit-btn" onClick={props.tabTwo}>Got it</button>
                    <button className="skipit-btn" onClick={props.tabfour}>Skip Demo</button>  
                    </div>
                </>
                 : null
                }

            </button>
            <button className="toolbar-options graph"
            onClick={props.graphfun}
            data-button-active={props.graphactive}
            >

                {
                props.walkthrough === 6 ? 
                <>
                    <div class="blue-box-2">
                    <h2>See board Comparison graph</h2>
          
                    <button class="gotit-btn" onClick={props.tabthree}>Got it</button>
                    <button className="skipit-btn" onClick={props.tabfour}>Skip Demo</button>  
                    </div>
                </>
                 : null
                }
            </button>

           <button className="toolbar-options zoom"
            onClick={props.setZoom}
            data-button-active={props.zoomMode}
            >

{
                props.walkthrough === 7 ? 
                <>
                    <div class="blue-box-2">
                    <h2>You can zoom boards by activating zoom option and click any boards</h2>
          
                    <button class="gotit-btn" onClick={props.tabfour}>Got it</button>
                    <button className="skipit-btn" onClick={props.tabfour}>Skip Demo</button>  
                    </div>
                </>
                 : null
                }
            </button>

            {window.innerWidth > 900 ? <a href='/support' className="toolbar-options support_bar"
            > 
            </a> : null}

        </div>  

        {
            props.walkthrough === 8 ? <div className="walkthrough-content walkthrough-content-transparent">
                <div className="walkthrough-box">
                    <img src={swag} className="image-congrest" alt="Congratulations!!"/>
                    <h1>Congratulations!!</h1>
                    <p>Now you’re ready to get started with shredmetrix</p>
                    <button className='getStarted-btn' onClick={props.walkthrough_terminate}>Close</button>
                </div>    
                </div>  : null
        }   
        
        {
            props.walkthrough >= 3 ? <div class="backdrop"></div> : null
        }

        </>
    )
}


export default Toolbar2;