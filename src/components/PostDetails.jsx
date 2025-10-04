import { useLoaderData } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const user = useLoaderData();
  const { title, body } = user;
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Title: {title}</h2>
      <p> {body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
