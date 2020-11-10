import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Recipe from '../src/Components/Recipe/Recipe'
import Display from './Components/Display/Display'


export default (
     
    <Switch>
        <Route exact path='/' component={Display}/> 
        <Route path='/recipe/:id' component={Recipe}/>
    </Switch>
)