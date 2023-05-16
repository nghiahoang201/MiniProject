import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" ml={10}>
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            home
          </Link>
          <Link
            to="/user"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "uppercase",
              marginLeft: "10px",
            }}
          >
            user
          </Link>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
