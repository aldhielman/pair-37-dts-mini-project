import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

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
      <img
        className="nav__logo"
        src="https://fontmeme.com/permalink/200807/89ced72bb8fcd7fd4ff473f94bf82dd6.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://secure.gravatar.com/avatar/aa787139834b2c1f169f95e60062b222?s=100&d=retro&r=g"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
