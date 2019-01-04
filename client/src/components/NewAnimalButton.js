import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NewAnimalButton = () =>
  <Button component={Link} to="/animals/new" variant="contained" color="primary" className="btn-icon-right">
    New Animal
    <AddIcon />
  </Button>

export default NewAnimalButton;
