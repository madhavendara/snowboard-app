import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

// images import
import left from '../assest/left.svg'
import right from '../assest/right.svg'
import boat from '../assest/boat.png'
import Vector2 from '../assest/Vector2.svg'
import second from '../assest/second.png'
import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'
import insta from '../assest/insta.svg'


const Education = () => {
    const [slideState,setSlide] = useState("left-part")

    return (
        <section id="snowboard-education">
            <div className='snowboard-menu container'>
                <Header/>
            </div>
            <div className="wall-Education">
                <div className="container main-div">
                    <div className="row">
                        <div className="heading-text">
                            <h1>LEARN SNOWBOARD SCIENCE</h1>
                        </div>
                    </div>
                </div>

                <div className="card-position container">
                    <div className="row">
                    <div className="left-right">
                        <a href="#" className="active" onClick={(e) => {setSlide("left-part"); e.preventDefault()}}>
                            <img src={left} alt=""/>
                        </a>
                        <a href="#" onClick={(e) => {setSlide("right-part"); e.preventDefault()}}>
                            <img src={right} alt=""/>
                        </a>
                    </div>
                    </div>
                    <div className={slideState + " row"}>
                        <div className="card-group first">
                            <h1>01</h1>
                            <h1>BOard 
                                COmpOnents</h1>
                                <div className="boat-position">
                                    <img src={boat} alt=""/>
                                </div>
                        <div className="move-in">
                        <Link to="/snowboardeducation/boardcomponent" className="button">
                        <img src={Vector2} alt=""/>
                        </Link>
   
                        </div>
                        </div>
                        <div className="card-group second">
                            <h1>02</h1>
                            <h1>HOW CONDITIONS AFFECT BOARD CHOICE</h1>
                            <div className="move-in">
                                <Link to="/snowboardeducation/conditionaffect" className="button">
                                    <img src={Vector2} alt=""/>
                                </Link>            
                            </div>
                        </div>
                        <div className="card-group third">
                            <h1>03</h1>
                            <h1>RIDER STYLE/BOARD TYPE</h1>
                            <div className="third-position">
                                <img src={second} alt=""/>
                            </div>
                            <div className="move-in">
                            <Link to="/snowboardeducation/riderstyle" className="button">
                                    <img src={Vector2} alt=""/>
                            </Link>  
                        </div>
                        </div>
                        <div className="card-group second">
                            <h1>04</h1>
                            <h1>HOW TO USE SHREDMETRIX
                                /CHOOSE A BOARD</h1>
                                <div className="move-in">
                            <Link to="/snowboardeducation/chooseboard" className="button">
                                    <img src={Vector2} alt=""/>
                            </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-wall container-fluid">
                <div className="row">
                    <div className="contact-text">
                        <h3>LOGO.</h3>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                    </div>
                    <div className="contact-menu">
                        <ul>
                            <li><a href="#about">About US</a></li>
                            <li><a href="#service">INVEST</a></li>
                            <li><a href="#contact">REVIEW</a></li>
                            <li><a href="#feedback">MORE PAGES</a></li>
                        </ul>  
                    </div>
                </div>
               <div className="boder row">
                    <div className="social-icon">
                        <img src={insta} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                  <div className="text-last">
                    <p>Copyright ©2021shredmetrix</p>
                  </div>
               </div>
            </div>    
            
      
        </section>
    )
}

export default Education;