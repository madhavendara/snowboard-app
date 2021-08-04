import React , {useEffect} from 'react'
import Header2 from '../header2';

import chevronleft from '../../assest/chevron-left.svg'
import chevronright from '../../assest/chevron-right.svg'

const Riderstyle = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>

        <Header2/>
        <div className="white-page black-page third-pageclick container">
          <div className="row">
               <div className="one-heading">
                <h1>03</h1>
                <h1>RIDER STYLE/BOARD TYPE</h1>
               </div>
               <div className="one-text">
                   <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
          </div>
          <div className="row">
            <div className="left-right">
            <div className="active"><img src={chevronleft} alt=""/></div>
                <div><img src={chevronright} alt=""/></div>
            </div>
        </div>
        </div>

        <div className="white-page black-page third-pageclick container">
            <div className="row">
                <div className="base-meterial">
                    <h2>BEGINNER/ALL-MOUNTAIN</h2>
                    <p>1.	Overview</p>
                    <span>All-mountain boards are not specialized for any one terrain but instead perform equally well across the whole mountain. They are designed to provide both speed and stability and are great for beginners or those who need one board to do it all.	 </span>
                     <p>2.	Board Size</p>
                     <span>Generally shorter and narrower is better for beginners because it is less taxing to maneuver the board and progression can occur quickly. </span>
                     <p>3.	Board Shape</p>
                     <span>All-mountain boards are often directional twin-tips. This means the tip and tail of the board are the same length and width so one can easily ride either direction, but the tip is slightly tapered up for downhill speed.</span>
                     <p>4.	Board Profile</p>
                     <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                     <p>5.	Snow Conditions</p>
                     <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                </div>
            </div>
          <div className="row">
            <div className="base-meterial">
                <h2>PARK FREESTYLE</h2>
                <p>1.	Overview</p>
                <span>All-mountain boards are not specialized for any one terrain but instead perform equally well across the whole mountain. They are designed to provide both speed and stability and are great for beginners or those who need one board to do it all.	 </span>
                 <p>2.	Board Size</p>
                 <span>Generally shorter and narrower is better for beginners because it is less taxing to maneuver the board and progression can occur quickly. </span>
                 <p>3.	Board Shape</p>
                 <span>All-mountain boards are often directional twin-tips. This means the tip and tail of the board are the same length and width so one can easily ride either direction, but the tip is slightly tapered up for downhill speed.</span>
                 <p>4.	Board Profile</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                 <p>5.	Snow Conditions</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                 <p>6.	Learn More</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
            </div>
        </div>

        <div className="row">
            <div className="base-meterial">
                <h2>FREERIDE</h2>
                <p>1.	Overview</p>
                <span>All-mountain boards are not specialized for any one terrain but instead perform equally well across the whole mountain. They are designed to provide both speed and stability and are great for beginners or those who need one board to do it all.	 </span>
                 <p>2.	Board Size</p>
                 <span>Generally shorter and narrower is better for beginners because it is less taxing to maneuver the board and progression can occur quickly. </span>
                 <p>3.	Board Shape</p>
                 <span>All-mountain boards are often directional twin-tips. This means the tip and tail of the board are the same length and width so one can easily ride either direction, but the tip is slightly tapered up for downhill speed.</span>
                 <p>4.	Board Profile</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                 <p>5.	Snow Conditions</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                 <p>6.	Learn More</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
            </div>
        </div>
       
        
      </div>  

    </React.Fragment>  
    )
}


export default Riderstyle;