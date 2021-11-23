import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;
