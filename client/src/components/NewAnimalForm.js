import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';

const styles = theme => ({
  textField: {
    width: '100%',
    maxWidth: 800
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    maxWidth: 800,
    display: 'block'
  },
  group: {
    flexDirection: 'row'
  },
  formLabel: {
    marginTop: 16
  }
});


class NewAnimalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      sex: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, breed, sex } = this.state;

    axios.post( '/api/v1/animals', { animal: {name, breed, sex} })
      .then(response => {
          console.log(response)
          window.location = "/animals"
      })
      .catch(error => {
          console.log(error)
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.onSubmit} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
             label="Name"
             onChange={this.onChange}
             className={classes.textField}
             value={this.state.name}
             name='name'
             margin="normal"
           />
         </FormControl>

         <FormControl className={classes.formControl}>
           <TextField
              label="Breed"
              onChange={this.onChange}
              className={classes.textField}
              value={this.state.breed}
              name='breed'
              margin="normal"
            />
          </FormControl>

         <FormControl className={classes.formControl}>
           <FormLabel component="legend" className={classes.formLabel}>Sex</FormLabel>
           <RadioGroup
             aria-label="Sex"
             name="sex"
             className={classes.group}
             value={this.state.sex}
             onChange={this.onChange}
           >
             <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" />
             <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" />
           </RadioGroup>
         </FormControl>

         <FormControl>
           <input
             hidden
             accept="image/*"
             className={classes.input}
             id="animal-image"
             multiple
             type="file"
           />
           <label htmlFor="animal-image">
             <Button component="span" variant="contained" className="btn-icon-left">
               <AddPhotoIcon fontSize="small" />
               Upload Image
             </Button>
           </label>
         </FormControl>

         <FormControl className={classes.formControl}>
           <Button type="sumbit" variant="contained" color="primary">
             Submit
           </Button>
         </FormControl>


      </form>
    );
  }
}

NewAnimalForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewAnimalForm);
