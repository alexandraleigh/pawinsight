import React, { Component } from 'react';
import axios from 'axios';
import Animal from './Animal';
import NewAnimalForm from './NewAnimalForm';

class AnimalsContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
          animals: []
      }
      this.addNewAnimal = this.addNewAnimal.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/animals.json')
        .then(response => {
            console.log(response)
            this.setState({
                animals: response.data
            })
        })
        .catch(error => console.log(error))
    }

    addNewAnimal(name, breed) {
      axios.post( 'http://localhost:3001/api/v1/api/v1/animals', { animal: {name, breed} })
      .then(response => {
        console.log(response)
        const animals = [ ...this.state.animals, response.data ]
        this.setState({animals})
      })
      .catch(error => {
        console.log(error)
      })
    }

    render() {
        return (
          <div className="animals-container">
            <NewAnimalForm onNewAnimal={this.addNewAnimal} />
            {this.state.animals.map( animal => {
              return (<Animal animal={animal} key={animal.id} />)
            })}
          </div>
        )
    }
}

export default AnimalsContainer;
