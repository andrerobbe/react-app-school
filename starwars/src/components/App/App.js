import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import StarshipOverview from '../StarshipOverview/StarshipOverview';
import StarshipDetail from '../StarshipDetail/StarshipDetail';
import StarshipAdd from '../StarshipAdd/StarshipAdd';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="*" component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/starships' component={StarshipOverview} />
        <Route exact path='/starships/add' component={StarshipAdd} />
        <Route exact path='/starships/detail/:id' component={StarshipDetail} />

        <body />
      </div>
    );
  }
}

export default App;