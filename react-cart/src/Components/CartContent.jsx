import React from 'react';
import {useGlobalContext} from '../context';

function CartContent({id,img,title,price,amount}) {
    const{remove,increase,decrease} = useGlobalContext();
    return (
        <div className='cart--items' >
            <div className='cart--data'>
        <img src={img} alt={title} className='item--image'/> 
        <div>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='remove-btn' onClick={() => remove(id)}>Remove Item</button>
        </div>
        </div>
        <div>
        <button className='amount-btn' onClick={() => increase(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
        </div>
        </div>
    )
}

export default CartContent
