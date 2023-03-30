import React, { useState } from "react";

interface inputFields {
  firstName: string;
  lastName: string;
  email: string;
}

export default function LoginPage() {
  const logo = require("../assets/signup.png");
  const [userInfo, setUserInfo] = useState("");

  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setUserInfo(newValue);
    console.log(newValue);
  };

  const userEnteredData = {
    enteredInfo: userInfo,
  };

  console.log(userEnteredData);

  return (
    <div className="outer-form">
      <div className="form-signin w-100 shadow-lg p-5 bg-body rounded">
        <form action="/">
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <div className="pb-4">
            <h1>Sign-In Here</h1>
          </div>
          <div className="form-floating pb-1">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Pooja R"
              onChange={userInputHandler}
            />
          </div>
          <div className="form-floating pb-1">
            <label htmlFor="floatingInput">Password</label>
            <input
              type="password"
              className="form-control mb-3"
              onChange={userInputHandler}
            />
          </div>
          <div className="pt-4">
            <button
              className="w-100 btn btn-lg btn-color text-uppercase"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
