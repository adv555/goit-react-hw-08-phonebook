import PropTypes from 'prop-types';
import s from 'components/Header/Header.module.scss';
function Header({ title, children }) {
  return (
    <header className={s.AppHeader}>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
