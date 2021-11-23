import PropTypes from 'prop-types';
import background from 'images/bg.png';
import MouseMoveSection from 'components/MouseMoveSection';

import s from 'components/Hero/Hero.module.scss';
function Hero({ title, children }) {
  return (
    <section className={s.AppHeader} style={{ backgroundImage: `url(${background})` }}>
      <MouseMoveSection>
        <h1 style={{ color: 'c5d8dd' }}>{title}</h1>
        {children}
      </MouseMoveSection>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
