import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import HomePage from 'pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';

export default function AppRoutes() {

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.USERNAME} element={<ProfilePage />} />
      <Route
        path={'*'}
        element={<Navigate to={ROUTES.HOME} replace />}
      />
    </Routes>
  );
}
