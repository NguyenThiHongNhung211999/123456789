import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { Suspense } from 'react';

import HomePage from './Page/HomePage';

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;