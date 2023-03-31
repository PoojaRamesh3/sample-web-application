import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const logo = require("../assets/avatar.png");
  const [isActive, setActive] = useState(false);
  const onClickHandler = () => {
    setActive(!isActive);
  };
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
            <Link
              to="/home"
              className={
                isActive ? "nav-link text-white active" : "nav-link text-white"
              }
              aria-current="page"
              onClick={onClickHandler}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={
                isActive ? "nav-link text-white active" : "nav-link text-white"
              }
              onClick={onClickHandler}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={
                isActive ? "nav-link text-white active" : "nav-link text-white"
              }
              onClick={onClickHandler}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={
                isActive ? "nav-link text-white active" : "nav-link text-white"
              }
              onClick={onClickHandler}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className={
                isActive ? "nav-link text-white active" : "nav-link text-white"
              }
              onClick={onClickHandler}
            >
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
