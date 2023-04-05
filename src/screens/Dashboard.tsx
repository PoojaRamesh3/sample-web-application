import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h1>Dashboard</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
