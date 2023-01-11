import React from 'react';
import BackgroundAnimation from '../../Components/Animation/BackgroundAnimation';
import './Home.css'

function Home() {
    return (
        <div className='home-content'>
            <section className='home-upper'>
            <div className='home-text'>
            <h1>Hi,<br/> 
            <span>
                I'm Aisha.</span>
                </h1>
                <h2 >Frontend Web Developer</h2>

                </div>
                <div className='hero-image' onClick={() => alert('lets play')}>
                    <img src='./images/avatar1.png' 
                    alt='avatar'/>  
                                 
                    </div>
                    </section>
                    <p><q>Passionate about coding beautiful things...</q></p>
                    <a href='mailto:aishaagunbiade05@gmail.com'>contact me</a>
                    <BackgroundAnimation/>
                <hr/>
        </div>
    )
}

export default Home
