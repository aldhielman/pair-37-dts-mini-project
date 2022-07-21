import { Box, Button, Popover, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import appLogo from "../static/app-logo.png";
import pp from "../static/ProfilePicture3.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleProfileButtonOnclick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/">
        <img className="nav__logo" src={appLogo} alt="Netflix Logo" />
      </Link>
      <Box className="nav__right">
        {user ? (
          <>
            <Button
              variant="outlined"
              color="error"
              onClick={handleProfileButtonOnclick}
            >
              <img
                style={{ width: "30px", height: "30px", marginRight: "5px" }}
                src={pp}
                alt="avatar"
              />
              <Typography>{user.email}</Typography>
            </Button>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Button sx={{ p: 2 }} color="error" onClick={handleLogout}>
                Logout
              </Button>
            </Popover>
          </>
        ) : (
          <Link to="/profile">
            <Button variant="contained" color="error">
              Login
            </Button>
          </Link>
        )}
      </Box>
    </div>
  );
}

export default Nav;
