import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/AppBar/UserMenu';
import AutoNav from 'components/AppBar/AuthNav';
import { getIsLoggedIn } from 'redux/auth/selectors';
import MouseMoveSection from 'components/MouseMoveSection';

import 'styles/shared.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="header">
      <MouseMoveSection>
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
            <NavLink
              className="navLink"
              to="/present"
              style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
            >
              Bonus
            </NavLink>
          </div>
          <div>{isLoggedIn ? <UserMenu /> : <AutoNav />}</div>
        </nav>
      </MouseMoveSection>
    </header>
  );
};
export default Navigation;
