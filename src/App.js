import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import Header from 'components/Header';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { isLoading } from 'redux/selectors';

import 'styles/shared.scss';

const App = () => {
  const loader = useSelector(isLoading);

  return (
    <div className="App">
      <Header title={'PhoneBook'}>
        <Filter />
      </Header>
      {loader && (
        <Section>
          <Loader type="Oval" color="black" height={'50vh'} width={80} />
        </Section>
      )}
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;

// const [contacts, setContacts] = useState(
//   JSON.parse(window.localStorage.getItem('contacts:')) ?? initialContacts,
// );
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   window.localStorage.setItem('contacts:', JSON.stringify(contacts));
// }, [contacts]);
