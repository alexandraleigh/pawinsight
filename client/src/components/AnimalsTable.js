import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AnimalListItem from './AnimalListItem';
import NewAnimalButton from './NewAnimalButton';

class AnimalsTable extends Component {
    render() {
        return (
          <div>
            <Grid container spacing={24} className="title-bar--primary">
              <Grid item xs={12} sm={6}>
                <h1>Animals</h1>
              </Grid>
              <Grid item xs={12} sm={6} className="button-block">
                <NewAnimalButton />
              </Grid>
            </Grid>

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
          </div>
        )
    }
}

export default AnimalsTable;
