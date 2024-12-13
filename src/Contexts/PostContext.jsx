import { createContext, useContext, useEffect, useState } from "react";

//* Creo il contesto
const PostContext = createContext();

//* Esporto il provider
export const PostContextProvider = ({ children }) => {
  const localhost = "http://localhost:3000/posts";
  const [posts, setPosts] = useState({
    posts: [],
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(localhost)
      .then((res) => res.json())
      .then((data) => {
        const postsOK = data.map((post) => ({
          id: post.id,
          image: post.image,
          title: post.title,
          category: post,
        }));
        const newPosts = { ...posts, postsOK };
        setPosts(newPosts);
      });
  };

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};

//* Esporto lo "use" per i consumers
export const usePostContext = () => useContext(PostContext);
