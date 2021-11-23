import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Hero from 'components/Hero/Hero';
import Section from 'components/Section';

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
    // border: '2px solid #f7e852',
    fontWeight: 'bold',
    // backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    width: '50%',
    color: '#b4a5a5',
    borderRadius: '3px',
    // border: ' 2px solid #f7e852',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    // '&:hover': { color: '#151515', backgroundColor: '#f7e852' },
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ name, value });
    switch (name) {
      case 'name':
        return setName(value);
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
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Hero title={'Register Page'} />

      <Section>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Name
            <input
              style={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>

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
            CREATE ACCOUNT
          </button>
        </form>
      </Section>
    </>
  );
}
