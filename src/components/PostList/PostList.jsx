import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slice/datasSlise";
import { usePosts } from "../../hooks/usePost";
import Post from "../Post/Post";

import MyButton from "../UI/button/MyButton";

import style from "./PostList.module.css";
import arrowIcon from "../../icons/arrow-down.svg";

const PostList = () => {
  const dispatch = useDispatch();
  const dataSort = useSelector((state) => state.datas.filter.sort);
  const dataQuery = useSelector((state) => state.datas.filter.query);
  const dataPosts = useSelector((state) => state.datas.posts);
  const sortSearchPost = usePosts(dataPosts, dataSort.sort, dataQuery.query);
  
  return (
    <>
      <div className={style.titles}>
        <div className={style.titles__item}>
        <MyButton
          className={style.titles__btn}
          onClick={() =>
            dispatch(setSort({ sort: dataSort.sort === "id" ? "" : "id" }))
          }
        >
          <span className={style.titles__text}>ID</span>
          <img
            
            className={dataSort.sort === "id" ? style.titles__icon_active : style.titles__icon}
            src={arrowIcon}
            width="12"
            height="6"
            alt=""
            
          />
        </MyButton>
        </div>
        
        <div className={style.titles__item}>
        <MyButton
          className={style.titles__btn}
          type="button"
          onClick={() =>
            dispatch(
              setSort({ sort: dataSort.sort === "title" ? "" : "title" })
            )
          }
        >
          <span className={style.titles__text}>Заголовок</span>
          <img
            className={dataSort.sort === "title" ? style.titles__icon_active : style.titles__icon}
            src={arrowIcon}
            width="12"
            height="6"
            alt=""
          />
        </MyButton>
        </div>
        
        <div className={style.titles__item}>
        <MyButton
          className={style.titles__btn}
          onClick={() =>
            dispatch(setSort({ sort: dataSort.sort === "body" ? "" : "body" }))
          }
        >
          <span className={style.titles__text}>Описание</span>
          <img
            className={dataSort.sort === "body" ? style.titles__icon_active : style.titles__icon}
            src={arrowIcon}
            width="12"
            height="6"
            alt=""
          />
        </MyButton>
        </div>
        
      </div>
    { sortSearchPost.length === 0 ? (
        <p className={style.massege}>Совпадений нет</p>
      ): (
        sortSearchPost.map((post) => (
          <Post key={post.id} post={post} />
        ))
      )
      
    }
      
    </>
  );
};

export default PostList;
