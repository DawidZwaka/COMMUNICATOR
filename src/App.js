import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Messenger from './containers/messenger';
import Signin from './containers/signin';
import Login from './containers/login';

class App extends React.Component {

  render() {

    return (
      <>
        <Route exact path="/">
          <Messenger/>
        </Route>
        <Route exact path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </>
    );
  }
}

export default App;
