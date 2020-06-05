import React, { useContext } from "react";

import { PostStoreContext } from "./store/PostStore";
const PostDetail = () => {
  const { selectedPost } = useContext(PostStoreContext);
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
