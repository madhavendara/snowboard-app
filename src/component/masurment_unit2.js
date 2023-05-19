import React   from 'react'




const Masurment_unit2 = (props) => {




    // const changeWidth = (imgWidth,imgHeight) => {
    //     var yourImg = document.getElementById('step1');
    //     if(yourImg && yourImg.style) {
    //         yourImg.style.height = imgHeight + 'px';
    //         yourImg.style.width = imgWidth + 'px';
    //     }

    let max_height = 75;
    let actual_width = max_height * props.tip / 350

    return (
        <div class="tip-bar" style={{
            background: props.color,
            width: actual_width
          }}
          
          ><h2>{props.tip}</h2></div>
       
    )
}


export default Masurment_unit2;