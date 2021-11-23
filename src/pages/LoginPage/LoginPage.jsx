import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Hero from 'components/Hero';
import Section from 'components/Section/Section';

const styles = {
  form: {
    width: 320,
    color: '#b4a5a5',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    outline: 'none',
    fontSize: '14px',
    padding: '8px',
    color: '#c5d8dd',
    borderRadius: '3px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    width: '50%',
    color: '#b4a5a5',
    borderRadius: '3px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
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
            Email
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>

          <button style={styles.button} type="submit">
            LOGIN
          </button>
        </form>
      </Section>
    </>
  );
}
