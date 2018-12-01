import React, { Component } from 'react';
import axios from 'axios';
import Animal from './Animal';

class AnimalsContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
          animals: []
      }
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

    render() {
        return (
          <div className="animals-container">
            {this.state.animals.map( animal => {
              return (<Animal animal={animal} key={animal.id} />)
            })}
          </div>
        )
    }
}

export default AnimalsContainer;
