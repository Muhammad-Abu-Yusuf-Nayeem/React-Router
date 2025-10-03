import { useLoaderData } from "react-router-dom";
import User from "./User";

const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <div style={usersStyle}>
        {users.map((user) => (
          <User key={users.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
