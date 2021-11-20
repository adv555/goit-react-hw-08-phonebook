import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/AppBar/UserMenu';
import AutoNav from 'components/AppBar/AuthNav';
import { getIsLoggedIn } from 'redux/auth/selectors';

import 'styles/shared.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="header">
      <nav className="container nav">
        <div className="navBox">
          <NavLink
            className="navLink"
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className="navLink"
              to="/contacts"
              style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
            >
              Contacts
            </NavLink>
          )}
        </div>
        <div>{isLoggedIn ? <UserMenu /> : <AutoNav />}</div>
      </nav>
    </header>
  );
};
export default Navigation;
