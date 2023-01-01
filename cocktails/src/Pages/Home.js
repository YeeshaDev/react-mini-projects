import React from 'react';
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';
import { useGlobalContext } from '../context';

function Home() {
    
    return (
        <div className='home-content'>
         <SearchForm/>
         <CocktailList/>
        </div>
    )
}

export default Home
