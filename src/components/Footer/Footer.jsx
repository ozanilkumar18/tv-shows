import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright © 2019 TV Shows
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Welcome to the official TV Shows website. Here you will be able to browse and download
          movies in excellent 720p, 1080p and 3D quality, all at the smallest file size.
        </Typography>
      </footer>
    </Fragment>
  );
};

export default withStyles(styles)(Footer);
