import React, {useEffect } from 'react';
import {useGlobalContext} from '../context'

function SearchForm() {
    const {setSearchTerm} = useGlobalContext();
   const searchInput = React.useRef('')

useEffect(() => {
    searchInput.current.focus();
},[])
 const handleSearch = (e) => {
e.preventDefault();
 }
    const handleChange = () => {
  setSearchTerm(searchInput.current.value)
    }
    return (
        <div className='search--content'>
            <h2>Search your favourite cocktail</h2>
            <form onSubmit={handleSearch} >
                <input type='text'
                id='name'
                onChange={handleChange}
                ref={searchInput}/>
            </form>
        </div>
    )
}

export default SearchForm

