import React, { useState, useContext } from 'react';

// more components
// fix - context api, redux (for more complex cases)


//Create context first

const store = React.createContext();
//we now have two components available - Provider, Consumer
const { Provider}  = store;

const StateProvider = () => {

  const [ query, setQuery ] = useState('')
  const [ recipes, setRecipes ] = useState([])
  const [ recipesPerPage, setRecipesPerPage ] = useState(15)
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ pagination, setPagination ] = useState(0)



  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=${pagination}&to=${pagination + 15}`



  return (
    <Provider value={{}}>
        
    </Provider>
  );
};

//might use context