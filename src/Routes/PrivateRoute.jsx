import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FadeLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext)
  let location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center">
        <FadeLoader />
      </div>
    )
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRoute
