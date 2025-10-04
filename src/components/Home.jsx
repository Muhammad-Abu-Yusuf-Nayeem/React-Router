import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";

const Home = () => {
  const navigation = useNavigation;
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <h2>Loading...</h2> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
