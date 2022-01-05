import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";

//board Route
import Getboard from "../components/board/getboard";

//import Table from "../Components/Graph/CoinListReactTable";
class App extends Component {
  render () {
    return (
      <Getboard />
    );
  }
}

export default App;
