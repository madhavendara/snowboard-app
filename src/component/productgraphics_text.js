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
      width = props.canvasWidth / 4
    }

    function getGradientColorStops(gradientString) {
      // Extract the color stops from the gradient string using regular expressions
      const colorStops = gradientString.match(/#[A-Fa-f0-9]{6}/g);
      return colorStops;
    }



    let colors = getGradientColorStops(props.color)
    


    return (
      <div className="snowboard-graphics-container">
           <div className="graphic-text">
            {/* <img src={close} onClick={() => props.productadded(props.id)} style={{color : props.color}} className='remove-btn' /> */}
            <div onClick={() => props.productadded(props.id)} style={{backgroundImage : `linear-gradient(90deg ,${colors[0]} 0%, ${colors[1]} 59.9%)`}} className='remove-btn'></div>
            <Graph color={props.color} width={width} graph={props.graph} />
            <h4 style={{backgroundImage : `linear-gradient(90deg ,${colors[0]} 0%, ${colors[1]} 59.9%)`}}>{props.title}</h4> 
            <h5 style={{backgroundImage : `linear-gradient(90deg ,${colors[0]} 0%, ${colors[1]} 59.9%)`}}>{props.size}cm</h5>
            <a href={props.url} className='button-product-url'>Shop</a>
           </div>

      
      </div>
       
    )
}


export default Productgraphics2;