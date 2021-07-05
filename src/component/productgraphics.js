import React , {useState, useEffect}  from 'react'

const Mask = ({ mask , width , height , color}) => (
    <div className="product-graphics-box"  style={{
      WebkitMaskImage: mask,
      maskImage: mask,
      width : width,
      height : height,
      background : color
    }}>
        </div>

  )


const Productgraphics = (props) => {
    const [deminition , setdeminition] = useState({})  
    let [image, setImage] = useState("null")

    
    
    useEffect(() => {
        const img = new Image();
        img.src = props.url;
       

        img.onload = function() {
          let properties;
          if(props.canvasHeight > 800)
          {
            properties = {width : this.width , height : this.height}
          }

          else
          {
            const ratio = this.height / this.width
            properties = {width : 70 , height : 70 * ratio}
          }
            
            setdeminition(properties);
            setImage(img)
          }

      }, [props.canvasHeight,props.url])

      useEffect(() => {
        if(image)
        {
            console.log('done')
        }
      },[image])
    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    return (
      <div className="snowboard-graphics-container">
        <div className="graphics-img-container">
         <Mask mask={'url(' + image.src + ')'} width={deminition.width} height={deminition.height} color={props.color} />
         </div>
         <div className="graphic-text">
            <h4 style={{color : props.color}}>{props.title}</h4> 
            <h5>{props.size}</h5>
         </div>
  
      </div>
       
    )
}


export default Productgraphics;