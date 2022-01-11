import $ from "jquery";
import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/post/${id}`)
    ).json();
    console.log(json);
  };
  return (
  <div>
    <h2>post insert Test</h2>
    <form >
        <p>
          <input type="text" id="title" placeholder="title"></input>
        </p>
        <p>
          <input type="text" id="content" placeholder="content"></input>
        </p>
        <p>
          <Link to="/">
          <button type="submit" onClick={(e) => this.submitClick(e)}>Submit</button>
          </Link>
        </p>
    </form>
  </div>);
}

export default Detail;
/* class insert extends Component {

  submitClick = (e) => {
    this.title = $('#title').val();
    this.content = $('#content').val();
    axios.post('http://127.0.0.1:8000/post/', {
      title: this.title,
      content: this.content
    })
  }
  render() {
      return (
              <div>
                  <h2>post insert Test</h2>
                  <form >
                      <p>
                        <input type="text" id="title" placeholder="title"></input>
                      </p>
                      <p>
                        <input type="text" id="content" placeholder="content"></input>
                      </p>
                      <p>
                        <Link to="/">
                        <button type="submit" onClick={(e) => this.submitClick(e)}>Submit</button>
                        </Link>
                      </p>
                  </form>
              </div>
      );
  }
} */

export default insert;