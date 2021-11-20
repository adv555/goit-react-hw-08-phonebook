import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Hero from 'components/Hero';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { isLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const loader = useSelector(isLoading);
  return (
    <>
      <Hero title={'PhoneBook'}>
        <Filter />
      </Hero>
      {loader && (
        <Section>
          <Loader type="Oval" color="black" height={'50vh'} width={80} />
        </Section>
      )}
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </>
  );
};
export default ContactsPage;
