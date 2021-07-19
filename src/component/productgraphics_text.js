import React   from 'react'
import Graph from './graph'



const Productgraphics2 = (props) => {


    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    return (
      <div className="snowboard-graphics-container">
           <div className="graphic-text">
            <h4 style={{color : props.color}}>{props.title}</h4> 
            <h5>{props.size}</h5>
         </div>

         <Graph color={props.color} width={props.canvasWidth / 5.3} graph={props.graph} />
      </div>
       
    )
}


export default Productgraphics2;