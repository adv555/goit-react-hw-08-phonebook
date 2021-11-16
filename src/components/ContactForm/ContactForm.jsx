import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import s from 'components/ContactForm/ContactForm.module.scss';
import { addContact } from 'redux/operations';
import { isLoading } from 'redux/selectors';

export default function Form() {
  const dispatch = useDispatch();
  const loader = useSelector(isLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    !loader && (
      <form className={s.Form} onSubmit={handleSubmit}>
        <div className={s.Group}>
          <input
            type="text"
            name="name"
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            id={nameInputId}
            onChange={handleChange}
          />

          <div className="bar"></div>
        </div>

        <div className={s.Group}>
          <input
            type="tel"
            name="number"
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            id={numberInputId}
            onChange={handleChange}
          />

          <div className="bar"></div>
        </div>
        <button className={s.Btn} type="submit">
          add contact
        </button>
      </form>
    )
  );
}

// With import { connect } from 'react-redux';

/** const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form); */
