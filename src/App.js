import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Messenger from './containers/messenger';
import Signin from './containers/signin';
import Login from './containers/login';
import Room from './containers/room';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {

  render() {

    return (
      <Router history={history}>
        <Route exact path="/" component={Messenger}/>
        <Route exact path="/room/:roomID" component={Room}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/login" component={Login}/>
      </Router>
    );
  }
}

export default App;
