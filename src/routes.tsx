import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/details";
import { Home } from "./pages/home";
import Profile from "./pages/profile/Profile";

export const routesList = [
  { name: "Home", route: "/" },
  { name: "Details", route: "/details" },
  { name: "Profile", route: "/profile" },
];

export const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
