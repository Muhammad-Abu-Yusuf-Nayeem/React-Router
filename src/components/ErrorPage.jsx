import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>{error.statusText || error.message}</h2>
      {error.status === 404 && (
        <div>
          <p>Go back where you from</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
