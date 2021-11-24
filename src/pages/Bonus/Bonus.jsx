import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from 'redux/santa/actions';
import { getMembers } from 'redux/santa/selectors';
import shortid from 'shortid';
import MemberList from 'components/Bonus/MemberList/MemberList';
import Section from 'components/Section';
import Hero from 'components/Hero';
import RandomMemberList from 'components/Bonus/RandomMemberList';
import s from 'pages/Bonus/Bonus.module.scss';

const ChristmasSanta = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [present, setPresent] = useState('');
  const members = useSelector(getMembers);
  const [recipients, setRecipients] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundColor = '#EDF2F0';
    return () => {
      document.body.style.backgroundColor = '#263238';
    };
  }, []);

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'present':
        return setPresent(value);

      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    if (members.some(member => member.email === email)) {
      return alert('Member already exist');
    }

    dispatch(addMember({ name, email, present, id: shortid.generate() }));
    setName('');
    setEmail('');
    setPresent('');
  };

  const getRandomList = () => {
    // let halfArr = members.length / 2;
    // const arrOne = members.slice(0, halfArr);
    // const arrTwo = members.slice(halfArr, members.length);
    // console.log(arrOne);
    // console.log(arrTwo);
    const recipients = [...members].sort(() => Math.floor(Math.random() - 0.5));

    recipients !== members ? setRecipients(recipients) : getRandomList();
  };

  return (
    <>
      <Hero title={'Secret Santa'} />
      <Section>
        <div syle={{ margin: '0 auto' }}>
          <form className={s.Form} action="" onSubmit={onSubmit}>
            <div className={s.Group}>
              <label htmlFor="">Name:</label>

              <input type="text" name="name" value={name} onChange={onChange} required />

              <label htmlFor="">Email:</label>

              <input type="email" name="email" value={email} onChange={onChange} required />

              <label htmlFor="">Gift:</label>

              <input type="text" name="present" value={present} onChange={onChange} />

              <button className={s.Btn} type="submit">
                Get present
              </button>
            </div>
          </form>
          <MemberList />
          {members.length % 2 === 0 && (
            <button className={s.Btn} type="button" onClick={getRandomList}>
              SHUFFLE
            </button>
          )}
        </div>
      </Section>
      <RandomMemberList randomMembers={recipients} />
    </>
  );
};
export default ChristmasSanta;
