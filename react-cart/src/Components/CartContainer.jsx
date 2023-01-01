import React from 'react';
import CartContent from './CartContent';
import { useGlobalContext } from '../context'

function CartContainer() {
    const {cart,total,clearCart} = useGlobalContext();
    if(cart.length === 0){
    return (
        <div className='cart'>
           <header>
            <h2>your cart</h2>
            <h4 className='empty--cart'>Your cart is currently empty</h4>
           </header>
        </div>
    )
    }
    return (
        <div className='cart'>
            <header>
                <h2>Your cart</h2>
            </header>
            <div>
                {cart.map((item) => {
                    return <CartContent key={item.id} {...item}/>
                })}
            </div>
            <footer>
            <hr/>
                <div className='cart--total'>
                <h4>
                total<span>${total}</span>
                </h4>
                </div>
                <button
           className='btn clear--btn'
          onClick={clearCart}
        >
          clear cart
        </button>
            </footer>
        </div>
    )
}

export default CartContainer
