import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PrivateRoute component={Main} path="/" exact />
          <Route component={LoginPage} path="/login" />
        </AuthProvider>
        <Route component={Signup} path="/signup" />
      </Router>
    </div>
  );
}

export default App;
