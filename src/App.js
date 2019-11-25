import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shop.jsx';
import Header from './Components/Header/header.jsx';

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

      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
