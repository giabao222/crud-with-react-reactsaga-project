import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Create from './components/Create';
import Index from './components/Index';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-app">
          <Header></Header>
        </div>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/interns">
            <Index></Index>
          </Route>
          <Route path="/edit/:id" render={props => <Edit {...props} {...this.props} />}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
