import PropTypes from 'prop-types';

import s from 'components/Hero/Hero.module.scss';
function Hero({ title, children }) {
  return (
    <section className={s.AppHeader}>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
