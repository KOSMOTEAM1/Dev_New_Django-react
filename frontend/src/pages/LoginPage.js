import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="Home">
      <div className="lander">
        <h3>
            <p> OTTE LOGIN PAGE </p>
            <hr/>
          <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Enter Username" />
            <hr/>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
             <hr/>
            <input type="submit"/>
          </form>
          {/* <button>
           <Link to={"/signup"}>회원가입</Link>
          </button> */}
        </h3>
      </div>
    </div>
  );
};

export default LoginPage;
