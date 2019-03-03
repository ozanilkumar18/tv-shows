import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
    font: '10px'
  }
});

const ChipItem = ({ classes, type, text, handleDelete, color }) => {
  return (
    <Chip
      label={`${text}: ${type}`}
      clickable
      className={classes.chip}
      color={color}
      onDelete={handleDelete}
      deleteIcon={<DoneIcon />}
    />
  );
};

export default withStyles(styles)(ChipItem);
