import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import s from 'components/Filter/Filter.module.scss';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.Filter}>
      <label className={s.FilterLabel} htmlFor="">
        Filter contacts by name
        <input
          className={s.FilterInput}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

// With import { connect } from 'react-redux';

/**
 const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
 */
