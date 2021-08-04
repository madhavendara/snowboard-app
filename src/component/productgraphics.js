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
        const img2 = new Image();

        img.src = props.url;
        img2.src = props.url2;
  
        img.onload = function() {
          let properties

              if(!props.lineview)
              {
                if(props.canvasHeight > 800)
                {
                  const ratio = this.height / this.width
                  properties = {width : props.canvasHeight * 0.0875 , height : (props.canvasHeight * 0.0875) * ratio}
                }

                else
                {
                  const ratio = this.height / this.width
                  properties = {width : 70 , height : 70 * ratio}
                }

                setdeminition(properties);
                setImage(img)
              }
          }

          img2.onload = function() {
            let properties
  
                if(props.lineview)
                {
                  const widthratio = this.width / 400
                  const actuallwidth = props.canvasWidth * widthratio
                  const ratio = this.height / this.width
                  properties = {width : actuallwidth , height : ratio * actuallwidth}
  
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
         <Mask mask={'url(' + image.src + ')'} width={deminition.width} height={deminition.height} color={props.color} />
         </div>
      </div>
       
    )
}


export default Productgraphics;