import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App';
import DynastyContainer from './pages/Dynasty/DynastyContainer';
import TreeContainer from './pages/Tree/TreeContainer';
import { history } from './reducers';

export const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/tree' component={TreeContainer} />
        <Route path='/dynasty' component={DynastyContainer} />
      </Switch>
    </ConnectedRouter>
  )
}