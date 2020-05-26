import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Sum from './pages/Sum';
import Subtraction from './pages/Subtraction';
import Multiplication from './pages/Multiplication';
import Determinant from './pages/Determinant';
import Home from './pages/Home';

export default function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path="/" component={Home} exact />
          <Route path="/sum" component={Sum} />
          <Route path="/subtraction" component={Subtraction} />
          <Route path="/multiplication" component={Multiplication} />
          <Route path="/determinant" component={Determinant} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}
