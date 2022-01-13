import React, { useState, useEffect } from "react";
//import { Modal, Button } from "react-bootstrap";
import Modal from "react-modal";
import $ from "jquery";
import Detail from "../Movie/Detail";
import axios from "axios";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "15%",
    right: "15%",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#0b0c2a",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

function SearchModal({ id, title, summary, coverImg }) {
  //  const [like, setLike] = useState();

  // useEffect(async () => {
  //   const fetchData = async () => { const res = await axios.get(...)
  //      if (res.data.type === 'liked') setLike(true)
  //     }
  //     fetchData()
  //   }, []);
  //   const toggleLike = async (e) => {
  //     const res = await axios.post(...)
  //     setLike(!like)
  //   }

  function submitClick(e) {
    console.log("클릭 이벤트가 실행 되었습니다.")
    console.log(title)
    console.log(summary)
    console.log(coverImg)
    axios.post(`http://127.0.0.1:8000/insertcnt/`,{
      text: title,
    })
/*     var id = $("id").val;
    var sysdate = $("#sysdate").val();
    axios
      .post("http://127.0.0.1:8000/insertcnt/", {
        id: this.id,
        sysdate: this.sysdate,
      })
      .then((res) => {
        console.log(res.this);
      }); */
  }

  // setModalIsOpen(true)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <div className="row">
        <div className="anime__details__pic ">
          <img
            id={id}
            onClick={(e) => {
              setModalIsOpen(true);
              submitClick(e);
            }}
            value={title}
            src={`https://image.tmdb.org/t/p/original/${coverImg}`}
          />
        </div>
      </div>
      <div className="product__item__text">
        <h5>
          <a
            id={id}
            onClick={(e) => {
              setModalIsOpen(true);
              submitClick(e);
            }}
            value={title}
          >
            {title}
          </a>
        </h5>
      </div>
      {/* <button onClick={() => setModalIsOpen(true)}>Modal Open</button> */}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {/* <div className="btn__all">
          <button onClick={() => setModalIsOpen(false)}>
            <span class="arrow_right"></span>
          </button>
        </div> */}

        <Detail
          title={title}
          id={id}
          summary={summary}
          // genres={genres}
          coverImg={coverImg}
        />
        <br></br>
        {/*닫기 버든 만들면 될듯*/}
      </Modal>
    </div>
  );
}

export default SearchModal;
