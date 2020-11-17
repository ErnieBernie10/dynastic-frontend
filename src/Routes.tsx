import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App';
import DashboardContainer from './pages/dashboard/DashboardContainer';
import LoginContainer from './pages/login/LoginContainer';
import TreeContainer from './pages/Tree/TreeContainer';
import { history } from './reducers';

export const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={LoginContainer} />
        <Route path='/dashboard' component={DashboardContainer} />
        <Route path='/tree' component={TreeContainer} />
      </Switch>
    </ConnectedRouter>
  )
}