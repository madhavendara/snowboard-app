
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
              ctx.fillStyle = props.color
              ctx.fillRect(j*4,(i*26 + 10),0.5,15)
            }

            ctx.fillStyle = props.color

            if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              {
                  ctx.fillRect(0,(i*26 + 10),props.width * 100 / 100,15)
              }
              else
              {
                  ctx.fillRect(0,(i*26 + 10),props.width * bar[i].precentage / 100,15)
              }

              
            if(barActive && i+1 === barActive)
            {
              ctx.font = "800 14px Poppins"
              ctx.fillStyle = "white"
              ctx.textAlign = "left"
              if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              {
                ctx.fillText("N/A",props.width * 100 / 100 - 30, (i+1) * 26 - 3)
              }
              else if (bar[i].precentage < 25)
              {
                ctx.fillText(bar[i].amount + bar[i].name ,props.width * bar[i].precentage / 100 + 5, (i+1) * 26 - 3) 
              }
              else if(bar[i].precentage < 45)
              {
                ctx.fillText(bar[i].amount + bar[i].name,props.width * bar[i].precentage / 100 - 15, (i+1) * 26 - 3)
              }
              else
              {
                ctx.fillText(bar[i].amount  + bar[i].name,props.width * bar[i].precentage / 100 - 70, (i+1) * 26 - 3)
              }


              // ctx.fillStyle = "transparent"
              // ctx.fillRect((props.width * bar[i].precentage / 100 - 20), (i+1)*26 - 30, 50, 20);

              // ctx.font = "14px Poppins"
              // ctx.fillStyle = "black"
              // ctx.textAlign = "center"
              // ctx.fillText(bar[i].amount  ,(props.width * bar[i].precentage / 100 - 20), (i+1) *26 - 14)

            }

            else
            {
              ctx.font = "500 14px Poppins"
              ctx.fillStyle = "white"
              ctx.textAlign = "left"

              if(bar[i].precentage == 'undefined' ||  bar[i].precentage == "null" || isNaN(bar[i].precentage))
              {
                ctx.fillText("N/A",props.width * 100 / 100 - 30, (i+1) * 26 - 3)
              }

              else if (bar[i].precentage < 25)
              {
                ctx.fillText(bar[i].amount + bar[i].name ,props.width * bar[i].precentage / 100 + 5, (i+1) * 26 - 3) 
              }
              else if(bar[i].precentage < 45)
              {
                ctx.fillText(bar[i].amount + bar[i].name ,props.width * bar[i].precentage / 100 - 15, (i+1) * 26 - 3) 
            
              }

              else
              {
                ctx.fillText(bar[i].amount + bar[i].name ,props.width * bar[i].precentage / 100 - 70, (i+1) * 26 - 3)
  
              }
              
            }

            
          }

      
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