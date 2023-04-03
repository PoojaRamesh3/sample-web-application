import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="home position-absolute">
        <h1>Welcome Home!</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-evenly mt-3 w-100">
          <Card />
          <Card />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-evenly mt-3 w-100">
          <Card />
          <Card />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-evenly mt-3 w-100">
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
