import React from 'react';
import { Link } from 'react-router-dom'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ViewIcon from '@material-ui/icons/Pageview';

const AnimalListItem = ({animal, match}) =>
    <TableRow key={animal.id}>
      <TableCell component="th" scope="row">{animal.id}</TableCell>
      <TableCell>{animal.name}</TableCell>
      <TableCell>{animal.breed}</TableCell>
      <TableCell>{animal.sex}</TableCell>
      <TableCell>
        <Link to={`${match.url}/${animal.id}`}>
          <ViewIcon fontSize="small" />
        </Link>
      </TableCell>
    </TableRow>

export default AnimalListItem;
