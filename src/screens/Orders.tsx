import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Orders = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h2>Orders Will be displayed here!</h2>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
