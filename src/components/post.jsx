import { Link } from "react-router-dom";

const post = ({ post }) => {
  const { id, title } = post;
  const postStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>post detail</Link>
    </div>
  );
};

export default post;
