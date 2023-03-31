import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="home position-absolute top-50 start-50 translate-middle">
        <h1>Welcome Home!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;