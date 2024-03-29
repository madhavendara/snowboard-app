
import React , { useState} from 'react'


const Searchbar = ({name,onChange}) => {

    const [value1 , setvalue] = useState("");
    const searchKeytest = (e) => {
        if (e.key === 'Enter') {
            onChange(value1)
         
          }
  
    }
    return (

        <div className="search-bar-container">
            <svg className="search-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.51501 3.51508C5.13689 1.8932 7.29327 1 9.58691 1C11.8806 1 14.0369 1.8932 15.6588 3.51508C17.2806 5.13691 18.1739 7.29328 18.1739 9.58687C18.1739 11.6839 17.4268 13.6658 16.0593 15.2298L20.8282 19.9987C21.0573 20.2277 21.0573 20.5991 20.8282 20.8282C20.7137 20.9427 20.5636 21 20.4135 21C20.2634 21 20.1132 20.9427 19.9987 20.8282L15.2298 16.0593C13.6659 17.4268 11.6839 18.1738 9.58691 18.1738C7.29323 18.1738 5.13693 17.2806 3.51505 15.6588C1.89321 14.0369 1 11.8805 1 9.58691C1 7.29328 1.89317 5.13691 3.51501 3.51508ZM4.34455 14.8293C7.23522 17.7199 11.9386 17.7199 14.8292 14.8293C17.7199 11.9386 17.7199 7.23523 14.8292 4.34461C13.3838 2.89914 11.4856 2.17664 9.58687 2.17664C7.68858 2.17664 5.78967 2.89949 4.34451 4.34461C1.45395 7.2352 1.45395 11.9386 4.34455 14.8293Z" fill="#F8F6F3" stroke="#F8F6F3" strokeWidth="0.7"/>
</svg>
            <input type="text"  name={name} onKeyDown={searchKeytest} onChange={(e) => setvalue(e.target.value)}  className="search-input"/>
            <h4 className={value1 !== "" ? 'press-enter press-enter-active' : 'press-enter'}>{value1 !== "" ? 'press enter' : 'Search here'}</h4>
        </div>      
    )
}



export default Searchbar;