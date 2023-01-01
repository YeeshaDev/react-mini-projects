import React from 'react';
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../context';
function Modal() {
const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <div className={`${
            isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
          }`}>
        <div className='modal--content'>
           <h1>Modal Content</h1>
           <button className='close--btn' onClick={closeModal}>
            <FaTimes />
           </button>
        </div>
        </div>
    )
}

export default Modal
