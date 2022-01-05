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
import Community2 from "./components/board/getboard";
import Home from "./Routes/Home";
import insertcnt from "./Routes/insertcnt";
import result_today from "./Routes/result_today";
import result_yesterday from "./Routes/result_yesterday";

//Routes/board
import insertboard from "./components/board/insertboard";
import boarddetail from "./components/board/boardview";
//import adminHeader from "./components/adminHeader";
import Graph from "./Routes/Graph";

//import Sidebar from "./Components/Sidebar/Sidebar";

//css
import "./source/css/style.css";
//import Contents from "./components/adminContents";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/Community2" component={Community2} />
        <Route exact path="/Community2/Insert" component={insertboard} />
        <Route exact path="/Community2/boarddetail/:id" component={boarddetail} />
        <Switch>
          <Route path="/Community" component={Community} />
          <Route exact path="/Table" component={Table} />
          <Route path="/insertcnt" component={insertcnt} />
          <Route path="/result_today" component={result_today} />
          <Route path="/result_yesterday" component={result_yesterday} />
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
