import { NavLink } from 'react-router-dom';
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import 'styles/shared.scss';
import s from 'components/AppBar/AuthNav/AuthNav.module.scss';

const AutoNav = () => (
  <div className={s.authBox}>
    <NavLink
      className={s.link}
      to="/login"
      style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
    >
      Login
    </NavLink>
    <NavLink
      className={s.link}
      to="/register"
      style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
    >
      Register
    </NavLink>
  </div>
);

export default AutoNav;
