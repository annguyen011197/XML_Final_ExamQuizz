import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import indexRoute from './routes/index'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {indexRoute.map((prop,key) =>{
            return <Route path={prop.path} key={key} 
              component={prop.component}
            />
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
