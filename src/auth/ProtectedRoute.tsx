import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading)
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
