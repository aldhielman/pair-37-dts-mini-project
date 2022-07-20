import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 NotFound</h1>
      <Link to="/" style={{ textDecoration: "none", color: "red" }}>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
