import React from 'react'
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





const Display = ({
  query, 
  setQuery, 
  handleSubmit, 
  recipes, 
  totalRecipes, 
  handleChange, 
  currentPage, 
  recipesPerPage }) => {

    const classes = useStyles();

    return (
        <section style={{margin: '0 auto'}}>
            <div>
                <Search 
                  query={query} 
                  setQuery={setQuery} 
                  handleSubmit={handleSubmit} 
                  recipes={recipes}/>
            </div>
            {/* <div className={classes.root}> */}

                <Grid container className={classes.cont} justify='center' spacing={3}>
                      {
                        recipes.map(({recipe:{image, label, totalTime}}) => (
                            <Grid item item xs={12} sm={6} md={4} className={classes.media}>
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
                            </Grid>
                      ))}
              </Grid>
              <PaginationComp 
                    recipesPerPage={recipesPerPage}
                    totalRecipes={totalRecipes}
                    handleChange={handleChange}
                    currentPage={currentPage}
              />
           {/* </div> */}
        </section>
    )
}

export default Display
