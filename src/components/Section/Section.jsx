import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isLoading } from 'redux/selectors';
import s from 'components/Section/Section.module.scss';

function Section({ title, children }) {
  const loader = useSelector(isLoading);
  return (
    <section className={`container ${s.Section}`}>
      {!loader && <h2 className={s.Title}>{title}</h2>}
      <div className={s.ContentWrapper}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
