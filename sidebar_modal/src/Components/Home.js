import React from 'react';
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from '../context';


function Home() {
    const{openSidebar,openModal} = useGlobalContext();
    return (
        <div className='home--content'>
           <button className='menu--toggle' onClick={openSidebar}>
            <FaBars className='menu--btn'/>
            </button>
            <button className='modal--toggle' onClick={openModal}>
            Show Modal
            </button>
        </div>
    )
}

export default Home
