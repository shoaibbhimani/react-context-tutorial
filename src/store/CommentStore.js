import React, { useState, useContext } from "react";

const CommentStoreContext = React.createContext();

const CommentStoreProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  return (
    <CommentStoreContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentStoreContext.Provider>
  );
};

export const useCommentStore = () => {
  return useContext(CommentStoreContext);
};

export default CommentStoreProvider;
