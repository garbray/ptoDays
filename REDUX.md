# Redux

1.  Install react-redux lib

`yarn add react-redux --dev`

1.  Create the reducers file `touch reducers.js`

```javascript
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
};

// action example
// {
//  type: string,
//  payload: any,
//  error: Error,
//  metadata: ????
// }

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case: SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
```

2.  Create the store file `touch store.js`

```javascript
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
export default store;
```

3.  Create the actions file `touch actions.js`

```javascript
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
```

4.  Create the actionsCreators file `touch actionsCreators.js`

```javascript
import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
```

5.  now the redux setup is complete and now we need to available redux into our UI

* On `App.js` go and import redux and import Provider, also you will need the store we previously create, and inside the BrowserRouter wrap all the markup on it and pass as a attribute our store

```javascript
import { Provider } from 'react-redux';
import store from './store';

...
<BrowserRouter>
  <Provider store={store}>
    ... other components
  </Provider>
</BrowserRouter>
```

// TODO replace the landing page in this explanation

6.  on landing page import connect from Redux

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function,
  history: RouterHistory,
};

class Landing extends Component<Props> {
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    <div className="landing">
      <form onSubmit={this.goToSearch}>
        <input
          onChange={props.handleSearchTermChange}
          value={props.searhTerm}
          type="text"
          placeholder="search"
        />
      </form>
    </div>;
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
```

**_notice_** how the `mapDispatchToProps` method is injected as a props via the connect method

## TODO

* flowtype with redux
* use thunks for async redux
* update test

## Refactor for flowtype
