import { Link } from "react-router-dom";

const SideBar = () => {
  const logo = require("../assets/avatar.png");

  const sideBarLists = [
    {
      id: 1,
      title: "Home",
      url: "/home",
    },
    {
      id: 2,
      title: "DashBoard",
      url: "/dashboard",
    },
    {
      id: 3,
      title: "Orders",
      url: "/orders",
    },
    {
      id: 4,
      title: "Products",
      url: "/products",
    },
    {
      id: 5,
      title: "Account",
      url: "/account",
    },
  ];

  return (
    <div>
      <div className="text-white bg-secondary sidenav">
        <div className="align-items-center pt-3">
          <img className="rounded-circle w-50" src={logo} alt="..." />
          <div className="card-body p-4">
            <div className="-mb4">
              <h3 className="h4 mb-0 text-dark">Johnson</h3>
              <span className="text-white">CEO &amp; Founder</span>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            {sideBarLists.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="nav-link text-white"
                aria-current="page"
              >
                {item.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
