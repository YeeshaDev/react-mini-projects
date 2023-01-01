const reducer = (state,action ) => {

    //This is for the clear cart button to clear all the items in the cart.
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
      }

      //This is for the remove button to remove any item you want in the cart.
      if (action.type === 'REMOVE') {
        return {
          ...state,
          cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        }
      }

      //This is for the increase arrow button to increase the amount of item you want.
      if (action.type === 'INCREASE') {
        let prevCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          return cartItem
        })
        return { ...state, cart: prevCart }
      }

      //This is for the increase arrow button to decrease the amount of item you want.
      if (action.type === 'DECREASE') {
        let prevCart = state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload) {
              return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
          })
          //This filter out any item than is less than 1 in the cart.
          .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: prevCart }
      }
      /* This calculates the total items in the cart and updates
      the cart icon to the total number of item*/
      if (action.type === 'TOTAL') {
        let { total, amount } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem
            //To calculate the total price and amount by mutiplying the price with the amount.
            const itemTotal = price * amount
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
        //This rounds up the number to 2 decimal places.
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
      }
 //This is for the api
 if(action.type === 'LOADING'){
 return {...state, loading:true}
 }

 if (action.type === 'FETCH_ITEMS'){
    return {...state,cart:action.payload,
        loading:false}
 }
    return state
}

export default reducer;