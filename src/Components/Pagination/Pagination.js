import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { NextWeek } from '@material-ui/icons';

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
  recipesPerPage,
prev,
next }) => {


  const classes = useStyles();
  const totalPages = Math.ceil(totalRecipes / recipesPerPage)

  console.log('total recipes', totalRecipes)
  console.log('math', totalPages)

    let pageNumbers = []

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i)
    }
    
    console.log(pageNumbers,'pageN')
  return (
    <div className={classes.root}>
        <Typography>Page: </Typography>
        <Pagination 
                  count={totalPages} 
                  page={+currentPage} 
                  onChange={handleChange} 
                  style={{
                        margin: '0 auto',
                        maxWidth: 500
                    }}/>

                    <button onClick={() => next()}>Next</button>
                    <button onClick={() => prev()}>Prev</button>
    </div>
  );
}

export default PaginationComp