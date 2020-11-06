import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



const PaginationComp = ({
  totalRecipes, 
  handleChange, 
  currentPage, 
  recipesPerPage }) => {


  const classes = useStyles();
  const totalPages = Math.ceil(totalRecipes / recipesPerPage)

  console.log('total recipes', totalRecipes)
  console.log('math', totalPages)

    let pageNumbers = []

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i)
    }
    
    
  return (
    <div className={classes.root}>
        <Typography>Page: </Typography>
        <Pagination 
                  count={totalPages} 
                  page={currentPage} 
                  onChange={handleChange} 
                  style={{
                        margin: '0 auto',
                        maxWidth: 500
                    }}/>
    </div>
  );
}

export default PaginationComp