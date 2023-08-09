import { lazy } from 'react';
import { Route, Routes } from 'react-router';
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const AccountPage = lazy(() => import('../pages/Account'));
const CalendarPage = lazy(() => import('../pages/Calendar'));
const StatisticsPage = lazy(() => import('../pages/Statistics'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
    </Routes>
  );
};
