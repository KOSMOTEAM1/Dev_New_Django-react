import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartImg from "../../source/img/heart.png";
import EmptyHeartImg from "../../source/img/heart.png";

const Heart = styled.img`
  object-fit: scale-down;
`;
const HeartButton = ({ like, onClick }) => {
  return (
    <div className="product__item__pic__detail">
      <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />
    </div>
  );
};
export default HeartButton;
