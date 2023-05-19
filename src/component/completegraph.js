import React, { useState, useEffect, useRef } from "react"

const Completegraph = (props) => {

    const size_canvas = useRef(null)
    const taper_canvas = useRef(null)
    const tipwidth_canvas = useRef(null)
    const wraistWidth_canvas = useRef(null)

    const [size_range,Setsize_range] = useState([]);
    const [tip_range,Settip_range] = useState([]);
    const [tapper_range,Setapper_range] = useState([]);
    const [wrist_range,Setwrist_range] = useState([]);
    
    const [canvaswidth] = useState(window.innerWidth * 0.025)
  
    useEffect(() => {
        const ctx = size_canvas.current.getContext("2d")
         const ctx1 = taper_canvas.current.getContext("2d")
        const ctx2 = tipwidth_canvas.current.getContext("2d")
        const ctx3 = wraistWidth_canvas.current.getContext("2d")
        
        let size = [];
        let tapper= [];
        let tipwidth= [];
        let wristwidth= [];


        for(let i = 0; i < 4; i++)
            {

             let bars = props.activeBars[i];
             if(bars)
             {
              size.push(bars[0])
              tapper.push(bars[1])
              tipwidth.push(bars[2])
              wristwidth.push(bars[3])
             }
            
              // console.log(props.colorSets) 
              
            }

            let sizeRange = [0,0];
            sizeRange[0] = 200;

            for (let i = 0; i < size.length; i++){

              if (size[i]["amount"] > sizeRange[1]) {
                sizeRange[1] = size[i]["amount"]
              }

              if (size[i]["amount"] < sizeRange[0]) {
                sizeRange[0] = size[i]["amount"]
              }
              
          }
          Setsize_range(sizeRange);

           
            let tipRange = [0,0];
            tipRange[0] = 400;

            for (let i = 0; i < tipwidth.length; i++){

              if (tipwidth[i]["amount"] > tipRange[1]) {
                tipRange[1] = tipwidth[i]["amount"]
              }

              if (tipwidth[i]["amount"] < tipRange[0]) {
                tipRange[0] = tipwidth[i]["amount"]
              }
              
          }

          Settip_range(tipRange);


          let tapperRange = [0,0];
          tapperRange[0] = 70;

            for (let i = 0; i < tapper.length; i++){

              if (tapper[i]["amount"] > tapperRange[1]) {
                tapperRange[1] = tapper[i]["amount"]
              }

              if (tapper[i]["amount"] < tapperRange[0]) {
                tapperRange[0] = tapper[i]["amount"]
              }
              
          }
            
          Setapper_range(tapperRange);

          let wristRange = [0,0];
          wristRange[0] = 400;

            for (let i = 0; i < wristwidth.length; i++){

              if (wristwidth[i]["amount"] > wristRange[1]) {
                wristRange[1] = wristwidth[i]["amount"]
              }

              if (wristwidth[i]["amount"] < wristRange[0]) {
                wristRange[0] = wristwidth[i]["amount"]
              }
              
          }
      
          Setwrist_range(wristRange);
         
            for(let i = 0; i < size.length; i++){
              let graph_max = (sizeRange[1] - sizeRange[0]) + (sizeRange[1] - sizeRange[0]) * 1.1
              let graph_size = (size[i]["amount"] - sizeRange[0]) + (sizeRange[1] - sizeRange[0]) * 1.1
              
              ctx.transform(1, 0, 0, -1, 0, 200);
              let precentage = (graph_size / graph_max * 100)

               let size1 = size[i]["amount"]
              
                ctx.fillStyle = "white"
                ctx.fillRect(0,0,1,precentage / 100 * 150)
                ctx.fillRect(0,0,canvaswidth * (props.activeBars.length),1)

                const colors = getGradientColorStops(props.colorSets[i]);

                  

                const gradient = ctx1.createLinearGradient(200,0,200,100);

                gradient.addColorStop(0, colors[0]);
                gradient.addColorStop(1, colors[1]);
                   
                    ctx.fillStyle = gradient

                    ctx.fillRect(i*canvaswidth,0,canvaswidth,precentage / 100 * 150)
                    ctx.transform(1, 0, 0, -1, 0,200)
                    ctx.font = "800 12px Poppins"
                    ctx.fillStyle = "white"
                    ctx.textAlign = "center"

                    ctx.fillText(size1,i*canvaswidth + canvaswidth * 0.5, 190 - (precentage / 100 * 150))
                  
            }


            for(let i = 0; i < tapper.length; i++){

              let tapper_max = (tapperRange[1] - tapperRange[0]) + (tapperRange[1] - tapperRange[0]) * 1.1
              let tapper_size = (tapper[i]["amount"] - tapperRange[0]) + (tapperRange[1] - tapperRange[0]) * 1.1
              ctx1.transform(1, 0, 0, -1, 0, 200);
              let precentage = (tapper_size / tapper_max * 100)

              let size1 = (tapper[i]["amount"] / 10).toFixed(1)
              
                ctx1.fillStyle = "white"
                ctx1.fillRect(0,0,1,precentage / 100 * 150)
                ctx1.fillRect(0,0,canvaswidth * (props.activeBars.length),1)


               // getGradientColorStops
                    const colors = getGradientColorStops(props.colorSets[i]);

                  

                    const gradient = ctx1.createLinearGradient(200,0,200,100);

                    gradient.addColorStop(0, colors[0]);
                    gradient.addColorStop(1, colors[1]);
                    
                    ctx1.fillStyle = gradient
                    ctx1.fillRect(i*canvaswidth,0,canvaswidth,precentage / 100 * 150)
                    ctx1.transform(1, 0, 0, -1, 0,200)
                    ctx1.font = "800 12px Poppins"
                    ctx1.fillStyle = "white"
                    ctx1.textAlign = "center"

                    ctx1.fillText(size1,i*canvaswidth + canvaswidth * 0.5, 190 - (precentage / 100 * 150))
           }

            for(let i = 0; i < tipwidth.length; i++){

              let tip_max = (tipRange[1] - tipRange[0]) + (tipRange[1] - tipRange[0]) * 1.1
              let tip_size = (tipwidth[i]["amount"] - tipRange[0]) + (tipRange[1] - tipRange[0]) * 1.1
              ctx2.transform(1, 0, 0, -1, 0, 200);
              let precentage = (tip_size / tip_max * 100)

              let size1 = (tipwidth[i]["amount"] / 10).toFixed(1)
              
                ctx2.fillStyle = "white"
                ctx2.fillRect(0,0,1,precentage / 100 * 150)
                ctx2.fillRect(0,0,canvaswidth * (props.activeBars.length),1)

                const colors = getGradientColorStops(props.colorSets[i]);

                  

                const gradient = ctx1.createLinearGradient(200,0,200,100);

                gradient.addColorStop(0, colors[0]);
                gradient.addColorStop(1, colors[1]);
                   
                    ctx2.fillStyle = gradient

                    ctx2.fillRect(i*canvaswidth,0,canvaswidth,precentage / 100 * 150)
                    ctx2.transform(1, 0, 0, -1, 0,200)
                    ctx2.font = "800 12px Poppins"
                    ctx2.fillStyle = "white"
                    ctx2.textAlign = "center"

                    ctx2.fillText(size1,i*canvaswidth + canvaswidth * 0.5, 190 - (precentage / 100 * 150))
           }



           for(let i = 0; i < wristwidth.length; i++){

            let wrist_max = (wristRange[1] - wristRange[0]) + (wristRange[1] - wristRange[0]) * 1.1
            let wrist_size = (wristwidth[i]["amount"] - wristRange[0]) + (wristRange[1] - wristRange[0]) * 1.1
            ctx3.transform(1, 0, 0, -1, 0, 200);
            let precentage = (wrist_size / wrist_max * 100)

            let size1 = (wristwidth[i]["amount"] / 10).toFixed(1)
            
              ctx3.fillStyle = "white"
              ctx3.fillRect(0,0,1,precentage / 100 * 150)
              ctx3.fillRect(0,0,canvaswidth * (props.activeBars.length),1)

                const colors = getGradientColorStops(props.colorSets[i]);

                  

                const gradient = ctx1.createLinearGradient(200,0,200,100);

                gradient.addColorStop(0, colors[0]);
                gradient.addColorStop(1, colors[1]);
                   
                    ctx3.fillStyle = gradient
                  ctx3.fillRect(i*canvaswidth,0,canvaswidth,precentage / 100 * 150)
                  ctx3.transform(1, 0, 0, -1, 0,200)
                  ctx3.font = "800 12px Poppins"
                  ctx3.fillStyle = "white"
                  ctx3.textAlign = "center"

                  ctx3.fillText(size1,i*canvaswidth + canvaswidth * 0.5, 190 - (precentage / 100 * 150))
         }





        //    for(let i = 0; i < tapper.length; i++){
        //     let precentage = tapper[i]["amount"] / 60 * 100
        //      let size1 = tapper[i]["amount"]+"CM"
             

        //      ctx1.transform(1, 0, 0, -1, 0, 200);
        //      ctx1.fillStyle = "white"
        //      ctx1.fillRect(0,0,1,200)
        //      ctx1.fillRect(0,0,canvaswidth * (props.activeBars.length),1)


                
        //          ctx1.fillStyle = props.colorSets[i]
        //          ctx1.fillRect(i*canvaswidth,0,50,precentage / 100 * 150)
        //          ctx1.transform(1, 0, 0, -1, 0,200)
        //          ctx1.font = "800 12px Poppins"
        //          ctx1.fillStyle = "white"
        //          ctx1.textAlign = "center"
        //          if(tapper[i]["amount"] < 50)
        //          {
        //            ctx1.fillText(size1,i*canvaswidth + 25, 45 + (100 - tapper[i]["amount"]))
        //          }
        //          else
        //          {
        //            ctx1.fillText(size1,i*canvaswidth + 25, 50 + (100 - tapper[i]["amount"]))
        //          }
        //  }

       
  // eslint-disable-next-line
      }, [props.activeBars.length])


      function getGradientColorStops(gradientString) {
        // Extract the color stops from the gradient string using regular expressions
        const colorStops = gradientString.match(/#[A-Fa-f0-9]{6}/g);
        
        return colorStops;
      }

      return (

        <div className="complete-graph" data-activestatus={props.activestatus} data-graph={props.graph} data-callpaseds={props.callpaseds} >
          {/* {props.names} */}
        <div className="size-container">
          <p className="Roted-text">{size_range[1]} cm</p>
            <canvas className="fullgraph-canvas"
              ref={size_canvas}
              width={canvaswidth * (props.activeBars.length)}
              height={200}
            />
            <h1>Size</h1>
        </div>

        <div className="size-container">
        <p className="Roted-text">{tapper_range[1]/10} cm</p>
            <canvas className="fullgraph-canvas"
              ref={taper_canvas}
              width={canvaswidth * (props.activeBars.length)}
              height={200}
            />
            <h1>Tapper</h1>
        </div>

        <div className="size-container">
        <p className="Roted-text">{tip_range[1]/10} cm</p>
            <canvas className="fullgraph-canvas"
              ref={tipwidth_canvas}
              width={canvaswidth * (props.activeBars.length)}
              height={200}
            />
            <h1>Tip width</h1>
        </div>

        <div className="size-container">
        <p className="Roted-text rored-text2">{wrist_range[1]/10} cm</p>
            <canvas className="fullgraph-canvas"
              ref={wraistWidth_canvas}
              width={canvaswidth * (props.activeBars.length)}
              height={200}
            />
            <h1>Wrist width</h1>
        </div>
        

        {/* {console.log(props.activeGraphics)} */}
    </div>   
    )
}


export default Completegraph;