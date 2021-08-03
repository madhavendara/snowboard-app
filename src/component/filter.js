import React , {useState}  from 'react'

const ProductFilter = () => {
    const [filteractive,setfilteractive] = useState(false) 

    return (

        <React.Fragment>

                        <div className="filter-bar-container" onClick={() => setfilteractive(true)}>
                                    <svg className="filter-icon" width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5983 18.3125C25.9921 15.724 23.653 13.79 20.8674 13.79C18.0818 13.79 15.7419 15.724 15.1358 18.3125H0V20.9634H15.1358C15.7419 23.5525 18.0818 25.4865 20.8674 25.4865C23.653 25.4865 25.9921 23.5525 26.5983 20.9634H41V18.3125H26.5983ZM23.7309 20.9634C23.2277 22.0345 22.1334 22.7785 20.8674 22.7785C19.6014 22.7785 18.5071 22.0345 18.0031 20.9634C17.8139 20.5602 17.708 20.1111 17.708 19.6379C17.708 19.1648 17.8139 18.7149 18.0031 18.3125C18.5071 17.2413 19.6014 16.4981 20.8674 16.4981C22.1334 16.4981 23.227 17.2413 23.7309 18.3125C23.9201 18.7149 24.0261 19.1648 24.0261 19.6379C24.0261 20.1111 23.9201 20.5602 23.7309 20.9634Z" fill="#F8F6F3"/>
                        <path d="M26.6883 5.00312C26.2759 2.17697 23.8233 0 20.8674 0C17.9115 0 15.4581 2.17697 15.0457 5.00312H0V7.65324H15.2712C16.0378 9.99721 18.2566 11.6965 20.8674 11.6965C23.4782 11.6965 25.6962 9.99721 26.4636 7.65324H41V5.00312H26.6883ZM23.4502 7.65324C22.8788 8.46039 21.9337 8.98846 20.8674 8.98846C19.8011 8.98846 18.856 8.46039 18.2839 7.65324C17.9206 7.14247 17.708 6.51962 17.708 5.84788C17.708 5.55526 17.7481 5.27242 17.8245 5.00312C18.1961 3.68069 19.4197 2.70805 20.8674 2.70805C22.3151 2.70805 23.538 3.68069 23.9095 5.00312C23.986 5.27242 24.0261 5.55526 24.0261 5.84788C24.0261 6.51962 23.8134 7.14247 23.4502 7.65324Z" fill="#F8F6F3"/>
                        </svg>

                                </div> 

                                
                                    <div className="side-filteroption" data-active={filteractive ? true : false}>
                                <div className="setting-btn">
                                    <img src="img/btn.svg" alt=""/>
                                </div>
                                <div className="top-title">
                                    <h1>Filter</h1>
                                    <a href="#" className="close-btn" onClick={() => setfilteractive(false)}>&times;</a>
                                </div>
                                <div className="accordion">
                                    <div className="mainAccordion active-content">
                                        <div className="Accordion-label">
                                            LENGTH
                                        </div>
                                        <div className="Accordion-content">
                                            <p>Size</p>
                                            <div className="middle">
                                                <div className="multi-range-slider">
                                                    <input type="range" id="input-left" min="0" max="100" />
        
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="mainAccordion">
                                    <div className="Accordion-label">
                                        SETBACK
                                    </div>
                                    <div className="Accordion-content">
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Camber</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Rocker</label>
                                        </div>
                                        <div className="check-box">
                                            <input type="checkbox" id="horns" name="horns"/>
                                            <label >Flat</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainAccordion">
                                <div className="Accordion-label">
                                    SURFACE AREA
                                </div>
                                <div className="Accordion-content">
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns"/>
                                        <label >Camber</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns"/>
                                        <label >Rocker</label>
                                    </div>
                                    <div className="check-box">
                                        <input type="checkbox" id="horns" name="horns"/>
                                        <label >Flat</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mainAccordion">
                            <div className="Accordion-label">
                                PROFILE
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Camber</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Rocker</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Flat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mainAccordion">
                            <div className="Accordion-label">
                                BRAND
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Camber</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Rocker</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Flat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mainAccordion">
                            <div className="Accordion-label">
                                PRICE
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Camber</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Rocker</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Flat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mainAccordion">
                            <div className="Accordion-label">
                                GENDER
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Camber</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Rocker</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Flat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mainAccordion">
                            <div className="Accordion-label">
                                WIDTH
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Camber</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Rocker</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Flat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mainAccordion active-content">
                            <div className="Accordion-label">
                                ABILITY LEVEL
                            </div>
                            <div className="Accordion-content">
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Beginner-Intermediate</label>
                                </div>
                                <div className="check-box">
                                    <input type="checkbox" id="horns" name="horns"/>
                                    <label >Intermediate-Advanced</label>
                                </div>
                            </div>
                        </div>
                                </div>
                            </div>
        </React.Fragment>

             
    )
}


export default ProductFilter;