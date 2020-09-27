import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import LoginContainer from './pages/login/LoginContainer';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={LoginContainer} />
      </Switch>
    </Router>
  )
}