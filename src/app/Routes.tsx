// src/app/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodosPage } from '../pages/TodosPage';
import { ErrorPage } from '../pages/ErrorPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
