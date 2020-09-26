import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';

export const Routes = () => {
  return (
    <Router>
      <Route path='/' component={App}/>
    </Router>
  )
}