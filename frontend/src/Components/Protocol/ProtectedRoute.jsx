import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return children;
};

export default ProtectedRoute;