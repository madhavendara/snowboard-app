import React from 'react'


const BookmarkModel = (props) => {
    return (
        <div id="not-login">
            <h1>Bookmark added sucessfully </h1>
            <div className='login-container1'>
                <button className='bookmark-btn' onClick={props.closePopup}>OK</button>
           
            </div>
        </div>      
    )
}


export default BookmarkModel;