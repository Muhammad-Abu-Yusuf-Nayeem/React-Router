import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>post detail</Link>
      <button onClick={handleShowDetail}>click to see details</button>
    </div>
  );
};

export default post;
