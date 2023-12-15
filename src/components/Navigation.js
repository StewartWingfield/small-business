import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const Navigation = () => {
  return (
    <AppBar style={{ color: green }} position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/BizDetails">About</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/Listings">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/LogIn">LogIn</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
