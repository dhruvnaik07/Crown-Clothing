import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx'

const HatsPage = (props) => {

  console.log(props);

  return (
  <div>
    <h1>Hats Page</h1>
  </div>
  )
}

function App() {

  return (

    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
