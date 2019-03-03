import React, { Fragment } from 'react';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import Stars from '@material-ui/icons/StarHalf';
import StarsFull from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { getBeforeDecimal, getAfterDecimal } from '../../helpers';

const styles = {
  avatar: {
    margin: 10
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500]
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500]
  },
  goldenAvatar: {
    color: '#ffbf00',
    marginLeft: -5,
    backgroundColor: '#ffffff',
    height: '30px'
  }
};

const Ratings = ({ classes, rating }) => {
  return (
    <Fragment>
      {[...Array(getBeforeDecimal(rating))].map(() => {
        return (
          <Avatar color="primary" className={classes.goldenAvatar}>
            <StarsFull />
          </Avatar>
        );
      })}
      {getAfterDecimal(rating) >= 5 ? (
        <Avatar color="primary" className={classes.goldenAvatar}>
          <Stars />
        </Avatar>
      ) : null}
    </Fragment>
  );
};

export default withStyles(styles)(Ratings);
