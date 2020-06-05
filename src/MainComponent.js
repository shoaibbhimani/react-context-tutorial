import React from "react";

import PostList from "./PostList";
import PostDetail from "./PostDetail";

const MainComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <PostList />
        </div>
        <div className="col-md-6">
          <PostDetail />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
