import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/details";
import { Home } from "./pages/home";

export const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};
