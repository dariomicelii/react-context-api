import { useState, useEffect } from "react";
import { usePostContext } from "../Contexts/postContext";
import { Link } from "react-router-dom";

export default function Posts() {
  // const [posts, setPosts] = useState([]);
  const { posts } = usePostContext();
  const localhost = "http://localhost:3000/posts";

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div className="container my-5">
      <div>
        <h1>Rolling Stones Archives</h1>
      </div>
      <table className="table table-dark my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Preview</th>
            <th scope="col">Titolo</th>
            <th scope="col">Categoria</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>
                <img src={post.image} width="60" />
              </td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>
                <Link
                  to={`/posts/${post.id}`}
                  type="button"
                  className="btn btn-primary"
                >
                  Dettaglio
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
