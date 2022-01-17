import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//Header
import Header from "./Components/header/Header";

//Footer
import Footer from "./Components/footer/Footer";

//Routes
import Community2 from "./Components/board/getboard";
import Home from "./Routes/Home";

//Routes/board
import insertboard from "./Components/board/insertboard";
import boarddetail from "./Components/board/boardview";

//css
import "./source/css/style.css";
import "./source/css/elegant-icons.css";
import "./source/css/font-awesome.min.css";
import "./source/css/nice-select.css";
import "./source/css/plyr.css";
import "./source/css/slicknav.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/Community2" component={Community2} />
        <Route exact path="/Community2/Insert" component={insertboard} />
        <Route
          exact
          path="/Community2/boarddetail/:id"
          component={boarddetail}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <div className="error">Error</div>} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
