import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function postDeatail() {
  const postId = useParams().id;
  const apiUrl = "http://localhost:3000";

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (postId) => {
    const url = `${apiUrl}/posts/${postId}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("OOOPS, qualcosa è andato storto!");
        }
        return res.json();
      })

      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1>Dettaglio post</h1>
      {post && (
        <>
          <img src={post.image} alt="" width="600" />
          <p>
            <strong>Titolo: </strong>
            {post.title}
          </p>
          <p>
            <strong>Contenuto: </strong>
            {post.content}
          </p>
          <p>
            <strong>Categoria: </strong>
            {post.category}
          </p>
        </>
      )}
    </div>
  );
}
