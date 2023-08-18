import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import NotFound from './NotFound/NotFound';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import moment from 'moment';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { selectTheme } from 'redux/user/selectors';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/theme';
import Loader from './loader/loader';
import MainLayout from 'pages/MainLayout/MainLayout';

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
  const isRefreshing = useSelector(selectIsRefreshing);
  const date = moment().format('YYYY-MM-DD');
  const userTheme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <ThemeProvider theme={userTheme === 'dark' ? darkTheme : lightTheme}>
      {isRefreshing ? (
        <Loader />
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
                  <PrivateRoute
                    redirectTo="/login"
                    component={<CalendarPage />}
                  />
                }
              >
                <Route
                  path="month/:currentDay"
                  element={<ChoosedMonthModule />}
                />
                <Route path="day/:currentDay" element={<ChoosedDayModule />} />
              </Route>
              <Route
                path="/account"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<AccountPage />}
                  />
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
      )}
    </ThemeProvider>
  );
};
