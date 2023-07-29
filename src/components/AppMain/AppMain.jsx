import React from "react";
import PostList from "../PostList/PostList";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import style from './style.module.css';

const AppMain = () => {
  return (
    <div className={style.main}>
      <div className="container">
        <Search />
        <PostList />
        <Pagination />
      </div>
    </div>
  );
};

export default AppMain;
