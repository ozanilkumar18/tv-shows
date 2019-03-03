import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MovieIcon from '@material-ui/icons/Movie';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  }
});

export const Header = props => {
  const { classes } = props;

  return (
    <Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MovieIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Tv Shows
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withStyles(styles)(Header);
