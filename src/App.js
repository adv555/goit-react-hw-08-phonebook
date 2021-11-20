import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import 'styles/shared.scss';

import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
import { fetchCurrentUser } from 'redux/auth/operations';
import { getIsFetchingCurrent } from 'redux/auth/selectors';

import PrivateRoute from 'components/PrivatRoute';
import PublicRoute from 'components/PublicRoute';

// const HomePage = lazy(() => import('pages/HomePage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Routes>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          <Route
            path="/"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            // redirectTo="/login"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            // restricted
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            // restricted
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route element={<NotFoundPage />} />
          {/* </Suspense> */}
        </Routes>
      </>
    )
  );
};

export default App;
