import React from 'react';
import './Project.css';
import Particle from '../../Components/Particles/Particle';

function Project() {
    return (
        <div className='project-content'>
    
            <h1 className='work'>Projects</h1>
            <span className='my-projects'>my works</span>
            <div className='project-wrapper project1'>
            <div className='project-details'>
                <h1>Youtube Clone</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://youtube-clone-yeeshadev.vercel.app'
         className='project-links'>
            View Demo</a> 
            <a href='https://youtube-clone-yeeshadev.vercel.app'
            className='project-links'>
            Source Code</a> 
            </div>
                <div className='project-info '>
                    <img src='./images/project-img.png'
                    alt='project'
                    className='project-img'/>
               
            </div>
            </div>
            <div className='project-wrapper project2'>
            <div className='project-details'>
                <h1>Youtube Clone</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://youtube-clone-yeeshadev.vercel.app'
         className='project-links'>
            View Demo</a> 
            <a href='https://youtube-clone-yeeshadev.vercel.app'
            className='project-links'>
            Source Code</a> 
            </div>
                <div className='project-info '>
                    <img src='./images/project-2.png'
                    alt='project'
                    className='project-img'/>
               
            </div>
            </div>
            <div className='project-wrapper project3'>
            <div className='project-details'>
                <h1>Youtube Clone</h1>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, expedita voluptates? Ut corrupti 
                pariatur inventore facilis reprehenderit, 
                aut tenetur iure.</h4>
         <a href='https://youtube-clone-yeeshadev.vercel.app'
         className='project-links'>
            View Demo</a> 
            <a href='https://youtube-clone-yeeshadev.vercel.app'
            className='project-links'>
            Source Code</a> 
            </div>
                <div className='project-info '>
                    <img src='./images/project-3.png'
                    alt='project'
                    className='project-img'/>
               
            </div>
            </div>
            <hr/> 
        </div>
    )
}

export default Project
