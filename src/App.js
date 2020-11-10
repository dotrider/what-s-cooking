import './reset.css';
import './App.css';
import Display from './Components/Display/Display';
import Nav from './Components/Nav/Nav'
import React from 'react'
import router from './router'



function App() {

  

 

  return (
    <div className="App">
        <Nav/>
        {router}

    </div>
  );
}

export default App;
