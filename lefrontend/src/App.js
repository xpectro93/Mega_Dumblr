import React from 'react';
import { Route , Switch } from 'react-router-dom'
import './App.css';

import { AuthProvider } from "./Auth.js";
import PrivateRoute from './PrivateRoute.js';

import Home from './components/Home.js';
import SignUp from './components/SignUp.js';

const App = props =>{
  return (
    <AuthProvider>
      <Switch>
        <div className="App">
          <PrivateRoute exact path='/' render={(props)=> <Home {...props}/>}/>
          <Route exact path='/login'  render={(props)=> <Login {...props}/>} />
          <Route exact path='/signup'  render={(props)=> <SignUp {...props}/>} />
        </div>
      </Switch>
    </AuthProvider>
  );
}

export default App;
