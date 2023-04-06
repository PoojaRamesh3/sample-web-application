import { Link } from "react-router-dom";

const Header = () => {
  const logo = require("../assets/signup.png");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark position-fixed start-0 end-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="30" height="24" />
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
