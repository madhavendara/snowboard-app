
import React, { useState, useEffect, useRef } from "react"

const Graph = (props) => {

  const [bar] = useState(props.graph)
  // const [width] = useState(150)
  const canvas = useRef(null)
  const [barActive , setbarActive] = useState(null)

// useEffect(() => {

//   const getCordd = (ev) => {
//     let bond = ev.target.getBoundingClientRect();
  
//     let x = ev.clientX - bond.left
//     let y = ev.clientY - bond.top
  
//     mouse.x = x;
//     mouse.y = y;
  
//     console.log(mouse)
  
//   }
//   if(canvas)
//   {
//     canvas.addEventListener('mousemove' , getCordd)
//   }
  
// },[])

function MouseOver(event) {
  let codmobile =  canvas.current.getBoundingClientRect()
  let y = event.clientY - codmobile.top
  let x = event.clientX - codmobile.left
  
  for(let i = 1; i <= 4; i++)
  {
    if(y < 95 && y > 5 && x < props.width - 20 && x > 5)
    {
          if(i === 1)
        {
          if(y <= i * 25 && barActive !== i)
          {
            setbarActive(i);
          }
        }

        else
        {
          if(y <= i * 25 && y >= (i-1) * 25 && barActive !== i)
          {
            setbarActive(i);
          }
        }
    }
  
    else
    {
      setbarActive(null);
    }
    
  }

  // console.log(barActive)
}


function drawRoundedBar(ctx, x, y, width, height, radius, color1, color2) {

  if (!Number.isFinite(width) || width <= 0) {
    // console.error("Invalid width:", width);
    return;
  }

  const halfRadius = radius / 2;
  const gradient = ctx.createLinearGradient(x, y, x + width, y);

  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  ctx.beginPath();
  ctx.moveTo(x + halfRadius, y);
  ctx.lineTo(x + width - halfRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + halfRadius);
  ctx.lineTo(x + width, y + height - halfRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - halfRadius, y + height);
  ctx.lineTo(x + halfRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - halfRadius);
  ctx.lineTo(x, y + halfRadius);
  ctx.quadraticCurveTo(x, y, x + halfRadius, y);
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.fill();
}


function getGradientColorStops(gradientString) {
  // Extract the color stops from the gradient string using regular expressions
  const colorStops = gradientString.match(/#[A-Fa-f0-9]{6}/g);
  return colorStops;
}


// function MouseOut() {
//   setbarActive(null)
// }


  useEffect(() => {

    if(canvas) {
          const ctx = canvas.current.getContext("2d")
          ctx.clearRect(0,0,props.width,bar.length * 20 + 40)

          for(let i = 0; i < bar.length; i++)
          {
            for(let j = 0; j < (props.width / 4); j++)
            {
              // ctx.fillStyle = props.color
              // ctx.fillRect(j*4,(i*26 + 10),0.5,15)
            }

            const colors = getGradientColorStops(props.color);
            ctx.fillStyle = "white"

            if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              {
                  //  ctx.fillRect(0,(i*26 + 10),props.width * 100 / 100,15);
                  ctx.font = "500 14px Poppins"
                   ctx.fillText(bar[i].name,0, (i*26 + 10) + 14);

                   ctx.fillRect(45,(i*26 + 10) + 8,5,2);

                   drawRoundedBar(ctx,60, (i*26 + 10), props.width * bar[i].precentage / 100, 20, 10,colors[0],colors[1]);
                   
              }
              else
              {
                if(bar[i].precentage > 40) {
                  ctx.font = "500 14px Poppins"
                  ctx.fillText(bar[i].name,0, (i*26 + 10) + 14);
                   ctx.fillRect(45,(i*26 + 10) + 8,5,2);
                  
                  drawRoundedBar(ctx,60, (i*26 + 10), props.width * bar[i].precentage / 100 - 80, 20, 10,colors[0],colors[1]);
                }
                else
                {
                  ctx.font = "500 14px Poppins"
                  ctx.fillText(bar[i].name,0, (i*26 + 10) + 14);
                  ctx.fillRect(45,(i*26 + 10) + 8,5,2);
                

                  //drawRoundedBar(ctx,x, y, width, height, radius,color)

                  drawRoundedBar(ctx,60, (i*26 + 10), props.width * bar[i].precentage / 100, 20, 10,colors[0],colors[1]);
                }
               
              }

              
            // if(barActive && i+1 === barActive)
            // {
              // ctx.font = "800 14px Poppins"
              // ctx.fillStyle = "white"
              // ctx.textAlign = "left"
              // if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              // {
              //   ctx.fillText(bar[i].amount,props.width * 100 / 100 - 30, (i+1) * 26 - 3);
              // }
              // else if (bar[i].precentage < 25)
              // {
              //   ctx.fillText(bar[i].amount + bar[i].name ,props.width * bar[i].precentage / 100 + 5, (i+1) * 26 - 3); 
              // }
              // else if(bar[i].precentage < 45)
              // {
              //   ctx.fillText(bar[i].amount + bar[i].name,props.width * bar[i].precentage / 100 - 15, (i+1) * 26 - 3);
              // }
              // else
              // {
              //   ctx.fillText(bar[i].amount  + bar[i].name,props.width * bar[i].precentage / 100 - 90, (i+1) * 26 - 3);
              // }


              // // ctx.fillStyle = "transparent"
              // // ctx.fillRect((props.width * bar[i].precentage / 100 - 20), (i+1)*26 - 30, 50, 20);

              // // ctx.font = "14px Poppins"
              // // ctx.fillStyle = "black"
              // // ctx.textAlign = "center"
              // // ctx.fillText(bar[i].amount  ,(props.width * bar[i].precentage / 100 - 20), (i+1) *26 - 14)

              ctx.font = "500 14px Poppins"
              ctx.fillStyle = "white"
              ctx.textAlign = "left"

              if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              {
                ctx.fillText(bar[i].amount,props.width * 100 / 100 + 30, (i+1) * 26 - 3);
              }
              else if(bar[i].precentage > 70) {
                ctx.fillText(bar[i].amount ,props.width * bar[i].precentage / 100 - 10, (i+1) * 26 - 3);
              }
              else
              {
                ctx.fillText(bar[i].amount  ,props.width * bar[i].precentage / 100 + 70, (i+1) * 26 - 3); 
              }
              // else if(bar[i].precentage < 45)
              // {
              //   ctx.fillText(bar[i].amount  ,props.width * bar[i].precentage / 100 - 5, (i+1) * 26 - 3);
              // }

              // else
              // {
              //   ctx.fillText(bar[i].amount ,props.width * bar[i].precentage / 100 - 10, (i+1) * 26 - 3);
              // }

              if(bar[i].name == "Taper") {
                console.log(bar[i].precentage)
              }
            
          }

          ctx.fillStyle = "white"
          ctx.fillRect(50,10,1,bar.length * 20 + 20);


      
    }
    // eslint-disable-next-line
  }, [props.color , barActive , props.bar , props.lineview])

  return (
        <canvas className="graph-canvas"
          ref={canvas}
          width={props.width}
          height={bar.length * 20 + 40}
          onMouseMove={MouseOver}
        />
  )
}

export default Graph