// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Home from './routes/home/home';
import Details from './routes/detail/details';
import { users } from '../../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={props => <Home users={users} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match, history: Object }) => (
            <Details
              data={users.find(user => props.match.params.id === user.id)}
              back={props.history.goBack}
              {...props}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
