import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div className="App">
                <NavLink activeClassName="clicked" exact to="/"> Acceuil </NavLink>
                <NavLink activeClassName="clicked" to="/notre-histoire"> Histoire  </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;