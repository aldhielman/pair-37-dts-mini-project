import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, loginOnly = true }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user && loginOnly) {
    return <Navigate to="/login" replace />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/" replace />;
  }

  return children;
}
