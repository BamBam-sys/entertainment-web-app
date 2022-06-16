import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const {
    persistedReducer: {
      user: {
        user: { userId },
      },
    },
  } = useSelector((state) => state);

  return userId ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRoutes;
