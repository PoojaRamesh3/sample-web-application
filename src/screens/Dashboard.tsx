import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const cardContents = [
    {
      id: 1,
      title: "Total Number of Orders",
      totalOrder: 3,
    },
    {
      id: 2,
      title: "Recently Viewed Products",
      totalOrder: 10,
    },
  ];
  return (
    <div>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h1>Dashboard</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 flex-nowrap">
          {cardContents.map((item, index) => (
            <DashboardCard
              key={index}
              dashboardCardTitle={item.title}
              totalOrder={item.totalOrder}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
