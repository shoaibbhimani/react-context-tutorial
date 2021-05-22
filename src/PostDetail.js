import React from "react";
import {  usePostStore } from "./store/PostStore";
const PostDetail = () => {
  
  const selectedPost = usePostStore("selectedPost")

  if (selectedPost === null) {
    return <div>Please select a Post</div>;
  }

  return (
    <div className="jumbotron">
      <div className="display-4">{selectedPost.title}</div>
      <div className="lead">{selectedPost.body}</div>
    </div>
  );
};

export default PostDetail;
