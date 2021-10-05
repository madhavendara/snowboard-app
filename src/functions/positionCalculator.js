const PositionCalculator = (value , sidebarshow , sidebarSize, windowWidth) => {

    var center;

    if(!sidebarshow)
    {
        center = ((window.innerWidth) - (sidebarSize + window.innerWidth * 0.109809663))/2
    }

    else
    {
        center = ((window.innerWidth)/2 - (window.innerWidth * 0.209809663))/2
    }

    let value_1

    if(!sidebarshow)
    {
        value_1 = value
    }

    else
    {
        value_1 = value * 0.9
    }

    if(value_1 > center * 0.75)
     {
       
        if(window.innerWidth < 2400)
        {
            
            return -(windowWidth * 1/2) + value_1 * 2.5
        } 
        
        else
        {
            if(!sidebarshow)
            {
                return -(windowWidth * 1/2) + value_1 * 2
            }
            else
            {
            
                return -(windowWidth * 1/2) + value_1 * 2.5
                
            }
            
        }
     }
    //  
     else if(value_1 > center/2.5 && value_1 < center * 0.75)
     {
 
        
        if(window.innerWidth < 2400)
        {
            if(!sidebarshow)
            {
                return -(windowWidth * 1.5/3) + value_1 * 2
            }

            else
            {
                return -(windowWidth * 1.5/3) + value_1 * 1.5
            }
            
        } 
        
        else
        {
            
            return -(windowWidth * 1.5/3) + value_1 * 1
        }
     }
     
     else
     {
        
        if(window.innerWidth < 2400)
        {

            return -(windowWidth * 2.4/3) + value_1 * 2
        } 
        
        else
        {
            return -(windowWidth * 2.4/3) + value_1 * 1.5
        }
        
     } 

 }

 export default PositionCalculator 