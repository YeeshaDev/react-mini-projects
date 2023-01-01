import React from 'react';
import { useGlobalContext } from './../context'

function Modal() {
    const { isModal, closeModal, correctAnswer, questions } = useGlobalContext()
    
    return (
        <div className={`${isModal ? 'modal-content modal-open' : 'modal-content'}`}>
        <div className='modal-text'>
            <p>You answered {((correctAnswer / questions.length) * 100).toFixed(0)}% of questions correctly</p>
            <button className='close-btn' onClick={closeModal}>
          play again
        </button>
        </div>
        </div>
        
    )
}

export default Modal
