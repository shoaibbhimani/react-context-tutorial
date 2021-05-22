import React, { useState } from "react";

import { createContext, useContextSelector } from "use-context-selector"

export const PostStoreContext = createContext();

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


export const usePostStore = (postStoreValue) => {
  return useContextSelector(PostStoreContext, state => {
    return state[postStoreValue]
  })
}


export default PostStoreProvider;
