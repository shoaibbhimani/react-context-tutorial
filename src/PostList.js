import React, { useContext, useEffect } from "react";
import axios from "axios";
import { PostStoreContext } from "./store/PostStore";

const PostList = () => {
  const { posts, setPosts, setSelectedPost } = useContext(PostStoreContext);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <div>PostList</div>
      <ul className="list-group">
        {posts.map((post, index) => {
          return (
            <li
              key={index}
              className="list-group-item"
              onClick={() => {
                setSelectedPost(post);
              }}
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
