const PositionCalculator2 = (value , height,col) => {

    var center = ((height)/2 - (height * 0.3953125))/2

    
if(!col)
{
    if(value < center)
    {
        return value * 2.5
    }

    else
    {
        return value * 3.5
    }
}

else
{
    if(value < center)
    {
        return value * 2.84
    }

    else
    {
        return value * 3.84
    }  
}
    

 }

 export default PositionCalculator2 