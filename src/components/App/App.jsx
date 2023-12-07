import Favorites from "../../Pages/Favorites/Favorites";
import Home from "Pages/Home/Home";
import Teachers from "Pages/Teachers/Teachers";
import { selectorIsAuth } from "Redux/auth/authSelectors";
import { getAllTeachersFromFavorites, getDataTeachers } from "Redux/teachers/teachersOperation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo = "/home" }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to={redirectTo} />;
};



export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth);

  useEffect(() => {
    dispatch(getDataTeachers());
  }, [dispatch])
  
  useEffect(() => {
    if (isAuth) {
      dispatch(getAllTeachersFromFavorites());
    }
  }, [isAuth, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/teachers" element={<Teachers />}/>
        <Route path="/favorites" element={<PrivateRoute component={<Favorites/>} />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
