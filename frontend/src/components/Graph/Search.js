import $ from "jquery";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchView from "../../Routes/SearchViewORG";

class insert extends Component {
  submitClick = (e) => {
    this.text = $("#text").val();
    if (this.text === "") {
    } else {
      const id = this.text;
      axios.post(`http://127.0.0.1:8000/insertcnt/search/${id}`, {});
    }
  };

  render() {
    return (
      <div>
        <h2>post insertcnt Test</h2>
        <form>
          <p>
            <input type="text" id="text" placeholder="text"></input>
          </p>
          <p>
            <Link to={"/search/" + $("#text") + "/"}>
              <button type="submit" onClick={(e) => this.submitClick(e)}>
                Submit
              </button>
              {/* <SearchView id={a}/> */}
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default insert;
