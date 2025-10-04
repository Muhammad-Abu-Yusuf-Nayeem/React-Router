import { Link, NavLink } from "react-router-dom";
import "./style.css";

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
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
