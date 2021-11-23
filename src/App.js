import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import 'styles/shared.scss';

import AppBar from 'components/AppBar';
import { fetchCurrentUser } from 'redux/auth/operations';
import { getIsFetchingCurrent } from 'redux/auth/selectors';

import PrivateRoute from 'components/PrivatRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ProfilePage = lazy(() => import('pages/Bonus'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  // console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
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
                  <ProfilePage />
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
