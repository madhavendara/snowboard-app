import React, { useState, useEffect, useRef } from "react"

const Completegraph = (props) => {

    const canvasfull = useRef(null)
    const [canvaswidth] = useState(160)
  
    useEffect(() => {
        const ctx = canvasfull.current.getContext("2d")

        for(let i = 0; i < 4; i++)
            {

              let bars_precentage = [];
              let color_array = [];
              
              for(let j = 0; j < props.activeBars.length; j++)
              {
                  let bars = props.activeBars[j];
                  bars_precentage.push({precentage : bars[i].precentage , order : j,values : bars[i].amount})
          
                  


              }

              bars_precentage = bars_precentage.sort(function(a, b){return a.precentage - b.precentage})
          

          
              // 1 1 1 1

      
              for(let l = 0; l < bars_precentage.length; l++)
              {
                let precentage = bars_precentage[l].precentage;
                let value = bars_precentage[l].values

                let prestate = 0;

                for(let k = 0; k <= l-1; k++)
                    {
                      let offset = bars_precentage[k].precentage > 5 ? bars_precentage[k].precentage : 10
                      prestate +=  canvaswidth * offset / 100
                    }

                    let precentage_;
                    if(precentage < 5)
                    {
                      precentage_ = canvaswidth * 10 / 100
                      ctx.fillStyle = props.colorSets[bars_precentage[l].order]
                      console.log('dd')
                    }
                    else
                    {
                      precentage_ = canvaswidth * precentage / 100
                      ctx.fillStyle = props.colorSets[bars_precentage[l].order]
                    }

                   
                    if(i == 0)
                    {
                      ctx.fillRect(prestate,(i*30 + 10),precentage_,15)

                    ctx.font = "800 14px Poppins"
                    ctx.fillStyle = "white"
                    ctx.textAlign = "center"
                    ctx.fillText(value,precentage_ - (precentage_ * 0.5) + prestate, (i*30 + 10)+13)
                    }
                    else
                    {
                      ctx.fillRect(prestate,(i*28 + 8),precentage_,15)

                      ctx.font = "800 14px Poppins"
                      ctx.fillStyle = "white"
                      ctx.textAlign = "center"
                      ctx.fillText(value,precentage_ - (precentage_ * 0.5) + prestate, (i*28  + 8)+13)
                    }
                    

                  // console.log(bars[i].precentage+" and"+prestate)

              }




              // console.log(props.colorSets) 
              
            }

          
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