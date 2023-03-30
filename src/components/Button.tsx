import { Outlet, Link } from "react-router-dom";

interface buttonText {
  btnText: string;
}

const Button = ({ btnText }: buttonText) => {
  return (
    <>
      <div className="pt-4">
        <button
          className="w-100 btn btn-lg btn-color text-uppercase"
          type="submit"
        >
          {btnText}
        </button>
      </div>
    </>
  );
};

export default Button;
