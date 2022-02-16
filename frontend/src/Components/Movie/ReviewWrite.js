import React from "react";

function ReviewWrite() {
  return (
    <div class="anime__details__form">
      <div class="section-title">
        <h4>Your Comment</h4>
      </div>
      <form action="https://technext.github.io/anime/anime-details.html#">
        <textarea placeholder="Your Comment"></textarea>
        <button type="submit">
          <i class="fa fa-location-arrow"></i> Review
        </button>
      </form>
    </div>
  );
}

export default ReviewWrite;
