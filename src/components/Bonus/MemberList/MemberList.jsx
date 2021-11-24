import { useSelector, useDispatch } from 'react-redux';
import { getMembers } from 'redux/santa/selectors';
// import { useDispatch } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { deleteMember } from 'redux/santa/actions';
import Section from 'components/Section/Section';
import s from './MemberList.module.scss';

const MemberList = () => {
  const members = useSelector(getMembers);
  console.log(members);
  const dispatch = useDispatch();

  return (
    members && (
      <Section>
        <table className={s.contactList}>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td className={s.name}>{member.name}</td>
                <td className={s.number}>{member.email}</td>
                <td className={s.present}>{member.present}</td>
                <td className={s.contactBtn}>
                  <button
                    className={s.btn}
                    type="button"
                    onClick={() => dispatch(deleteMember(member.id))}
                  >
                    <ImBin />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    )
  );
};

export default MemberList;
