import React, { useState, useEffect } from "react";
//import { Modal, Button } from "react-bootstrap";
import Modal from "react-modal";
import Detail from "../Movie/Detail";

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

function TestModal({ id, title, summary, genres, coverImg }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <a onClick={() => setModalIsOpen(true)}>{title}</a>
      {/* <button onClick={() => setModalIsOpen(true)}>Modal Open</button> */}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="btn__all">
          <button onClick={() => setModalIsOpen(false)}>
            <span class="arrow_right"></span>
          </button>
        </div>

        <Detail
          title={title}
          id={id}
          summary={summary}
          genres={genres}
          coverImg={coverImg}
        />
        <br></br>
        {/*닫기 버든 만들면 될듯*/}
      </Modal>
    </div>
  );
}

export default TestModal;
