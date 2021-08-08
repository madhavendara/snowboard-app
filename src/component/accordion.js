import React , { useState } from 'react'




export default function Accordion(props) {
    const [active,setactive] = useState(false)

    return (
        <div className={active ? "mainAccordion active-content" : "mainAccordion"}>
             <div className="Accordion-label" onClick={() => setactive(!active)}>
             {props.title}
             </div>

             {props.children}
        </div>     
    )
}
