import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import DashboardCard from "../components/DashboardCard";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const cardContents = [
    {
      id: 1,
      title: "Total Number of Orders",
      totalOrder: 3,
    },
  ];
  interface info {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
  }
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState<info[]>([]);

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
        <Table apiData={data} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
