import { useLoaderData } from "react-router-dom";
import Post from "./post";

const Posts = () => {
    const posts = useLoaderData();
    const postStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    };
  return (
    <div>
      <h2>All Posts: {posts.length}</h2>
      <div style={postStyle}>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
