import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Products = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h2>Products</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
