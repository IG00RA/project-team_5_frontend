import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from '../pages/MainLayout';
import NotFound from './NotFound/NotFound';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import moment from 'moment';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const AccountPage = lazy(() => import('../pages/Account'));
const CalendarPage = lazy(() => import('../pages/Calendar'));
const StatisticsPage = lazy(() => import('../pages/Statistics'));
const ChoosedMonthModule = lazy(() => import('./ChoosedMonth'));
const ChoosedDayModule = lazy(() => import('./ChoosedDay'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const date = moment().format('YYYY-MM-DD');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Goose loader// Refreshing user...</b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo={`/calendar/month/${date}`}
              component={<HomePage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo={`/calendar/month/${date}`}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo={`/calendar/month/${date}`}
              component={<LoginPage />}
            />
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          >
            <Route path="month/:currentDay" element={<ChoosedMonthModule />} />
            <Route path="day/:currentDay" element={<ChoosedDayModule />} />
          </Route>
          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/login" component={<AccountPage />} />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
