import React,{useState, useEffect, useContext} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext =  React.createContext();

const AppProvider =({children}) => {
    const [loading, setLoading] = useState(true);
    const[searchTerm, setSearchTerm] = useState ('a');
    const [cocktails, setCocktails] = useState ([])

    const fetchDrinksUrl = async () => {
        setLoading(true)
        try{
        const response = await fetch(`${url}${searchTerm}`)
        const cocktail = await response.json();
        const {drinks} = cocktail
        if (drinks){
          const newdrinks = drinks.map((data) => {
            const{idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
            } = data;
            return {
                id:idDrink,
                name: strDrink,
               image: strDrinkThumb,
               info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newdrinks)
          console.log(newdrinks)
        } else{
            setCocktails([])
        }
        setLoading(false)
        }
        catch(error) {
         console.log(error)
         setLoading(false)
        }
    }

    useEffect (() => {
        fetchDrinksUrl();
    },[searchTerm])
return (
    <AppContext.Provider value={{
        loading,
        setSearchTerm,
        cocktails,
    }}>
        {children}
    </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}