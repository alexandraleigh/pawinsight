import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AnimalListItem from './AnimalListItem';

class AnimalsTable extends Component {
    render() {
        return (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Breed</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.animals.map( animal => {
                  return (<AnimalListItem animal={animal} key={animal.id} match={this.props.match} />)
                })}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}

export default AnimalsTable;
