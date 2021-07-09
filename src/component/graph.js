
import React, { useState, useEffect, useRef } from "react"

const Graph = (props) => {

  const [bar] = useState(props.graph)
  // const [width] = useState(150)
  const canvas = useRef(null)


  useEffect(() => {

    if(canvas) {
      const ctx = canvas.current.getContext("2d")
      for(let i = 0; i < bar.length; i++)
      {
        for(let j = 0; j < (props.width / 4); j++)
        {
          ctx.fillStyle = props.color
          ctx.fillRect(j*4,(i*26 + 10),0.5,15)
        }


        ctx.fillStyle = props.color
        ctx.fillRect(0,(i*26 + 10),props.width * bar[i] / 100,15)


        ctx.font = "14px Poppins"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(bar[i] + '%',(props.width * bar[i] / 100 - 20), (i*26 + 23))
      }
      
    }
  }, [props.color])

  return (
        <canvas className="graph-canvas"
          ref={canvas}
          width={props.width}
          height={bar.length * 20 + 40}
        />
  )
}

export default Graph