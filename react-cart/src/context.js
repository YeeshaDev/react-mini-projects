import React,{useContext,useState,useReducer,useEffect} from "react";
import cartData from './data.js';
import reducer from './reducer';

const url ='https://course-api.com/react-useReducer-cart-project';
 const AppContext = React.createContext();
const initialState = {
    loading:false,
    cart:cartData,
    total:0,
    amount:0,
}

 const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState);

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }

    const remove = (id) => {
        dispatch({type:'REMOVE', payload:id})
    }

    const increase = (id) => {
        dispatch({type:'INCREASE', payload:id})
    }

    const decrease = (id) => {
        dispatch({type:'DECREASE', payload:id})
    }

    const fetchUrl = async() => {
        dispatch({type:'LOADING'})
        const response = await fetch(url)
        const cart =  await response.json()
        dispatch({type:'FETCH_ITEMS', payload:cart})
    }

    useEffect(() => {
    fetchUrl();
    },[])

    useEffect (() => {
    dispatch({type:'TOTAL'})
    },[state.cart])
    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
        }}>
            {children}
        </AppContext.Provider>
    )
 }

export const useGlobalContext = () => {
    return useContext(AppContext)
}
 export {AppContext,AppProvider}