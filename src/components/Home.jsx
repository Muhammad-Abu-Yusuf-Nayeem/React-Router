import { Outlet } from "react-router-dom";
import Header from "./Header";
const Home = () => {
    return (
      <div>
        <h2>This is the home components</h2>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    );
};

export default Home;