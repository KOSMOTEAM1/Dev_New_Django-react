import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
var data = {
  content: "",
  // username: "none",
};
function submitClick({ e, id }) {
  console.log("a");
  axios
    .post(`http://127.0.0.1:8000/Review/${id}`, {
      content: data.content,
    })
    .then(function (response) {
      if (response.data["response"] === "Good") {
        //페이지 새로고침
      } else {
        alert("오류가 발생하였습니다");
      }
    })
    .catch(function (error) {
      console.log(error);
    }); // username: data.username,
}

function ReviewWrite(id) {
  return (
    <div class="anime__details__form">
      <form>
        <textarea placeholder="Your Comment">
          <input value={data.content}></input>
        </textarea>
        <button type="submit" onClick={(e) => submitClick(e)}>
          <i class="fa fa-location-arrow"></i> Review
        </button>
      </form>
    </div>
  );
}

export default ReviewWrite;
