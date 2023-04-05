import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Account = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h1>Account Details</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
