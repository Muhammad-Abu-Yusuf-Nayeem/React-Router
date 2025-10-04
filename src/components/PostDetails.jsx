import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const user = useLoaderData();
  const { title, body } = user;
  return (
    <div>
      <h2>Title: {title}</h2>
      <p> {body}</p>
    </div>
  );
};

export default PostDetails;
