import React, { useState } from "react";

interface inputType {
  labelText: string;
  type: string;
}

const InputField = ({ labelText, type }: inputType) => {
  const [userInfo, setUserInfo] = useState("");

  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setUserInfo(newValue);
    console.log(newValue);
  };

  const userEnteredData = {
    enteredInfo: userInfo,
  };

  // console.log(userEnteredData);

  return (
    <div className="form-floating pb-1">
      <label>{labelText}</label>
      <input
        type={type}
        className="form-control top"
        onChange={userInputHandler}
      />
    </div>
  );
};

export default InputField;
