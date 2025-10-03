import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>This is the home components</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
