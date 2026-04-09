import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Role check (RBAC)
  if (roleRequired && role !== roleRequired) {
    return <h3>Access Denied ❌</h3>;
  }

  return children;
}