import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();
  return (
    <div className="navBox">
      <img src="" alt="" width="32" />
      <span className="profileName">
        <em>
          Signed in as <b>{name}</b>
        </em>
      </span>
      <NavLink
        className="navLink logOutBtn"
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default UserMenu;
