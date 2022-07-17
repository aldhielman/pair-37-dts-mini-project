import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute loginOnly={true}>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
