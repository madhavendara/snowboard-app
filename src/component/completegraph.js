import React, { useState, useEffect, useRef } from "react"

const Completegraph = (props) => {

    const canvasfull = useRef(null)
    const [canvaswidth] = useState(160)
    useEffect(() => {
          const ctx = canvasfull.current.getContext("2d")
        for(let i = 0; i < props.activeGraphics.length; i++)
            {
              if(i === 0)
              {
                let bar = props.activeGraphics[i].graph
                for(let j = 0; j < bar.length; j++)
                {
                    ctx.fillStyle = props.colorSets[i]
                    ctx.fillRect(0,(j*26 + 10),canvaswidth * bar[j] / 100,15)

                    ctx.font = "14px Poppins"
                    ctx.fillStyle = "black"
                    ctx.textAlign = "center"
                    ctx.fillText(bar[j] + '%',(canvaswidth * bar[j] / 100 - 20), (j*26 + 23))
                }
  
              }

              else
              {
                let bar = props.activeGraphics[i].graph
                for(let j = 0; j < bar.length; j++)
                {
                    let prestate = 0;
                   
                    for(let k = 0; k <= i-1; k++)
                    {
                      let allstates = props.activeGraphics[k].graph
                      prestate += canvaswidth * allstates[j] / 100
                    }


                  
                    ctx.fillStyle = props.colorSets[i]
                    ctx.fillRect(prestate,(j*26 + 10),canvaswidth * bar[j] / 100,15)

                    ctx.font = "14px Poppins"
                    ctx.fillStyle = "black"
                    ctx.textAlign = "center"
                    ctx.fillText(bar[j] + '%',(canvaswidth * bar[j] / 100 - 20) + prestate, (j*26 + 23))
                }
              }
                     
            }

          

        //   for(let i = 0; i < bar.length; i++)
        //   {
        //     for(let j = 0; j < (props.width / 4); j++)
        //     {
        //       ctx.fillStyle = props.color
        //       ctx.fillRect(j*4,(i*26 + 10),0.5,15)
        //     }
    
    
        //     ctx.fillStyle = props.color
        //     ctx.fillRect(0,(i*26 + 10),props.width * bar[i] / 100,15)
    
    
        //     ctx.font = "14px Poppins"
        //     ctx.fillStyle = "black"
        //     ctx.textAlign = "center"
        //     ctx.fillText(bar[i] + '%',(props.width * bar[i] / 100 - 20), (i*26 + 23))
        //   }
          
    
      }, [props.activeGraphics.length])



    return (

        <div className="complete-graph">
        <canvas className="fullgraph-canvas"
          ref={canvasfull}
          width={canvaswidth * (props.activeGraphics.length - 0.7)}
          height={200}
        />

        {/* {console.log(props.activeGraphics)} */}
    </div>   
    )
}


export default Completegraph;