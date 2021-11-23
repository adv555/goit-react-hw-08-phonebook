import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMember } from 'redux/santa/actions';
import { getMembers } from 'redux/santa/selectors';
import shortid from 'shortid';
import MemberList from 'components/Bonus/MemberList/MemberList';
import Section from 'components/Section';

const ChristmasSanta = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [present, setPresent] = useState('');
  const dispatch = useDispatch();
  const members = useSelector(getMembers);

  const onChange = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);
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
    // console.log(e);
    if (members.some(member => member.email === email)) {
      return alert('Member already exist');
    }

    dispatch(addMember({ name, email, present, id: shortid.generate() }));
    setName('');
    setEmail('');
    setPresent('');
  };

  const getRandomList = () => {
    let halfArr = members.length / 2;
    // console.log(halfArr);
    const arrOne = members.slice(0, halfArr);
    const arrTwo = members.slice(halfArr, members.length);
    console.log(arrOne);
    console.log(arrTwo);
  };

  return (
    <Section>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Name:</label>
        <br />
        <input type="text" name="name" value={name} onChange={onChange} />
        <br />
        <label htmlFor="">Email:</label>
        <br />
        <input type="email" name="email" value={email} onChange={onChange} />
        <br />
        <label htmlFor="">Present:</label>
        <br />
        <input type="text" name="present" value={present} onChange={onChange} />
        <br />

        <button type="submit">Get present</button>
      </form>
      <MemberList />
      {members.length % 2 === 0 && (
        <button type="button" onClick={getRandomList}>
          Lotery
        </button>
      )}
    </Section>
  );
};
export default ChristmasSanta;
