import Favorites from "Pages/Favorites/Favorites";
import Home from "Pages/Home/Home";
import Teachers from "Pages/Teachers/Teachers";
import { Navigate, Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
