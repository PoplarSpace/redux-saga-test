import React from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./pages/login";

import List from './pages/list'

import { Provider } from "react-redux";

import store from "./store/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
