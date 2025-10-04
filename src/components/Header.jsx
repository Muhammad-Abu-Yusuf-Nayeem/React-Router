import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
