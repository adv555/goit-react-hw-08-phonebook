import { NavLink } from 'react-router-dom';
import s from 'components/AuthButton/AuthButton.module.scss';
// import 'styles/shared.scss';

const AuthButton = ({ navTo = '/' }) => {
  return (
    <NavLink
      className={({ isActive }) => `${s.navLink}` + (isActive ? `${s.activeLink}` : '')}
      to={`/${navTo}`}
      //   style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
    >
      {navTo}
    </NavLink>
  );
};
export default AuthButton;
