import React , { useEffect, useState } from 'react'




const Accordion = (props) => {
    const [active,setactive] = useState(false);


    useEffect(() => {
        if(props.title == "Price" || props.title == "Ability Level" || props.title == "LENGTH")
        {
            setactive(true);
        }
    },[]);
   
    return (
        <div className={active ? "mainAccordion active-content" : "mainAccordion"}>
             <div className="Accordion-label" onClick={() => setactive(!active)}>
             {props.title}
             </div>

             {props.children}
        </div>     
    )
}

export default Accordion;
