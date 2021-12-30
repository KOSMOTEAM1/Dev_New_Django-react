import React, { Component } from 'react';
import { Route } from "react-router-dom";
import getlist from './getlist'
import insert from './insert'

class App extends Component {
  render () {
    return (
        <div className="App">
            <Route exact path='/' component={getlist} />
            <Route exact path='/insert' component={insert} />
        </div>
    );
  }
}
export default App;