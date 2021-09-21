import React, { useEffect } from "react";
import { useStore } from "store";
import { setPostList } from "store/postReducer";
import { fetchPostList } from "api";
import { BASE_URL, PATH } from "utils/constant";

const CardList = () => {
  const [state, dispatch] = useStore();
  console.log(state);
  const getPostList = async () => {
    try {
      const params = { userId: 1 };
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
