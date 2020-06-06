import React, { useState, useContext } from "react";

export const PostStoreContext = React.createContext();

const PostStoreProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostStoreContext.Provider
      value={{ posts, setPosts, selectedPost, setSelectedPost }}
    >
      {children}
    </PostStoreContext.Provider>
  );
};

export const usePostStore = () => {
  return useContext(PostStoreContext);
};

export default PostStoreProvider;
