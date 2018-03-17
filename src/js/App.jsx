/* eslint react/prop-types: 0 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import Details from './routes/detail/details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
