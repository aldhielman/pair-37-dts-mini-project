import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, loginOnly = true }) {
  const [user] = useAuthState(auth);
  console.log(user);

  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/" />;
  }

  return children;
}
