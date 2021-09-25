import React, { useState, useEffect } from "react";
import { useStore } from "store";
import { setPostList } from "store/postReducer";
import { fetchPostList } from "api";
import { BASE_URL, PATH } from "utils/constant";

const CardList = () => {
  const [state, dispatch] = useStore();
  const [userId, setUserId] = useState(1);

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

  return <div></div>;
};

export default CardList;
