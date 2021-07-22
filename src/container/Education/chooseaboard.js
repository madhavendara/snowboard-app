import React , {useEffect} from 'react'
import Header2 from '../header2';

import chevronleft from '../../assest/left.svg'
import chevronright from '../../assest/right.svg'
import click from '../../assest/click.svg'

import carret from '../../assest/carret_right.svg'

const Chooseboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>
            <Header2/>

            <div className="white-page black-page container">
          <div className="row">
               <div className="one-heading">
                <h1>04</h1>
                <h1>HOW TO USE  SHREDMETRIX/CHOOSE A BOARD</h1>
               </div>
               <div className="one-text">
                   <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
          </div>
          <div className="row">
            <div className="left-right">
                <a href="#" className="active"><img src={chevronleft} alt=""/></a>
                <a href="#"><img src={chevronright} alt=""/></a>
            </div>
        </div>
        <div className="row">
            <div className="choose-box">
                 <div className="ways">
                    <div className="box-flow">RIDER SHOE SIZE</div>
                    <img src={click} className="d" alt=""/>
                 </div>
                 <div className="ways">
                <div className="box-flow">RIDER HIGHT</div>
                <img src={click} alt=""/>
               </div>
                <div className="box-flow">RIDER WEIGHT</div>
            </div>
        </div>
        <div className="row">
            <div className="choose-box">
             <div className="ways">
                <div className="box-flow">SNOW CONDITION</div>
                <img src={carret} alt=""/>
            </div>
            <div className="ways">
                <div className="box-flow">RIDER STYLE</div>
                <img src={carret} alt=""/>
            </div>
                <div className="box-flow">RIDER LEVEL</div>
            </div>
        </div>
        <div className="row">
            <div className="choose-box">
                <div className="ways">
                <div className="box-flow">BUDGET</div>
                <img src={click} alt=""/>
            </div>
                <div className="box-flow">FREQUENCY OF USE</div>
            </div>
        </div>
        </div>
      </React.Fragment>
    )
}


export default Chooseboard;