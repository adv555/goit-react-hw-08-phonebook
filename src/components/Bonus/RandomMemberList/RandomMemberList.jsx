import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { getMembers } from 'redux/santa/selectors';
import Section from 'components/Section/Section';

const SantasList = ({ randomMembers }) => {
  const members = useSelector(getMembers);
  console.log(members);
  console.log(randomMembers);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    randomMembers.length === members.length && (
      <Section title={"Santa's List"}>
        <Table sx={{ minWidth: 160, maxWidth: 320 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Recipient</StyledTableCell>
              <StyledTableCell align="center">Gift</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {randomMembers.map(recipient => (
              <StyledTableRow key={recipient.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {recipient.name}
                </StyledTableCell>
                <StyledTableCell align="center">{recipient.present}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 160, maxWidth: 320 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Santa</StyledTableCell>
              <StyledTableCell align="center">Notice to Santa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map(member => (
              <StyledTableRow key={member.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {member.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <a href={`mailto:${member.email}`}>Send Email to {member.name} </a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Section>
    )
  );
};

export default SantasList;

/* <table>
          <thead>
            <tr>
              <th>Gift</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            {randomMembers.map(recipient => (
              <tr key={recipient.id}>
                <td>{recipient.present}</td>
                <td>{recipient.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className={s.contactList}>
          <thead>
            <tr>
              <th>Santa</th>
              <th>Notice</th>
            </tr>
          </thead>
          <tbody className={s.list}>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>
                  <a
                    href={`mailto:${member.email}`}
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    Send Email to {member.name}{' '}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */
