import React , {useState, useEffect}  from 'react'
import loading from '../assest/loading.gif'
import good from '../assest/good.png'
import premium_boards_img from '../assest/premium_board.svg'


const Mask = ({ mask , width , height , color,size , tail , tip ,onClick1,tailtip,image,view,lineview}) => {
  
  const [tail_main,Settail] = useState();
  const [tip_main, Settip] = useState();

  const fakeCdpr = () => {

    let tailcm = tail/10;
    let tipcm = tip/10;
    let tailpx;
    let tippx;

    if(tailtip != null)
    {
      tailpx =  tailtip * tailcm/size
      tippx = tailtip * tipcm/size

      Settail(tailpx) 
      Settip(tippx)
    }

    // console.log(tailpx)
  }

  useEffect(() => {
    fakeCdpr()
},[height,tailtip])

  // fakeCdpr()
  
  return (

    <div className="product-graphics-box" data-img-src={good} style={{
      width : width,
      height : size == 156 ? height - 7 : height,
    }}

    >
      <div className={view == "Graphics" && !lineview ? 'product-graphics-ima' : "product-graphics-ima product-graphics-hidden"} style={{
        backgroundImage: `url(${image})`,
        backgroundSize : "100% 100%"
        }}>

      </div>
      <div className="product-graphics-img"
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        background : color
      }}
      onClick={onClick1}
      >

      </div>
      <div className="bar" style={{
        background: color
      }} >
        <h2>{size}</h2>
      </div>
      <div className="tail-bar"
      style={{
        width : tail_main ? tail_main : 0,
        background : color,
        marginBottom : size > 150 ? 0 : -(164 - size)
      }}
      >
<h2>{tail}</h2>
      </div>

      <div className="tip-bar"
      style={{
        width : tip_main ? tip_main : 0,
        background : color,
        marginTop : size > 150 ? 0 : -(164 - size)
        
      }}
      >
          <h2>{tip}</h2>
      </div>

        </div>

  )

}


const Productgraphics = (props) => {
    const [deminition , setdeminition] = useState({})
    const [tailtip, settailtip] = useState({})  
    let [image, setImage] = useState("null")
    let height_size = 170;

 
   

    let [imageActive, setActive] = useState(false)


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
                  if(props.switchoption == "Snowboard")
                  {
                    main_height = (props.canvasHeight)/1.35;
                  }
                  else
                  {
                    main_height = (props.canvasHeight)/1.6;
                  }
                  main_width = main_height * 40/height_size;
                  properties = {width : main_width * props.tail/400 , height : main_height * props.size / 170}
                }
                else
                {
                  if(props.switchoption == "Snowboard")
                  {
                    main_height = (props.canvasHeight)/1.35;
                  }
                  else
                  {
                    main_height = (props.canvasHeight)/1.6;
                  }
                  main_width = main_height * 40/height_size;
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
                setActive(true)

              }
              

               
              if(props.canvasWidth < 1800)
              {
                if(props.switchoption == "Snowboard")
                  {
                    main_height = (props.canvasHeight)/1.35;
                  }
                  else
                  {
                    main_height = (props.canvasHeight)/1.6;
                  }
                main_width = main_height * 40/height_size;
                properties = {width : main_width * props.tail/400 , height : main_height * props.size / height_size}
              }
              else
              {
                if(props.switchoption == "Snowboard")
                {
                  main_height = (props.canvasHeight)/1.35;
                }
                else
                {
                  main_height = (props.canvasHeight)/1.6;
                }
                main_width = main_height * 40/height_size;
                properties = {width : main_width * props.tail/400 , height : main_height * props.size / height_size}
              }

              settailtip(properties);
              
          }

          img2.onload = function() {
            let properties;
            let main_width;
            let main_height;

           
  
                if(props.lineview)
                {
                  if(window.innerWidth > 900)
                  {
              
                  main_width = (props.canvasHeight)/1.2;

                  // const widthratio = this.width / 700

                  const actuallwidth = main_width * props.size / height_size
                  const ratio = this.height / this.width


                  properties = {width :  actuallwidth, height : ratio * actuallwidth}
  
                  setdeminition(properties);
                  setImage(img2)
                  setActive(true)
                  }

                  else
                  {
                    main_width = props.canvasWidth * 85/100;

                  // const widthratio = this.width / 700

                    const actuallwidth = main_width * props.size / height_size
                    const ratio = this.height / this.width


                    properties = {width :  actuallwidth, height : ratio * actuallwidth}
    
                    setdeminition(properties);
                    setImage(img2)
                    setActive(true)
                  }

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
        <img src={premium_boards_img} className='premium-brand-img' alt='premium-brand'/>
          {
            imageActive   ?  <Mask size={props.size} mask={'url(' + image.src + ')'} width={deminition.width} height={deminition.height} tailtip={tailtip.height} color={props.color}
            tail={props.tail}
            tip={props.tip}  
            onClick1={props.onClick1}
            image={props.url3}  
            view={props.view} 
            lineview={props.lineview}   
            />  : <img src={loading} alt='loading..'/>
          }
        
         </div>
      </div>
       
    )
}


export default Productgraphics;