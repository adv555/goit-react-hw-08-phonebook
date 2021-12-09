import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import Hero from 'components/Hero';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { isLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const loader = useSelector(isLoading);
  useEffect(() => {
    document.body.style.backgroundColor = '#EDF2F0';
    return () => {
      document.body.style.backgroundColor = '#263238';
    };
  }, []);
  return (
    <>
      <Hero title={'PhoneBook'}>
        <Filter />
      </Hero>
      {loader && <Loader color={'black'} />}
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </>
  );
};
export default ContactsPage;
