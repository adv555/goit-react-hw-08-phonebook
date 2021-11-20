import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Hero from 'components/Hero';
import Section from 'components/Section/Section';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Hero title={'Login Page'} />

      <Section>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <input type="email" name="email" value={email} onChange={handleChange} />
          </label>

          <label style={styles.label}>
            Пароль
            <input type="password" name="password" value={password} onChange={handleChange} />
          </label>

          <button type="submit">Войти</button>
        </form>
      </Section>
    </>
  );
}
