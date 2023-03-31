import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Orders = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="home position-absolute top-50 start-50 translate-middle">
        <h2>Orders Will be displayed here!</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
