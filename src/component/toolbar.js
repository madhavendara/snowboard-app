import React from 'react'

const Toolbar = (props) => {
    return (
        <div className="toolbar-container">
            <button className="toolbar-options collapsible" 
            onClick={props.collapsd}
            data-button-active={props.callapsible}
            
            ></button>
            <button className="toolbar-options base" 
            onClick={props.base}
            data-button-active={props.alignBottom}
            ></button>
            <button className="toolbar-options graph"
            onClick={props.graphfun}
            data-button-active={props.graphactive}
            ></button>
        </div>      
    )
}


export default Toolbar;