import './reset.css';
import './App.css';
import Display from './Components/Display/Display';
import Nav from './Components/Nav/Nav'
import axios from 'axios'
import React, { useState, useEffect} from 'react'





function App() {

  
  const [ query, setQuery ] = useState('')
  const [ recipes, setRecipes ] = useState([])
  const [ recipesPerPage, setRecipesPerPage ] = useState(15)
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false)

  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`




const getData = async() => { 
  setIsLoading(true)
  const res = await axios.get(url)
  setRecipes(res.data.hits)
  setIsLoading(false)
}

useEffect(() => {
  getData()
}, [currentPage])


const handleSubmit = () => {
  getData()
}

const handleChange = (value) => {
  // console.log('handleClick', e, value)
  setCurrentPage({value});
};


if(isLoading){
  return <h2>loading...</h2>
}


//Get current recipes - pagination purposes
const indexOfLastRecipe = currentPage * recipesPerPage; //should give us 15
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //should give us 0
const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe); //should give us 15 recipes per page index 0-14

console.log(recipes, 'recipes')
console.log(currentRecipes, 'currentRecipes')

  return (
    <div className="App">
        <Nav/>
          <Display 
              query={query} 
              setQuery={setQuery} 
              handleSubmit={handleSubmit} 
              recipes={currentRecipes} 
              recipesPerPage={recipesPerPage}
              totalRecipes={recipes.length}
              handleChange={handleChange}
              currentPage={currentPage}
          />
    </div>
  );
}

export default App;
