const PositionCalculator2 = (value , height) => {

    var center = ((height)/2 - (height * 0.3953125))/2

    if(value < center)
    {
        return value * 2.5
    }

    else
    {
        return value * 3.5
    }

 }

 export default PositionCalculator2 