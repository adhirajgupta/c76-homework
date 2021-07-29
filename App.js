import React from 'react';
import Fonts from './components/components/FontLoader';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './components/Themes/ThemeReducer';
import { store } from './redux/Redux';

// const store = createStore(combineReducers({themeReducer}),applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
          <Fonts />
    </Provider>
  )
}




/*
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                    </Switch>
                </Router>
*/ 