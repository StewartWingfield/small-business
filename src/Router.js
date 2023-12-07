import React from "react";
import { Routes, Route } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Listings />} />
    </Routes>
  );
}

export default Router;
