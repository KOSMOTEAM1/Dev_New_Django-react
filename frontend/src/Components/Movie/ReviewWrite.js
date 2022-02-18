import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
var data = {
  content: "",
  // username: "none",
};

function ReviewWrite({
  title,
  coverImg,
  id,
  summary,
  release,
  runtime,
  naver,
  imdb,
  nation,
}) {
  console.log(id);
  const [Bodyinput, SetBodyInput] = useState({ body: "" });
  const { body } = Bodyinput;
  const onChangeBody = (e) => {
    e.preventDefault();
    SetBodyInput({
      body: e.target.value,
    });
  };

  if (body.length === 0) {
  } else {
    data.content = body;
  }
  console.log(body);
  console.log(data.content);

  const submitClick = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(data.content);

    axios.post(`http://127.0.0.1:8000/apimovie/review/${id}`, {
      content: data.content,
    });

    // axios
    //   .post(`http://127.0.0.1:8000/review/${id}`, {
    //     content: data.content,
    //   })
    //   .then(function (response) {
    //     e.preventDefault();
    //     if (response.data["response"] === "Good") {
    //     } else {
    //       alert("오류가 발생하였습니다");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   }); // username: data.username,
  };

  return (
    <div class="anime__details__form">
      <form>
        <textarea
          name="body"
          className="textarea"
          placeholder="댓글을 입력해주세요"
          value={body}
          onChange={(e) => onChangeBody(e)}
        />
        {/* <textarea placeholder="Your Comment">
          <input value={data.content}></input>
        </textarea> */}
        <button type="submit" onClick={(e) => submitClick(e)}>
          <i class="fa fa-location-arrow"></i> Review
        </button>
      </form>
    </div>
  );
}

ReviewWrite.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ReviewWrite;
