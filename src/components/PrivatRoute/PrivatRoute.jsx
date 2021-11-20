import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
