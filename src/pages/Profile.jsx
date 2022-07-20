import React from "react";
import "./Profile.css";
import appLogo from "../static/app-logo.png";
import profile1 from "../static/ProfilePicture1.png";
import profile2 from "../static/ProfilePicture2.png";
import profile3 from "../static/ProfilePicture3.png";
import profile4 from "../static/ProfilePicture4.png";
import more from "../static/More.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile">
      <img className="profile__app-logo" src={appLogo} />
      <h1 className="profile__title">Who's watching ?</h1>
      <div className="profile__avatar-wrapper">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="profile__avatar-card">
            <img src={profile1} />
            <span>Agus</span>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="profile__avatar-card">
            <img src={profile2} />
            <span>Budi</span>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="profile__avatar-card">
            <img src={profile3} />
            <span>Chika</span>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="profile__avatar-card">
            <img src={profile4} />
            <span>Dino</span>
          </div>
        </Link>

        <div className="profile__avatar-card">
          <img src={more} />
          <span>Other</span>
        </div>
      </div>
    </div>
  );
}
