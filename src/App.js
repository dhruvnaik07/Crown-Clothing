import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shop.jsx';
import Header from './Components/Header/header.jsx';
import SignupSignIn from './Pages/SignupSignin/signupsignin.jsx';
import {setCurrentUser, checkUserSession} from './Redux/User/useractions.js';
import {selectCurrentUser} from './Redux/User/userselectors.js';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './Pages/Checkout/checkout.jsx';

class App extends React.Component {

  componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession();
  }

  render() {

    return (

      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
                 render={() => this.props.currentUser?
                               (<Redirect to='/' />):
                               (<SignupSignIn />)
                        } />
        </Switch>
      </div>
    );
  }
}

const mapStateToPros = createStructuredSelector({

  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({

  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToPros, mapDispatchToProps)(App);