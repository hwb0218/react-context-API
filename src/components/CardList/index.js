import React, { useState, useEffect, useRef } from "react";
import useObserver from "hooks/useObserver";
import { useStore } from "store";
import { setPostList } from "store/postReducer";
import { fetchPostList } from "api";
import { BASE_URL, PATH } from "utils/constant";
import styled from "styled-components";
import Card from "./Card";

const CardList = () => {
  const [state, dispatch] = useStore();
  const [userId, setUserId] = useState(1);
  const target = useRef(null);
  const isIntersecting = useObserver(target);

  const getPostList = async () => {
    try {
      const params = { userId };
      const data = await fetchPostList(BASE_URL, PATH.posts, params);
      dispatch(setPostList(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  useEffect(() => {}, []);

  return (
    <CardContainer>
      {state.postList.map((post) => (
        <Card key={post.id} postData={post} />
      ))}
    </CardContainer>
  );
};

export default CardList;

const CardContainer = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
`;
