import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PublicLayout: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicLayout;
