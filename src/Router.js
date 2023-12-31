import React from "react";
import { Routes, Route } from "react-router";
import Listings from "./containers/Listings";
import Details from "./containers/Details";
import LogIn from "./containers/LogIn";
import Navigation from "./containers/Navigation";
import AddListing from "./containers/AddListing";
import { Link } from "react-router-dom";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
};

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/add"
          element={<ProtectedRoute component={AddListing} />}
        />
      </Routes>
    </>
  );
};

export default Router;
