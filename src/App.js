import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shop.jsx';
import Header from './Components/Header/header.jsx';
import SignupSignIn from './Pages/SignupSignin/signupsignin.jsx';
import {auth} from './Firebase/firebase.utils.js';

const HatsPage = (props) => {

  console.log(props);

  return (
  <div>
    <h1>Hats Page</h1>
  </div>
  )
}

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();
  }

  render() {

    return (

      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignupSignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
