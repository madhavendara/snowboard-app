import React   from 'react'
import Graph from './graph'
import close from "../assest/x.svg"



const Productgraphics2 = (props) => {


    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    let width;

    if(window.innerWidth < 900)
    {
      width = props.canvasWidth / 2.3
    }
    else
    {
      width = props.canvasWidth / 6
    }
    return (
      <div className="snowboard-graphics-container">
           <div className="graphic-text">
            <img src={close} onClick={() => props.productadded(props.id)} className='remove-btn' />
            <h4 style={{color : props.color}}>{props.title}</h4> 
            <h5>{props.size}cm</h5>
           </div>

         <Graph color={props.color} width={width} graph={props.graph} />
      </div>
       
    )
}


export default Productgraphics2;