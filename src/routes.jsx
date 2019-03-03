import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ShowDetails, Home } from './layouts';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shows" component={ShowDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
