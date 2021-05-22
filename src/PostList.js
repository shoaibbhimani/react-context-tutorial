import React, { useEffect } from "react";
import axios from "axios";
import { usePostStore } from "./store/PostStore";
import { useCommentStore } from "./store/CommentStore";

const PostList = () => {
  
  const posts = usePostStore("posts")
  const setPosts = usePostStore("setPosts")
  const setSelectedPost = usePostStore("setSelectedPost")


  useCommentStore();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);


  console.log("rendering")

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
