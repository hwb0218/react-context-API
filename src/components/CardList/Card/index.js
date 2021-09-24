import React from "react";
import styled from "styled-components";

const Card = ({ postData }) => {
  return <CardItem>{postData.id}</CardItem>;
};

export default Card;

const CardItem = styled.div`
  display: inline-block;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border: 0.5px solid #ced4d4;
  border-radius: 20px;
  background: #f8f9fa;

  & + & {
    margin-top: 14px;
  }
`;
