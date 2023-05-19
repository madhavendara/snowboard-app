import React   from 'react'




const Masurment_unit = (props) => {




    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    let max_height = window.innerHeight * 70/100;
    let actual_height = max_height * props.size / 200

    return (
        <div class="bar" style={{
            background: props.color,
            height: actual_height
          }}
          
          ><h2>{props.size}</h2></div>
       
    )
}


export default Masurment_unit;