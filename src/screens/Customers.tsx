import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Customers = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="home position-absolute top-50 start-50 translate-middle">
        <h1>List of Customers</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
