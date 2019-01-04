import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PawIcon from '@material-ui/icons/Pets';
import Home from './views/Home'
import Animals from './views/Animals'
import AnimalNew from './views/AnimalNew'

const styles = {
  grow: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
    <Router>
      <div className="wrapper">
        <AppBar position="fixed">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" color="inherit" className={`logo ${classes.grow}`}>
              Rescue Insight
              <PawIcon fontSize="small" />
            </Typography>
            <Button component={NavLink} to="/animals" color="inherit" activeClassName={classes.active}>Animals</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/animals/new" component={AnimalNew} />
          <Route path="/animals" component={Animals} />
        </Switch>
      </div>
    </Router>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
