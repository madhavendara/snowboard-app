
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
          if(y <= i * 25 && barActive != i)
          {
            setbarActive(i);
          }
        }

        else
        {
          if(y <= i * 25 && y >= (i-1) * 25 && barActive != i)
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
      // "size" : 148,
      //   "EffectiveEdge" : 1095,
      //   "TipWidth" : 290,
      //   "WaistWidth" : 242, 
      
      let options = ["size" , "Effective Edge" , "Tip Width" , "Waist Width"]

      ctx.clearRect(0,0,props.width,bar.length * 20 + 40)

      for(let i = 0; i < bar.length; i++)
      {
        for(let j = 0; j < (props.width / 4); j++)
        {
          ctx.fillStyle = props.color
          ctx.fillRect(j*4,(i*26 + 10),0.5,15)
        }

        ctx.fillStyle = props.color
        ctx.fillRect(0,(i*26 + 10),props.width * bar[i].precentage / 100,15)


  

        if(barActive && i+1 == barActive)
        {
          ctx.font = "800 14px Poppins"
          ctx.fillStyle = "black"
          ctx.textAlign = "left"
          ctx.fillText(options[i] ,5, (i+1) * 26 - 3)

          ctx.fillStyle = "white"
          ctx.fillRect((props.width * bar[i].precentage / 100 - 40), (i+1)*26 - 30, 50, 20);

          ctx.font = "14px Poppins"
          ctx.fillStyle = "black"
          ctx.textAlign = "center"
          ctx.fillText(bar[i].amount ,(props.width * bar[i].precentage / 100 - 20), (i+1) *26 - 14)

        }

        else
        {
          ctx.font = "400 14px Poppins"
          ctx.fillStyle = "black"
          ctx.textAlign = "left"
          ctx.fillText(options[i] ,5, (i+1) * 26 - 3)
        }

        
      }
      
    }
  }, [props.color , barActive])

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