import { createContext, useContext, useEffect, useState } from "react";

//* Creo il contesto
const PostContext = createContext();

//* Esporto il provider
export const PostContentProvider = ({ children }) => {
  const localhost = "http://localhost:3000/posts";

  const [postsData, setPostsData] = useState({
    posts: [],
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(localhost)
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map((post) => ({
          id: post.id,
          image: post.image,
          title: post.title,
          category: post.category,
        }));

        const newPostsData = { ...postsData, posts };
        setPostsData(newPostsData);
      });
  };

  return (
    <PostContext.Provider value={postsData}>{children}</PostContext.Provider>
  );
};

//* Esporto lo "use" per i consumers
export const usePostContext = () => useContext(PostContext);
