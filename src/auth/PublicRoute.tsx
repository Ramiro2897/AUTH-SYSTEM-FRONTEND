import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { JSX } from "react";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

    if (loading) return null;

  // Si ya está logueado, redirige al dashboard
  if (user) return <Navigate to="/dashboard" replace />;

  // Si no está logueado, deja pasar
  return children;
};

export default PublicRoute;
