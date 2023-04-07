import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h1>Counter Screen</h1>
        <h2 className="m-5 p-5" id="counter">
          {count}
        </h2>
        <button className="m-5" onClick={incrementCount}>
          +1
        </button>
        <button className="m-5" onClick={decrementCount}>
          -1
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
