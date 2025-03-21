import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayuot';
import Login from '../components/Login/Login';
import PrivateLayout from '../layouts/PrivateLayout';
import Dashboard from '../components/Dashboard/Dashboard';

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateLayout />}>
        <Route path="*" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default Navigation;
