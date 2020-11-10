import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../Search/Search'
import PaginationComp from '../Pagination/Pagination';
import {InfoIcon }from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  Grid, 
  IconButton, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  makeStyles, 
  Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'


//MUI Styles  

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '0 auto'
    },
    media: {
      maxWidth: 345,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));





const Display = () => {

    

    const classes = useStyles();
    const [ pagination, setPagination ] = useState(0)
    const [ query, setQuery ] = useState('')
    const [ recipes, setRecipes ] = useState([])
    const [ recipesPerPage, setRecipesPerPage ] = useState(15)
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ isLoading, setIsLoading ] = useState(false)
  
  
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=${pagination}&to=${pagination + 15}`
  
  
  
  
  const getData = async() => { 
    setIsLoading(true)
    const res = await axios.get(url)
    console.log(res.data.hits, 'hits')
    console.log(res, 'data')
    setRecipes(res.data.hits)
    setIsLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [pagination])
  
  
  const handleSubmit = () => {
    getData()
  }
  
  const handleChange = (value) => {
    setCurrentPage({value});
  };
  
  
  
  const next = () => {
    setPagination(pagination + 15)
  }
  
  const prev = () => { 
    setPagination(pagination - 15)
  }
  
  //Get current recipes - pagination purposes
  const indexOfLastRecipe = currentPage * recipesPerPage; //should give us 15
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //should give us 0
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe); //should give us 15 recipes per page index 0-14
  
  console.log(recipes, 'recipes')
  console.log(currentRecipes, 'currentRecipes')


    return (
        <section style={{margin: '0 auto'}}>
            <div>
                <Search 
                  query={query} 
                  setQuery={setQuery} 
                  handleSubmit={handleSubmit} 
                  recipes={recipes}/>
            </div>
     
            { isLoading?

              <Loader/>

              :

                <div>
                  <Grid container className={classes.cont} justify='center' spacing={3}>
                        {
                          recipes.map(({recipe:{image, label, totalTime}},i) => (
                              <Grid item item xs={12} sm={6} md={4} className={classes.media}>
                                  <Link to={`/recipe/${i}`}>
                                  	<Card>
                                  	    <CardMedia
                                  	      className={classes.media}
                                  	      image={image}
                                  	      title={label}
                                  	      component="img"
                                  	    />
                                  	    <CardContent>
                                  	        <Typography variant="body2" color="textSecondary" component="p">
                                  	            {label}
                                  	        </Typography>
                                  	    </CardContent>
                                  	    <CardActions disableSpacing>
                                  	        <IconButton aria-label="add to favorites">
                                  	            <FavoriteIcon />
                                  	        </IconButton>
                                  	    </CardActions>
                                  	
                                  	</Card>  
                                  </Link>                
                              </Grid>
                        ))}
                </Grid>
                <PaginationComp 
                      recipesPerPage={recipesPerPage}
                      // totalRecipes={totalRecipes}
                      handleChange={handleChange}
                      currentPage={currentPage}
                      next={next}
                      prev={prev}
                />
                </div>

            }
    
        </section>
    )
}

export default Display
