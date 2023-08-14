import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../pages/MainLayout';
import NotFound from './NotFound/NotFound';
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const AccountPage = lazy(() => import('../pages/Account'));
const CalendarPage = lazy(() => import('../pages/Calendar'));
const StatisticsPage = lazy(() => import('../pages/Statistics'));
const ChoosedMonthModule = lazy(() => import('./ChoosedMonth'));
const ChoosedDayModule = lazy(() => import('./ChoosedDay'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route path="/calendar" element={<CalendarPage />}>
            <Route path="month/:currentDay" element={<ChoosedMonthModule />} />
            <Route path="day/:currentDay" element={<ChoosedDayModule />} />
          </Route>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
