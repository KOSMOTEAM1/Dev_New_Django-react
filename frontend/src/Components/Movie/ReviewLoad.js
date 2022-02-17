import { useEffect, useState } from "react";
import React from "react";

function ReviewLoad(id) {
  const [reviewlists, setreviewlists] = useState([]);
  //id로 호출 받아 해당 작품의 상세 정보 불러오기
  const getreviewlists = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/review/${id}`)
    ).json();

    setreviewlists(json);
    //console.log(json);
  };
  useEffect(() => {
    getreviewlists();
  }, []);

  return (
    <div class="anime__review__item">
      <div class="anime__review__item__text">
        <h6>
          hi <span> hi </span>
        </h6>
        <p>hi</p>
      </div>
      {reviewlists.map((reviewlist) => (
        <div class="anime__review__item__text">
          <h6>
            {reviewlist.username} <span> {reviewlist.writedate} </span>
          </h6>
          <p>{reviewlist.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewLoad;
