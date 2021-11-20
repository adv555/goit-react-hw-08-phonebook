import { NavLink } from 'react-router-dom';
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import 'styles/shared.scss';

const AutoNav = () => (
  <div className="navBox">
    <NavLink
      className="navLink"
      to="/login"
      style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
    >
      Login
    </NavLink>
    <NavLink
      className="navLink"
      to="/register"
      style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
    >
      Register
    </NavLink>
  </div>
);

export default AutoNav;
