// import { useSelector } from 'react-redux';
// import Loader from 'react-loader-spinner';

// import Header from 'components/Header';
// import Section from 'components/Section';
// import Form from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
// import { isLoading } from 'redux/selectors';

import 'styles/shared.scss';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 8,
  },
  title: { flexGrow: 1 },
}));

const App = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phonebook
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Sigh Up
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Log In
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
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

// import { AppBar, Container, Box, Toolbar, Typography } from '@mui/material';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     color: 'transparent',
//   },
//   menuButton: {
//     marginRight: 8,
//   },
//   title: { flexGrow: 1 },
// }));

// const Navigation = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="fixed">
//       <Container fixed>
//         <Toolbar>
//           {/* <Box mr={3}> */}
//           <Typography variant="h6" className={classes.title}>
//             <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
//               Phonebook
//             </NavLink>
//           </Typography>
//           {/* </Box> */}
//           <AutoNav />
//           <UserMenu />
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navigation;
