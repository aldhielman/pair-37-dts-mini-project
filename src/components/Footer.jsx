import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="column-footer">
        <span>Audio and Subtitle</span>
        <span>Media Center</span>
        <span>Security</span>
        <span>Contact Us</span>
        <button className="btn-service">Service Code</button>
        <span>&copy; 2022 Movies, All Right Reserved</span>
      </div>
      <div className="column-footer">
        <span>Audio Description</span>
        <span>Investor Relations</span>
        <span>Legal Provisions</span>
      </div>
      <div className="column-footer">
        <span>Help center</span>
        <span>Jobs</span>
        <span>Cookie Preferences</span>
      </div>
      <div className="column-footer">
        <span>Gift Cards</span>
        <span>Terms of Use</span>
        <span>Corporate Information</span>
      </div>
    </div>
  );
};

export default Footer;
