import React , { useState, useEffect, useRef } from 'react'
import Searchbar from '../component/searchbar'
import ProductFilter from '../component/filter'
import applogo from '../assest/applogo.svg'
import productimg from '../assest/product-1.jpg'

const Comparison = () => {
    return (
        <section id="comparison-app">
            <div className='app-sidebar'>
                <img src={applogo} className="app-logo" alt="ShredMetrix"/>

                <div className="filter-container">
                    <Searchbar />
                    <ProductFilter />
                </div>
                <div className="product-listing">

                {/* product card start*/}
                    <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}

                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}

                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}


                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}


                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}


                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}


                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}


                {/* product card start*/}
                <div className='product-card'>
                        <div className="product-img-container">
                           <img src={productimg} className="product-img"/> 
                        </div>
                        <div className="product-content">
                            <div className="title-content">
                                <h1>AitMax 720 React</h1>
                                <h5>small</h5>
                            </div>
                            <div className="star star-4">

                            </div>
                            <div className="price-container">
                                <h3>$749.95</h3>
                                <button className="selection-check no-active-selection">

                                </button>
                            </div>

                        </div>
                    </div>

                {/* product card end*/}



                </div>
            </div>

            <div className='canvas-area'>
                
            </div>
        </section>
    )
}

export default Comparison;