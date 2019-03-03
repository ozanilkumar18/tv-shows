import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Tabber = props => {
  const { classes, value, change } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={change}>
          <Tab label="Official Website" />
          <Tab label="Previous Episode" />
          <Tab label="Next Episode" />
          <Tab label="Schedule" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          You can visit official website for more information on this show.
          <br />
          <br />
          <Button variant="contained" size="small" onClick={() => {}} color="primary">
            Official website
          </Button>
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          Previous Episode.
          <br />
          <br />
          <Button variant="contained" size="small" onClick={() => {}} color="primary">
            Previous Episode
          </Button>
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          Next Episode.
          <br />
          <br />
          <Button variant="contained" size="small" onClick={() => {}} color="primary">
            Next Episode
          </Button>
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          This show runs on below schedule.
          <br />
          <br />
          Day: Wednesday
          <br />
          Time: 23:00
        </TabContainer>
      )}
    </div>
  );
};

export default withStyles(styles)(Tabber);
