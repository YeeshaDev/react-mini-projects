import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.png'

function Error() {
    return (
        <div className='error-content'>
            <div class='error-text'>
            <img src={errorImg} 
            alt="error"
            className='error-image'/>
            <h1>oops!! You have reached<br/> a dead end</h1>
            </div>
            <Link to='/'>
            <button className='error-btn'>Return to homepage</button>
            </Link>
        </div>
    )
}

export default Error
