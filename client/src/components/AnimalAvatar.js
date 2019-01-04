import React from 'react'
import PawIcon from '@material-ui/icons/Pets';
import Avatar from '@material-ui/core/Avatar';

class AnimalAvatar extends React.Component {
  render() {
    if (this.props.animal.images.length > 0) {
      return (
        <Avatar alt={this.props.animal.name} src={this.props.animal.images[0].url} className='avatar'/>
      )
    } else {
      return (
        <Avatar className='avatar'>
          <PawIcon />
        </Avatar>
      )
    }
  }
}

export default AnimalAvatar
