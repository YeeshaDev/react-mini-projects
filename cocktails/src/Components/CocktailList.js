import React from 'react'
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Cocktails from './Cocktails';

function CocktailList() {
    const {loading,cocktails} = useGlobalContext();

    if(loading){
        return <Loading />
    }

    if(cocktails.length < 1) {
        return (
        <h1>
            No cocktails matched your search input
            </h1>
            )
    }
    return (
        <div className='cocktail-container'>
          <h1 className='cocktail-heading'>Cocktails</h1>  
          <section className='cocktails-main'>
           {cocktails.map((data) => {
            console.log(data)
            return (
                <Cocktails key={data.id} {...data} />
            )
            
           })}
          </section>
        </div>
    )
}

export default CocktailList
