import React from "react";
import axios from "axios";

function ReviewWrite(id) {
  function submitClick(e) {
    // id = $('#otteid').val();
    // username = $('#username').val();
    // content = $('#content').val();
    // if (content !== "") {
    //   axios.post(`http://127.0.0.1:8000/review/${id}/`, {
    //     otteid: id,
    //     content : content,
    //     username: username,
    //   });
    // }
  }
  return (
    <div class="anime__details__form">
      <form>
        {/* <input id="content"> */}
        <textarea placeholder="Your Comment"></textarea>
        {/* </input> */}
        <button type="submit" onClick={(e) => submitClick(e)}>
          <i class="fa fa-location-arrow"></i> Review
        </button>
      </form>
    </div>
  );
}

export default ReviewWrite;
