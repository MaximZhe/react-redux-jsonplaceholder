import React from "react";
import style from './Post.module.css';
const Post = ({post}) => {
  return (
    <div>
      <div className={style.post}>
        <div className={style.post__id}>{post.id}</div>
        <div className={style.post__title}>{post.title}</div>
        <div className={style.post__description}>{post.body}</div>
      </div>
    </div>
  );
};

export default Post;
