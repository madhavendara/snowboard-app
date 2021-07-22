import React from 'react'
import Header from './header'
import Footer from './footer'

// images 
import fly from '../assest/fly.png'
import cloud from '../assest/cloud.png'
import vector from '../assest/Vector.svg'

const Invest = () => {
    return (
<React.Fragment>
<div className="wall-Invest">
            <div className='snowboard-menu container'>
                <Header/>
            </div>


            <div className="Invest-main container">
                <div className="row">
                    <div className="Invest-text ">
                        <h1>INVESTOR RELATIONS WITH SHREDMETRIX</h1>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                        <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem</p>
                    </div>
                </div>
                <div className="fly-img">
                    <img src={fly} alt=""/>
                </div>
                <div className="cloud-img">
                    <img src={cloud} alt=""/>
                </div>
                <div className="row">
                    <div className="INVESTMENT">
                    </div>
                </div>
            </div>

            <div className="columes container">
                <div className="row">
                    <div className="colume">
                        <h3>1</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume">
                        <h3>2</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume last">
                        <h3>3</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                </div>
                <div className="row two">
                    <div className="colume">
                        <h3>4</h3>
                        <h6>What is Lorem Ipsum?</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    </div>
                    <div className="colume">
                    <h3>5</h3>
                    <h6>What is Lorem Ipsum?</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <div className="colume last">
                    <h3>6</h3>
                    <h6>What is Lorem Ipsum?</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                </div>
            </div>

</div> 

<div className="Qick-wall">
   <div className="container">
       <div className="row">
           <div className="QUICK-text">
                <h1>ADVANTAGE OF INVESTING OPPORTUNITIES WITH SHREDMETRIX</h1>
                <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius </p>
           </div>
           <div className="QUICK-Login">
               <h1>QUICK INVEST</h1>
               <div className="wrapper">
                <div className="contact-form">
                  <div className="input-fields">
                   <div>
                    <p>YOUR NAME*</p>
                    <input type="text" className="input" placeholder="Type your name"/>
                   </div>
                   <div>
                       <p>YOUR EMAIL ADDRESS*</p>
                       <input type="text" className="input" placeholder="dummy@gmail.com"/>
                   </div>
                    <div>
                        <p>INVESTMENT AMOUNT*</p>
                        <input type="text" className="input"  placeholder="$250"/>
                    </div>
                   </div>
                   <div className="contact-form">
                     <button><img src={vector} alt=""/></button>
                   </div>
                 </div>
              </div>
          </div>
       </div>
   </div>
</div>
       <Footer/>
        
        </React.Fragment>
    )
}


export default Invest;