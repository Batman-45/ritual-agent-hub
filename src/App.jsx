import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ProjectDetails from "./pages/ProjectDetails";
import SubmitAgent from "./pages/SubmitAgent";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/project/:id"
        element={<ProjectDetails />}
      />

      <Route
        path="/submit"
        element={<SubmitAgent />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}