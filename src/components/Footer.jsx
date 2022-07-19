import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__menu">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Security</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Audio Description</li>
            <li>Investor Reaction</li>
            <li>Legal Provision</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <button>Service Code</button>
        <p>2022 Movies, All Right Reserved</p>
      </div>
    </div>
  );
}
