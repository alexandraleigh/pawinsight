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


class AnimalForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedAnimalImageFiles: [],
      submitFormProgress: 0,
      isSubmittingForm: false,
      didFormSubmissionComplete: false,
      animal: {
        name: '',
        breed: '',
        sex: '',
        errors: {}
      }
    };
  }

  // TODO: For edit page
  // componentWillMount() {
  //   if (this.props.match.params.id) {
  //     axios.get(`/animals/${this.props.match.params.id}`).then(response => {
  //       this.setState({
  //         selectedAnimalImageFiles: response.data.image_images,
  //         animal: {
  //           id: response.data.id,
  //           title: response.data.title,
  //           description: response.data.description,
  //           errors: {}
  //         }
  //       });
  //     });
  //   }
  // }

  onChange = (e) => {
    var animal = {...this.state.animal}
    animal[e.target.name] = e.target.value;
    this.setState({animal})
  }

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
             label="Name"
             onChange={this.onChange}
             className={classes.textField}
             value={this.state.animal.name}
             name='name'
             margin="normal"
           />
         </FormControl>

         <FormControl className={classes.formControl}>
           <TextField
              label="Breed"
              onChange={this.onChange}
              className={classes.textField}
              value={this.state.animal.breed}
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
             value={this.state.animal.sex}
             onChange={this.onChange}
           >
             <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" />
             <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" />
           </RadioGroup>
         </FormControl>

         <FormControl>
           {this.renderUploadImagesButton()}
           {this.renderSelectedAnimalImageFiles()}
         </FormControl>

         <FormControl className={classes.formControl}>
           <Button type="sumbit" variant="contained" color="primary">
             Submit
           </Button>
         </FormControl>


      </form>
    );
  }

  getNumberOfSelectedFiles() {
    return this.state.selectedAnimalImageFiles.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  renderUploadImagesButton() {
    let numberOfSelectedImages = this.getNumberOfSelectedFiles();
    return (
      <div>
        <input
          hidden
          name="images[]"
          ref={field => (this.imagesField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          multiple={true}
          accept="image/*"
          id="animal_images"
          onChange={e => this.handleAnimalImagesChange(e)}
        />
        <label disabled={this.state.isSubmittingForm} htmlFor="animal_images">
          <Button component="span" variant="contained" className="btn-icon-left">
            <AddPhotoIcon fontSize="small" />
            {numberOfSelectedImages === 0
              ? 'Upload Files'
              : `${numberOfSelectedImages} file${numberOfSelectedImages !== 1
                  ? 's'
                  : ''} selected`}
          </Button>
        </label>
      </div>
    );
  }

  handleAnimalImagesChange() {
    let selectedFiles = this.imagesField.files;
    let { selectedAnimalImageFiles } = this.state;
    for (let i = 0; i < selectedFiles.length; i++) {
      selectedAnimalImageFiles.push(selectedFiles.item(i));
    } //end for

    this.setState(
      {
        selectedAnimalImageFiles: selectedAnimalImageFiles
      },
      () => {
        this.imagesField.value = null;
      }
    );
  }

  renderSelectedAnimalImageFiles() {
    let fileDOMs = this.state.selectedAnimalImageFiles.map((el, index) => {
      if (el._destroy) { // we use _destroy to mark the removed image
        return null;
      }

      return (
        <li key={index}>
          <div className="image">
            <img
              width={150}
              src={el.id ? el.url : URL.createObjectURL(el)}
              style={{ alignSelf: 'center' }}
              alt=""
            />
            <div
              className="remove"
              onClick={() => this.removeSelectedAnimalImageFile(el, index)}>
              <span style={{ top: 2 }} className="glyphicon glyphicon-remove" />
            </div>
          </div>
          <div className="file-name">
            {el.name}
          </div>
        </li>
      );
    });

    return (
      <ul className="selected-images">
        {fileDOMs}
      </ul>
    );
  }

  removeSelectedAnimalImageFile(image, index) {
    let { selectedAnimalImageFiles } = this.state;
    if (image.id) { // image file that has been uploaded will be marked as destroy
      selectedAnimalImageFiles[index]._destroy = true;
    } else {
      selectedAnimalImageFiles.splice(index, 1);
    }

    this.setState({
      selectedAnimalImageFiles: selectedAnimalImageFiles
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let { animal } = this.state;
    animal.errors = {};
    this.setState(
      {
        isSubmittingForm: true,
        animal: animal
      },
      () => {
        this.submitForm();
      }
    );
  }

  buildFormData() {
    let formData = new FormData();
    formData.append('animal[name]', this.state.animal.name);
    formData.append('animal[breed]', this.state.animal.breed);
    formData.append('animal[sex]', this.state.animal.sex);

    let { selectedAnimalImageFiles } = this.state;
    for (let i = 0; i < selectedAnimalImageFiles.length; i++) {
      let file = selectedAnimalImageFiles[i];
      if (file.id) {
        if (file._destroy) {
          formData.append(`animal[images_attributes][${i}][id]`, file.id);
          formData.append(`animal[images_attributes][${i}][_destroy]`, '1');
        }
      } else {
        formData.append(
          `animal[images_attributes][${i}][image]`,
          file,
          file.name
        );
      }
    }
    return formData;
  }

  submitForm() {
    let submitMethod = this.state.animal.id ? 'patch' : 'post';
    let url = this.state.animal.id
      ? `http://localhost:3001/api/v1/animals/${this.state.animal.id}.json`
      : 'http://localhost:3001/api/v1/animals.json';

    axios[submitMethod](url, this.buildFormData(), {
        onUploadProgress: progressEvent => {
          let percentage = progressEvent.loaded * 100.0 / progressEvent.total;
          this.setState({
            submitFormProgress: percentage
          });
        }
      })
      .then(response => {
        this.setState({
          didFormSubmissionComplete: true
        });
        window.location = "/animals"
      })
      .catch(error => {
        let { animal } = this.state;
        console.log(error);
        animal.errors = error.response.data;
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          animal: animal
        });
      });
  }
}

AnimalForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnimalForm);
