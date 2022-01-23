import React from 'react'
import Header from './header'
import Footer from './footer'

import { Widget } from '@typeform/embed-react'

const Support = () => {

    return (
    <React.Fragment>
            <div className="wall-Invest">
                        <div className='snowboard-menu container'>
                            <Header/>
                        </div>
                        <div className='support-typeform'>
                            <Widget id="ecOoo7y3" className="my-form" />
                        </div>
            </div>   

            <Footer/>
    </React.Fragment>   
);      
};

export default Support;