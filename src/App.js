import './reset.css';
import './App.css';
import Display from './Components/Display/Display';
import Nav from './Components/Nav/Nav'
import axios from 'axios'
import React from 'react'





function App() {

const [ query, setQuery ] = React.useState('')
const [ recipes, setRecipes ] = React.useState([])
const [ currentPage, setCurrentPage] = React.useState(1);
const [ totalResults, setTotalResults ] = React.useState(0)

const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`

  
const getData = async() => { 
  const res = await axios.get(url)
  console.log('count', res.data)
   setRecipes(res.data.hits)
}

const nextPage = () => {

}

// React.useEffect(() => {

// },[])



const handleSubmit = (e) => {
  // e.preventDefault()
  getData()
}

console.log(recipes, 'recipes')
console.log(query, 'query')

  return (
    <div className="App">
        <Nav/>
        <Display query={query} setQuery={setQuery} handleSubmit={handleSubmit} recipes={recipes} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
