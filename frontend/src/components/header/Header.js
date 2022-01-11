import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  //let { user, logoutUser } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to={"/"}>
                <img src={require("./logo.png")}></img>
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to={"/"}>홈</Link>
                  </li>
                  <li>
                    <Link to={"/Table"}>표</Link>
                  </li>
                  <li>
                    <Link to={"/Community"}>자유게시판</Link>
                  </li>
                  <li>
                    <Link to={"/Community2"}>자유게시판(작업중)</Link>
                  </li>
                  <li>
                    <Link to={"/insertcnt"}>원태테스트</Link>
                  </li>
                  {/* <li>{user && <p> Welcome {user.username} </p>}</li>
                  <li>
                    {user ? (
                      <p onClick={logoutUser}> Logout </p>
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <Link to="../member/profile">
                <span className="icon_profile"></span>
              </Link>
              <Link to="../user/logout">
                <span className="icon_close_alt"></span>
              </Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
