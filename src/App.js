import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

import 'styles/shared.scss';

import AppBar from 'components/AppBar';
import { fetchCurrentUser } from 'redux/auth/operations';
import { getIsFetchingCurrent, getUserName } from 'redux/auth/selectors';

import PrivateRoute from 'components/PrivatRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page"  */));
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page"  */),
);
const LoginPage = lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"  */));
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page"  */),
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage' /* webpackChunkName: "404-page"  */));
const BonusPage = lazy(() => import('pages/Bonus' /* webpackChunkName: "bonus-page"  */));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  const authUser = useSelector(getUserName);

  useEffect(() => {
    if (authUser === null) {
      return;
    }
    dispatch(fetchCurrentUser());
  }, [authUser, dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/present"
              element={
                <PrivateRoute redirectTo="/login">
                  <BonusPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default App;
