import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
//Header
import Header from "./components/header/Header";
//Footer
import Footer from "./components/footer/Footer";
//Routes
import Table from "./Routes/Table";
import Community from "./Routes/Community";
import Home from "./Routes/Home";

import adminHeader from "./components/adminHeader";
import Graph from "./Routes/Graph";

//import Sidebar from "./Components/Sidebar/Sidebar";

//css
import "./source/css/style.css";
import Contents from "./components/adminContents";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/Community" component={Community} />
          <Route path="/Table" component={Table} />
          <Route exact path="/" component={Home} />
          <Route render={() => <div className="error">Error</div>} />
        </Switch>
        <Footer />
      </Router>
      <Router>
        <adminHeader />
        <Route path="/admin1" component={Graph} />
      </Router>
    </>
  );
}

export default App;
