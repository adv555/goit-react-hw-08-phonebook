import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { getVisibleContacts, isLoading } from 'redux/contacts/selectors';

import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const loader = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    !loader &&
    contacts && (
      <table className={s.contactList}>
        <tbody>
          {contacts.map(({ name, number, id }) => {
            return (
              <tr className={s.contactListItem} id={id} key={id}>
                <td className={s.name}>{name}</td>
                <td className={s.number}>{number}</td>
                <td className={s.contactBtn}>
                  <button
                    className={s.btn}
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <ImBin />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
