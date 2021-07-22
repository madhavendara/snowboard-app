import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Loading from '../component/loading'

// images import
import left from '../assest/left.svg'
import right from '../assest/right.svg'
import boat from '../assest/boat.png'
import Vector2 from '../assest/Vector2.svg'
import second from '../assest/second.png'


const Education = () => {
    const [slideState,setSlide] = useState("left-part")
    const [loading,setloading] = useState(true)

    useEffect(() => {
        setloading(false)
    }, [])

    return (
        <React.Fragment>
             <Loading active={loading}/>
        
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
               
            <Footer/>
      
        </section>
        </React.Fragment>
    )
}

export default Education;