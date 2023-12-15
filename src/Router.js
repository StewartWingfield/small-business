import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import AdminView from "./components/AdminView";
import BizDetails from "./components/BizDetails";
import LogIn from "./components/LogIn";
import Home from "./containers/Home";
import AddListing from "./containers/AddListing";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log(cookies);
  return cookies.loggedIn ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home component={Home} />} />
      <Route path="/details" element={<BizDetails />} />;
      <Route path="/login" element={<LogIn />} />
      <Route path="/view" element={<ProtectedRoute component={AdminView} />} />
      <Route path="/add" element={<ProtectedRoute component={AddListing} />} />
    </Routes>
  );
};

export default Router;
