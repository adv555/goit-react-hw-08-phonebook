import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/AppBar/UserMenu';
import AutoNav from 'components/AppBar/AuthNav';
import { getIsLoggedIn } from 'redux/auth/selectors';
import s from 'components/AppBar/Navigation/Navigation.module.scss';

import 'styles/shared.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <nav className={`container ${s.nav}`}>
        <div className={s.authBox}>
          <NavLink
            className={s.link}
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={s.link}
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
