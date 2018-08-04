import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import StarshipOverview from '../StarshipOverview/StarshipOverview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="*" component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path='/starships' component={StarshipOverview} />
        <body />
      </div>
    );
  }
}

export default App;