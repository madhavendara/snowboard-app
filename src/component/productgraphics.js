import React , {useState, useEffect}  from 'react'



const Mask = ({ mask , width , height , color,size , tail , tip}) => {
  
  const [tail_main,Settail] = useState();
  const [tip_main, Settip] = useState();

  const fakeCdpr = () => {

    let tailcm = tail/10;
    let tipcm = tip/10;
    let tailpx;
    let tippx;

    if(height != null)
    {
      tailpx =  height * tailcm/size
      tippx = height * tipcm/size

      Settail(tailpx) 
      Settip(tippx)
    }

    
        
    // console.log(tailpx)
  }

  useEffect(() => {
    fakeCdpr()
},[height])

  // fakeCdpr()
  
  return (

    <div className="product-graphics-box"  style={{
      width : width,
      height : size == 156 ? height - 7 : height,
    }}
    
    onClick={() => console.log('it')}
    >
      <div className="product-graphics-img"
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        background : color
      }}
      >

      </div>
      <div className="bar" style={{
        background : color
      }} >
        <h2>{size}</h2>
      </div>
      <div className="tail-bar"
      style={{
        width : tail_main ? tail_main : 0,
        background : color
      }}
      >
<h2>{tail}</h2>
      </div>

      <div className="tip-bar"
      style={{
        width : tip_main ? tip_main : 0,
        background : color
      }}
      >
          <h2>{tip}</h2>
      </div>

        </div>

  )

}


const Productgraphics = (props) => {
    const [deminition , setdeminition] = useState({})  
    let [image, setImage] = useState("null")



    useEffect(() => {
        const img = new Image();
        const img2 = new Image();

        img.src = props.url;
        img2.src = props.url2;
  
        img.onload = function() {
          let properties;
          let main_width;
          let main_height;

              if(!props.lineview)
              {

                if(props.canvasWidth < 1800)
                {
                  main_height = (props.canvasHeight)/1.7;
                  main_width = main_height * 40/170;
                  properties = {width : main_width * props.tail/400 , height : main_height * props.size / 170}
                }
                else
                {
                  main_height = (props.canvasHeight)/1.7;
                  main_width = main_height * 40/170;
                  properties = {width : main_width * props.tail/400 , height : main_height * props.size / 170}
                }


                // if(props.canvasHeight > 800)
                // {
                //   const ratio = this.height / this.width
                //   properties = {width : props.canvasHeight * 0.0875 , height : (props.canvasHeight * 0.0875) * ratio}
                // }

                // else
                // {
                //   const ratio = this.height / this.width
                //   properties = {width : 70 , height : 70 * ratio}

                //   console.log(props.canvasHeight)
                // }

                setdeminition(properties);
                setImage(img)
              }

              
          }

          img2.onload = function() {
            let properties;
            let main_width;
            let main_height;

           
  
                if(props.lineview)
                {
                  main_width = (props.canvasHeight)/1.2;

                  // const widthratio = this.width / 700

                  const actuallwidth = main_width * props.size / 170
                  const ratio = this.height / this.width


                  properties = {width :  actuallwidth, height : ratio * actuallwidth}
  
                  setdeminition(properties);
                  setImage(img2)

                  console.log(this.width)
                }
            }

        
 // eslint-disable-next-line
      }, [props.canvasHeight,props.url ,props.lineview ])


      // else
      // {
      //
      // }

    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    return (
      <div className="snowboard-graphics-container">
    
        <div className="graphics-img-container">
         <Mask size={props.size} mask={'url(' + image.src + ')'} width={deminition.width} height={deminition.height} color={props.color}
         tail={props.tail}
         tip={props.tip}          
         />
         </div>
      </div>
       
    )
}


export default Productgraphics;