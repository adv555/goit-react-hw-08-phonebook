import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import s from 'components/AppBar/AuthNav/AuthNav.module.scss';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.authBox}>
      <img src="" alt="" width="32" />
      <span style={{ color: 'yellow', marginRight: '5px', textTransform: 'capitalize' }}>
        Welcome, {name}
      </span>
      <NavLink
        className={s.link}
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </NavLink>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </div>
  );
};

export default UserMenu;

// (
//   <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
//     Logout
//   </NavLink>
// )
