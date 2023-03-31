import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
