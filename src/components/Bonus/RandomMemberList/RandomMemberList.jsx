import { useSelector } from 'react-redux';
import { getMembers } from 'redux/santa/selectors';
import { useDispatch } from 'react-redux';
import { deleteMember } from 'redux/santa/actions';
import Section from 'components/Section/Section';

const MemberList = () => {
  const members = useSelector(getMembers);
  console.log(members);
  const dispatch = useDispatch();

  return (
    <Section>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.present}</p>
            <button type="button" onClick={() => dispatch(deleteMember(member.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.present}</p>
            <button type="button" onClick={() => dispatch(deleteMember(member.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MemberList;
