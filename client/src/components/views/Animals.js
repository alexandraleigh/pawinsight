import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import Animal from './Animal';
import AnimalsTable from '../AnimalsTable';
import Loading from '../Loading';

class Animals extends Component {
    constructor(props){
      super(props)
      this.state = {
          animals: [],
          loading: true
      }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/animals.json')
        .then(response => {
            console.log(response)
            this.setState({
                loading: false,
                animals: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        if (this.state.loading) {
          return (
            <Loading />
          )
        } else {
          return (
            <div className="animals-container container">
              <Route path={`${this.props.match.url}/:id`} render={ (props) => <Animal animals= {this.state.animals} {...props} />}/>
              <Route exact path={this.props.match.url} render={ (props) => <AnimalsTable animals= {this.state.animals} {...props} />}/>
            </div>
          )
        }
    }
}

export default Animals;
