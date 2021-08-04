import React , {useEffect} from 'react'
import Header2 from '../header2';

// images 
import chevronleft from '../../assest/chevron-left.svg'
import chevronright from '../../assest/chevron-right.svg'
import map from '../../assest/img-map.png'
import areamap from '../../assest/area-map.jpg'
import img2 from '../../assest/img2.jpg'
import img3 from '../../assest/img3.jpg'
import img4 from '../../assest/img4.jpg'
import img5 from '../../assest/img5.jpg'
import img6 from '../../assest/img6.jpg'
import img7 from '../../assest/img7.jpg'
import img8 from '../../assest/img8.jpg'
import img9 from '../../assest/img9.jpg'



const BoardComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <React.Fragment>
            <Header2/>
            <div className="white-page container">
          <div className="row">
               <div className="one-heading">
                <h1>01</h1>
                <h1>BOard  COmpOnents</h1>
               </div>
               <div className="one-text">
                   <p>There is no formula for determining which style of each snowboard component is right for a particular rider. However, each physical component of the board contributes to how it moves in the snow and moves with the rider’s body so each should be considered before making a purchase.</p>
               </div>
          </div>
          <div className="row">
            <div className="left-right">
                <div className="active"><img src={chevronleft} alt=""/></div>
                <div><img src={chevronright} alt=""/></div>
            </div>
        </div>
          <div className="row">
              <div className="guide-map">
                  <img src={map} alt=""/>
              </div>
          </div>
        </div>

        <div className="white-page container">
          <div className="row">
              <div className="base-meterial">
                  <h2>BASE MATERIAL</h2>
                  <p>i.	Defined</p>
                  <span>Snowboard bases are constructed of plastic, but there are two different ways in which the plastic may be put together - extruded or sinter  </span>
                   <p>ii.Options</p>
                   <span>Extruded boards are constructed of pieces of plastic melted together. Sintered boards are constructed of pieces of plastic pressed together..</span>
                   <p>iii.Applied</p>
                   <span>Extruded boards are cheaper, easier to maintain, slower, and easier to control so should be used by casual or park riders and beginners. Sintered boards are more expensive, more demanding to maintain, and faster so should be used by those interested in high speeds and advanced riders.</span>
              </div>
          </div>
          <div className="row">
              <div className="compare-img">
                  <img src={img2} alt=""/>
              </div>
          </div>
          <div className="row">
              <div className="only-peragraphs">
                  <p>An extruded board has pieces of plastic melted together making it less dense and less porous. These attributes cause the board to be slower and easier to maintain. </p>
                  <p> Extruded boards are cheaper to manufacture and thus cheaper for a consumer to purchase. Extruded boards are also easier to maintain and cheaper to repair. </p>
                  <p> Extruded boards cannot hold wax as well as sintered boards because they are less porous, but that also makes them a smoother ride without waxing than a sintered board because they aren’t taking on as much moisture while riding. If maintained well and regularly waxed, a sintered board will perform faster than an extruded board.
                    Extruded boards are great for those who don’t care about speed such as beginners, more casual riders, or freestylers. </p> 
                    <p> A sintered board has pieces of plastic pressed together making it more dense and more porous. These attributes cause the board to be faster and more durable.</p>
                    <p>Sintered boards are more expensive to manufacture and thus more expensive for a consumer to purchase. Sintered boards are also harder to maintain, require more waxing, and are more expensive to repair.</p> 
                    <p>Sintered boards are more porous and hold wax better, but need to be waxed often to maintain the smooth ride that allows for quicker speeds.</p>
                    <p>A sintered board would be the preference for all-mountain riders or freeriders who seek out powder, speed, or backcountry; racers; and intermediate to advanced riders.  </p>
              </div>
          </div>
          <div className="row">
            <div className="base-meterial">
                <h2>SURFACE AREA</h2>
                <p>i.	Defined</p>
                <span>A measure of the total area a snowboard occupies. </span>
                 <p>ii.Options</p>
                 <span>This is calculated by ShredMetrix using a proprietary formula utilizing data points provided by board manufacturers.</span>
                 <p>iii.Applied</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
            </div>
        </div>
        <div className="row">
            <div className="compare-area">
                <img src={areamap} alt=""/>
            </div>
        </div>
        <div className="row">
            <div className="only-peragraphs">
                <p>While board length is often used as a single measurement for determining the correct board size for renters and beginners, board length must always be considered along with board width to be used as a valuable variable.  </p>
                <p>Contrary to previous methodologies or common behaviors, it is not appropriate to compare board length and rider height to determine board size. Instead, the surface area of the board should be compared to rider weight as this is what most impacts how the board will perform in snow with the rider on it. </p>
                <p>Oftentimes, board manufacturers provide a sizing chart comparing rider weight and board length, which works well for a quick reference, but is inadequate. The sizing chart ShredMetrix provides compares the estimated board surface area to rider weight to provide a more adequate sizing evaluation.</p>
            </div>
        </div>
        <div className="main-box row">
            <div className="blue-box">
                <div className="first-bluebox">Rider Weight</div>
                <div className="first-bluebox"></div>
                <div className="first-bluebox"></div>
            </div>
            <div className="blue-box">
                <div className="first-bluebox">Board Surface Area</div>
                <div className="first-bluebox"></div>
                <div className="first-bluebox"></div>
            </div>
        </div>
        <div className="row">
            <div className="base-meterial">
                <h2>LENGTH</h2>
                <p>i.	Defined</p>
                <span>The measure of a snowboard from nose to tail at the centermost point. </span>
                <div className="compare-img2">
                    <img src={img3} alt=""/>
                </div>
                 <p>ii.Options</p>
                 <span>Length does not have nearly as much effect on board behavior as surface area does. The surface area takes length into account, but also measures width and allows for a more accurate comparison between rider weight and a board measurement.</span>
                 <p>iii.Applied</p>
                 <span>The heavier a rider is, the more surface area he or she will need in order to ‘float’ atop snow instead of pushing through it. The more surface area a board has, the more it will ‘float’ atop snow.</span>
                 <p>iv.	Learn More</p>
                 <span>While board length is often used as a single measurement for determining the correct board size for renters and beginners, board length must always be considered along with board width to be used as a valuable variable.</span>
                 <span>Contrary to previous methodologies or common behaviors, it is not appropriate to compare board length and rider height to determine board size. Instead, the surface area of the board should be compared to rider weight as this is what most impacts how the board will perform in snow with the rider on it.</span>
                 <span>Rider style and snow conditions should be taken into consideration for board length. In general, a shorter board is more apt for riding in the park, freeriding, and more stability while a longer board is great for groomers and speed.</span>
                 <span>Oftentimes, board manufacturers provide a sizing chart comparing rider weight and board length, which works well for a quick reference, but is inadequate. <strong> The sizing chart ShredMetrix provides compares the estimated board surface area to rider weight to provide a more adequate sizing evaluation.</strong></span>
            </div>
        </div>
        <div className="main-box row">
            <div className="blue-box">
                <div className="first-bluebox">Rider Weight</div>
                <div className="first-bluebox"></div>
                <div className="first-bluebox"></div>
            </div>
            <div className="blue-box">
                <div className="first-bluebox">Board Surface Area</div>
                <div className="first-bluebox"></div>
                <div className="first-bluebox"></div>
            </div>
        </div>
        <div className="row">
            <div className="base-meterial">
                <h2>WIDTH AT INSERTS</h2>
                <p>i.	Defined</p>
                <span>The measurement from edge to edge of the board where the bindings will be attached. </span>
                <p>ii.Options</p>
                <span>This measurement is given in millimeters and can be compared to boot size using a chart.</span>
                <div className="compare-img2">
                    <img src={img4} alt=""/>
                </div>
                 <p>iii.Applied</p>
                 <span>
                    This measurement is given in millimeters and can be compared to boot size using a chart.
                 </span>
                 
                 <div className="number-box">
                     <div className="first-inbox">
                         <div className="in-top">Mens US Boot size</div>
                         <div className="blank-number">7.0</div>
                         <div className="blank-number">7.5</div>
                         <div className="blank-number">8.0</div>
                         <div className="blank-number">8.5</div>
                         <div className="blank-number">9.0</div>
                         <div className="blank-number">9.5</div>
                         <div className="blank-number">10.0</div>
                         <div className="blank-number">11.0</div>
                         <div className="blank-number">11.5</div>
                         <div className="blank-number">12.0</div>
                         <div className="blank-number">12.5</div>
                         <div className="blank-number">13.0</div>
                         <div className="blank-number">13.5</div>
                         <div className="blank-number">14.0</div>
                         <div className="blank-number">14.5</div>
                     </div>
                     <div className="first-inbox">
                        <div className="in-top">Men’s Foot Size (CM)</div>
                         <div className="blank-number">25cm</div>
                         <div className="blank-number">25.5cm</div>
                         <div className="blank-number">26cm</div>
                         <div className="blank-number">26.5cm</div>
                         <div className="blank-number">27cm</div>
                         <div className="blank-number">27.5cm</div>
                         <div className="blank-number">28cm</div>
                         <div className="blank-number">28.5cm</div>
                         <div className="blank-number">29cm</div>
                         <div className="blank-number">29.5cm</div>
                         <div className="blank-number">30cm</div>
                         <div className="blank-number">30.5cm</div>
                         <div className="blank-number">31cm</div>
                         <div className="blank-number">31.5cm</div>
                         <div className="blank-number">32cm</div>
                     </div>
                     <div className="first-inbox">
                        <div className="in-top">Waist Width Range</div>
                         <div className="blank-number">238 to 244</div>
                         <div className="blank-number">240 to 246</div>
                         <div className="blank-number">242 to 248</div>
                         <div className="blank-number">244 to 250</div>
                         <div className="blank-number">246 to 252</div>
                         <div className="blank-number">247 to 253</div>
                         <div className="blank-number">268 to 274</div>
                         <div className="blank-number">249 to 255</div>
                         <div className="blank-number">252 to 258</div>
                         <div className="blank-number">254 to 260</div>
                         <div className="blank-number">257 to 246</div>
                         <div className="blank-number">260to 266</div>
                         <div className="blank-number">262 to 268</div>
                         <div className="blank-number">265 to 271</div>
                         <div className="blank-number">268 to 274</div>
                     </div>
                     <div className="first-inbox">
                        <div className="in-top">Ideal Waist Width</div>
                         <div className="blank-number">242mm</div>
                         <div className="blank-number">243mm</div>
                         <div className="blank-number">244mm</div>
                         <div className="blank-number">245mm</div>
                         <div className="blank-number">246mm</div>
                         <div className="blank-number">247mm</div>
                         <div className="blank-number">248mm</div>
                         <div className="blank-number">249mm</div>
                         <div className="blank-number">250mm</div>
                         <div className="blank-number">251mm</div>
                         <div className="blank-number">252mm</div>
                         <div className="blank-number">253mm</div>
                         <div className="blank-number">254mm</div>
                         <div className="blank-number">255mm</div>
                         <div className="blank-number">256mm</div>
                     </div>
                 </div>
                 <div className="number-box">
                    <div className="first-inbox">
                        <div className="in-top">Womens US Boot size</div>
                        <div className="blank-number">7.0</div>
                        <div className="blank-number">7.5</div>
                        <div className="blank-number">8.0</div>
                        <div className="blank-number">8.5</div>
                        <div className="blank-number">9.0</div>
                        <div className="blank-number">9.5</div>
                        <div className="blank-number">10.0</div>
                        <div className="blank-number">11.0</div>
                    </div>
                    <div className="first-inbox">
                       <div className="in-top">Women’s Foot Size (CM)</div>
                        <div className="blank-number">25cm</div>
                        <div className="blank-number">25.5cm</div>
                        <div className="blank-number">26cm</div>
                        <div className="blank-number">26.5cm</div>
                        <div className="blank-number">27cm</div>
                        <div className="blank-number">27.5cm</div>
                        <div className="blank-number">28cm</div>
                        <div className="blank-number">28.5cm</div>
                      
                    </div>
                    <div className="first-inbox">
                       <div className="in-top">Waist Width Range</div>
                        <div className="blank-number">238 to 244</div>
                        <div className="blank-number">240 to 246</div>
                        <div className="blank-number">242 to 248</div>
                        <div className="blank-number">244 to 250</div>
                        <div className="blank-number">246 to 252</div>
                        <div className="blank-number">247 to 253</div>
                        <div className="blank-number">268 to 274</div>
                        <div className="blank-number">249 to 255</div>
                    </div>
                    <div className="first-inbox">
                       <div className="in-top">Ideal Waist Width</div>
                        <div className="blank-number">242mm</div>
                        <div className="blank-number">243mm</div>
                        <div className="blank-number">244mm</div>
                        <div className="blank-number">245mm</div>
                        <div className="blank-number">246mm</div>
                        <div className="blank-number">247mm</div>
                        <div className="blank-number">248mm</div>
                        <div className="blank-number">249mm</div>
                    </div>
                </div>
                
                 <p>iv.	Learn More</p>
                 <span>A board’s width at inserts is to be compared to the rider’s foot and/or boot size to determine what is most appropriate. Measuring on the underside of the board, a board’s width should be as close as possible to the length of the rider’s bare feet. Boots add 1-2 centimeters of length to the toe-side and heel-side of the boot causing boots to have just that much overhang on each side of the board.</span>
                 <span>A snowboard is maneuvered by downforce being applied to the edges, thus the toe and heel of each boot should be at the edges for maximum control. A board that is too narrow will lead to boots dragging in the snow and an inevitable tumble. A board that is too wide will be less responsive and feel tasking to turn on because the weight will be inside the edges instead of on the edges of the board.</span>
                </div>   
            </div> 
            <div className="row">
                <div className="base-meterial">
                    <h2>WAIST WIDTH</h2>
                    <p>i.	Defined</p>
                    <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </span>
                    <div className="compare-img2">
                        <img src={img5} alt=""/>
                    </div>
                     <p>ii.Options</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                     <p>iii.Applied</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div> 
            <div className="row">
                <div className="base-meterial">
                    <h2>TAIL WIDTH</h2>
                    <p>i.	Defined</p>
                    <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </span>
                    <div className="compare-img2">
                        <img src={img6} alt=""/>
                    </div>
                     <p>ii.Options</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                     <p>iii.Applied</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div> 
            <div className="row">
                <div className="base-meterial">
                    <h2>SHAPE</h2>
                    <p>i.	Defined</p>
                    <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </span>
                     <p>ii.Options</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                     <div className="compare-img3">
                        <p>(ALSO ASYMMETRICAL TWIN & MOUNTAIN TWIN)</p>
                        <img src={img7} alt=""/>
                     </div>
                     <p>iii.Applied</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div> 
            <div className="row">
                <div className="base-meterial">
                    <h2>PROFILE</h2>
                    <p>i.	Defined</p>
                    <span>How the board is shaped from a side-view. This affects how much pop a board will have for jumps, how maneuverable it will be, and its vulnerability to catching an edge. </span>
                     <p>ii.Options</p>
                     <span>There are four main snowboard profiles: camber, rocker, flat, and hybrid.</span>
                     <div className="compare-img4">
                        <img src={img8} alt=""/>
                     </div>
                     <p>iii.Applied</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                     <p>1. CAMBER BOARD </p>
                     <span>These boards touch the ground near the tips and curve up in the middle between the bindings. A rider’s weight pushes the curve down, but retains some pop for bumps and jumps.</span>
                     <p>2. ROCKER BOARD</p>
                     <span>Rockers are the opposite of cambers: they curve down in the middle and up at the nose and tail to remain out of the snow and increase maneuverability.</span>
                     <p>3. FLAT BOARD </p>
                     <span> Flat boards only curve up slightly at the tips and have no curve in the center. This makes them turn easier than other board profiles, but also vulnerable to catching an edge.</span>
                     <p>4. HYBRID BOARD </p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div> 
            <div className="row">
                <div className="base-meterial">
                    <h2>FLEX</h2>
                    <p>i.	Defined</p>
                    <span>How maneuverable a board is or isn’t. </span>
                     <p>ii.Options</p>
                     <span>Boards are defined vaguely as soft or stiff.</span>
                     <p>iii.Applied</p>
                     <span>A soft board is more flexible and is best for beginners or trick riders. A stiff board is better at holding edges and making turns as well as remaining stable at high speeds which makes it best for advanced riders or those staying mostly grounded and riding aggressively.</span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div>
            <div className="row">
                <div className="base-meterial">
                    <h2>SIDECUT RADIUS</h2>
                    <p>i.	Defined</p>
                    <span>The shortcut radius is a measure of how big of a circle the board would make if the curve of the edge was extended to a complete circle. </span>
                     <p>ii.Options</p>
                     <span>Boards with narrower waists have deep sidecuts (lower number of cm) and can turn more quickly and precisely than those with wider waists. This makes deep sidecuts ideal for beginners and park riders who need the board to be maneuverable and quick to respond. Boards with wider waists have mellow sidecuts (higher number of cm) and aren’t as quick to react but handle powder, faster speeds, and tougher terrain better because of their increased surface area.There are four types of sidecuts: radial, progressive, asymmetrical, and multiple.</span>
                     <div className="compare-img4">
                        <img src={img9} alt=""/>
                     </div>
                     <p>1.  RADIAL SIDECUT </p>
                     <span>These boards touch the ground near the tips and curve up in the middle between the bindings. A rider’s weight pushes the curve down, but retains some pop for bumps and jumps.</span>
                     <p>2. PROGRESSIVE SIDECUT</p>
                     <span>Rockers are the opposite of cambers: they curve down in the middle and up at the nose and tail to remain out of the snow and increase maneuverability.</span>
                     <p>3.  ASYMMETRICAL SIDECUT  </p>
                     <span> Flat boards only curve up slightly at the tips and have no curve in the center. This makes them turn easier than other board profiles, but also vulnerable to catching an edge.</span>
                     <p>  4. MULTIPLE SIDECUTS</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                     <p>iii.Applied</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                     <p>iv.	Learn More</p>
                     <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                </div>
            </div> 
      </div>

        </React.Fragment>     
    )
}


export default BoardComponent;