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

const PaginationComp = ({currentPage, setCurrentPage}) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination count={10} page={currentPage} onChange={() => setCurrentPage(currentPage)} style={{
                        margin: '0 auto',
                        maxWidth: 500
                    }}/>
    </div>
  );
}

export default PaginationComp