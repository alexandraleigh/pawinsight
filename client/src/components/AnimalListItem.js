import React from 'react';
import { Link } from 'react-router-dom'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ViewIcon from '@material-ui/icons/Pageview';
import AnimalAvatar from './AnimalAvatar';

class animalListItem extends React.Component {
  render() {
    return (
      <TableRow key={this.props.animal.id}>
        <TableCell component="th" scope="row">{this.props.animal.id}</TableCell>

        <TableCell>
          <AnimalAvatar animal={this.props.animal}/>
        </TableCell>

        <TableCell>
          <Link to={`${this.props.match.url}/${this.props.animal.id}`}>
            {this.props.animal.name}
          </Link>
        </TableCell>

        <TableCell>{this.props.animal.breed}</TableCell>

        <TableCell>{this.props.animal.sex}</TableCell>

        <TableCell>
          <Link to={`${this.props.match.url}/${this.props.animal.id}`}>
            <ViewIcon fontSize="small" />
          </Link>
        </TableCell>

      </TableRow>
    )
  }
}

export default animalListItem
