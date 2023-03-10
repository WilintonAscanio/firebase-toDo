import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Error404 from "../components/error/Error404";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import { auth } from "../firebase/firebaseConfig";
import Register from "../register/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";

const Router = () => {
  const [isLogged, setIsLogged] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, [setIsLogged]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar isAuth={isLogged} />}>
          <Route element={<PrivateRoute isAuth={isLogged} />}>
            <Route index element={<Home />} />
          </Route>

          <Route element={<PublicRouter isAuth={isLogged} />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
