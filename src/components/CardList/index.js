import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const { isIntersecting, stopIntersecting, setStopIntersecting } =
    useObserver(target);

  const getPostList = useCallback(async () => {
    try {
      const params = { userId };
      const data = await fetchPostList(BASE_URL, PATH.posts, params);

      if (data.length < 10) setStopIntersecting(true);
      dispatch(setPostList(data));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, userId, setStopIntersecting]);

  useEffect(() => {
    if (stopIntersecting) return;
    getPostList();
  }, [getPostList, stopIntersecting]);

  useEffect(() => {
    if (stopIntersecting) return;
    if (isIntersecting) setUserId((state) => state + 1);
  }, [isIntersecting, stopIntersecting]);

  return (
    <CardContainer>
      {state.postList.map((post) => (
        <Card key={post.id} postData={post} />
      ))}
      <div ref={target} />
    </CardContainer>
  );
};

export default CardList;

const CardContainer = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
  padding: 33px;
`;
