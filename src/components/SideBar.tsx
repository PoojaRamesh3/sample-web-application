import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="text-white bg-secondary sidenav">
        <div className="border-0 shadow align-items-center pt-3">
          <img
            className="rounded-circle w-50"
            src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="-mb4">
              <h3 className="h4 mb-0 text-dark">Johnson</h3>
              <span className="text-white">CEO &amp; Founder</span>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders" className="nav-link text-white">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/customers" className="nav-link text-white">
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
