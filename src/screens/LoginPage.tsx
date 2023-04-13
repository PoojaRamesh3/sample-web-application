import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const logo = require("../assets/signup.png");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passUpper, setPassUpper] = useState(false);
  const [passLower, setPassLower] = useState(false);
  const [passDigit, setDigit] = useState(false);
  const [passSpecialChar, setSpecialChar] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{6,}/;
    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);

    if (!minLengthPassword) {
      setPassLength(true);
    } else if (!uppercasePassword) {
      setPassUpper(true);
    } else if (!lowercasePassword) {
      setPassLower(true);
    } else if (!digitsPassword) {
      setDigit(true);
    } else if (!specialCharPassword) {
      setSpecialChar(true);
    } else {
      setValidPassword(true);
    }
    if (username === "pooja.ramesh331@gmail.com" && validPassword === true) {
      navigate("/home");
      alert("Success");
    }
  };

  return (
    <div className="outer-form">
      <div className="form-signin w-100 shadow-lg p-5 bg-body rounded">
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        <div className="pb-4">
          <h1>Log-In Here</h1>
        </div>
        <div className="row p-3 pb-0 pt-0">
          <label className="col-sm-2 col-form-label p-0 pb-2">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="row p-3 pb-0 pt-0">
          <label className="col-sm-2 col-form-label p-0 pb-2 pt-2">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {passLength === true && (
          <div className="text-start p-1 text-danger pb-0 pt-0">
            Password should be at least minumum 6 characters
          </div>
        )}
        {passUpper === true && (
          <div className="text-start p-1 text-danger pb-0 pt-0">
            Password should be at least one Uppercase
          </div>
        )}
        {passLower === true && (
          <div className="text-start p-1 text-danger pb-0 pt-0">
            Password should be at least one Lowercase
          </div>
        )}
        {passDigit === true && (
          <div className="text-start p-1 text-danger pb-0 pt-0">
            Password should be at least one digit
          </div>
        )}
        {passSpecialChar === true && (
          <div className="text-start p-1 text-danger pb-0 pt-0">
            Password should be at least one Special Characters
          </div>
        )}
        <div className="pt-4">
          <button
            onClick={() => onLogin()}
            className="w-100 btn btn-lg btn-color text-uppercase"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
