import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Ratings } from '../Ratings';
import { ChipItem } from '../Chip';
import { Tabber } from '../Tabs';

const styles = () => ({
  mainContent: {
    marginLeft: '150px',
    marginTop: '50px'
  },
  cardMedia: {
    height: '30%',
    width: '20%',
    paddingRight: '20px',
    paddingBottom: '20px'
  }
});

const TvShowDetails = ({ classes, show, tabChange, value }) => {
  return (
    <Grid sm={10} className={classes.mainContent}>
      <Grid container direction="row">
        <img
          className={classes.cardMedia}
          alt={show.name}
          src={
            show.image
              ? show.image.original
              : 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
          }
        />
        <Grid item direction="column">
          <Typography gutterBottom variant="h4" component="h4">
            {show.name}
          </Typography>
          <Typography gutterBottom variant="h7" component="h5">
            {`${show.language}, ${show.type}`}
          </Typography>

          <Grid container direction="row" align="center">
            Ratings:
            <Ratings rating={show.rating && show.rating.average ? show.rating.average : '0'} />
          </Grid>

          <ChipItem
            text="Country"
            color="primary"
            type={
              show.networK && show.network.country
                ? show.network.country.name || 'United States'
                : 'United States'
            }
          />
          <ChipItem text="Status" color="primary" type={show.status ? show.status : 'Running'} />
        </Grid>
      </Grid>
      <Typography gutterBottom variant="h5" component="h5">
        Show Summary
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} id="serverSideJss" />
      <Typography gutterBottom variant="h5" component="h5">
        Other links
      </Typography>
      <Tabber value={value} change={tabChange} />
    </Grid>
  );
};

export default withStyles(styles)(TvShowDetails);
