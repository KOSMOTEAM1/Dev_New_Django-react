import $ from "jquery";
import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class insert extends Component {

  submitClick = (e) => {
    this.text = $('#text').val();
    this.sysdate = $('#sysdate').val();
    if(this.text === '' && this.sysdate === ''){

    }else{
      axios.post('http://127.0.0.1:8000/insertcnt/', {
      text: this.text,
      sysdate: this.sysdate
        })
    }
  }

  render() {
      return (
              <div>
                  <h2>post insertcnt Test</h2>
                  <form >
                      <p>
                        <input type="text" id="text" placeholder="text"></input>
                      </p>
                      <p>
                          <button type="submit" onClick={(e) => this.submitClick(e)}>Submit</button>
                      </p>
                  </form>
              </div>
      );
  }
}

export default insert;