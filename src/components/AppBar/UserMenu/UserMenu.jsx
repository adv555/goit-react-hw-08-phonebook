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
      <span
        className="profileName"
        // style={{ color: 'yellow', marginRight: '15px', textTransform: 'capitalize' }}
      >
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
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </div>
  );
};

export default UserMenu;
