import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ProjectDetails from "./pages/ProjectDetails";
import SubmitAgent from "./pages/SubmitAgent";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-emerald-500/30">
      <Routes>
        <Route path="/" element={<Home />} />

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
    </div>
  );
}