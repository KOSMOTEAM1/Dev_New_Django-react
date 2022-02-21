import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
var data = {
  content: "",
  otteid: "",
  username: "none",
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
    data.otteid = id;
  }
  console.log(body);
  console.log(data.content);

  const submitClick = (e) => {
    e.preventDefault();
    console.log(data.otteid);
    console.log(data.content);
    console.log(data.username);
    axios.post(`http://127.0.0.1:8000/apimovie/review`, {
      username: data.username,
      content: data.content,
      otteid: data.otteid,
    });
    // .then((response) => {
    //   if (response.data.success) {
    //     console.log(response.data.result);
    //     SetBodyInput(""); //저장후 빈칸으로 만들기 위해
    //     // props.refreshFunction(response.data.result);
    //   } else {
    //     alert("커멘트를 저장하지 못했습니다.");
    //   }
    // });

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
