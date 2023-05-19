import React, { useState, useEffect, useRef } from "react"

const Completegraph = (props) => {

    const canvasfull = useRef(null)
    const [canvaswidth] = useState(160)
  
    useEffect(() => {
        const ctx = canvasfull.current.getContext("2d")

        for(let i = 0; i < props.activeBars.length; i++)
            {
              if(i === 0)
              {
                let bar = props.activeBars[i]
                console.log(bar)
                
                for(let j = 0; j < bar.length; j++)
                {

                let precentage_;

                if(bar[j].precentage < 5)
                {
                  precentage_ = canvaswidth * 10 / 100
                  ctx.fillStyle = "rgba(255, 255, 255, 0)"
                }

                else
                {
                  precentage_ = canvaswidth * bar[j].precentage / 100
                  ctx.fillStyle = props.colorSets[i]
                }
                   
                    ctx.fillRect(0,(j*26 + 10),precentage_,15)

                    ctx.font = "800 14px Poppins"
                    ctx.fillStyle = "white"
                    ctx.textAlign = "center"
                    ctx.fillText(bar[j].amount,precentage_ - (precentage_ * 0.5), (j*26 + 23))
                }

                
  
              }

              else
              {
                let bar = props.activeBars[i]
                console.log(bar)
                for(let j = 0; j < bar.length; j++)
                {
                    let prestate = 0;
                   
                    for(let k = 0; k <= i-1; k++)
                    {
                      let allstates = props.activeBars[k]

                      let precentage_1;

                      if(allstates[j].precentage < 5)
                      {
                        precentage_1 = 10
                      }
                      else
                      {
                        precentage_1 =  allstates[j].precentage
                      }

                      prestate += canvaswidth * precentage_1 / 100
                    }

                    let precentage_2;

                    if(bar[j].precentage > 5)
                    {
                      precentage_2 = canvaswidth * bar[j].precentage / 100
                      ctx.fillStyle = props.colorSets[i]
                      
                    }
    
                    else
                    {
                      precentage_2 = canvaswidth * 10 / 100
                      ctx.fillStyle = "rgba(255, 255, 255, 0)"
                    }
                  
       
                    
                    ctx.fillRect(prestate,(j*26 + 10),precentage_2,15)
                    ctx.font = "800 14px Poppins"
                    ctx.fillStyle = "white"
                    ctx.textAlign = "center"
                    ctx.fillText(bar[j].amount,(precentage_2 - (precentage_2 * 0.5)) + prestate, (j*26 + 23))
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
          // console.log(props.activeBars)
  // eslint-disable-next-line
      }, [props.activeBars.length])



    return (

        <div className="complete-graph" data-activestatus={props.activestatus} data-graph={props.graph} data-callpaseds={props.callpaseds} >
          {props.names}
        <canvas className="fullgraph-canvas"
          ref={canvasfull}
          width={canvaswidth * (props.activeBars.length)}
          height={200}
        />

        {/* {console.log(props.activeGraphics)} */}
    </div>   
    )
}


export default Completegraph;