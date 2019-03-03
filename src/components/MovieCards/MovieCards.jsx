import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChipItem } from '../Chip';
import { Ratings } from '../Ratings';

const styles = () => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardMain: {
    marginTop: '50px',
    marginBottom: '20px',
    marginRight: '30px'
  }
});

const MovieCards = props => {
  const {
    classes,
    movie,
    view,
    movie: {
      _embedded: {
        show: { id }
      }
    },
    movie: {
      _embedded: {
        show: { summary }
      }
    }
  } = props;
  return (
    <Fragment>
      <Grid sm={3} className={classes.cardMain}>
        <Grid item key={movie.id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={
                movie._embedded.show.image
                  ? movie._embedded.show.image.medium
                  : 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
              }
              title="Image title"
            />
            <Grid direction="row" container>
              <Ratings
                rating={
                  movie._embedded.show.rating && movie._embedded.show.rating.average
                    ? movie._embedded.show.rating.average
                    : '0'
                }
              />
            </Grid>

            <Grid sm={12} direction="row">
              <ChipItem
                text="Language"
                color="primary"
                type={movie._embedded.show ? movie._embedded.show.language : 'English'}
              />
              <ChipItem
                text="Type"
                color="primary"
                type={movie._embedded.show ? movie._embedded.show.type : 'no idea'}
              />
            </Grid>
            <ChipItem
              text="Genres"
              color="default"
              type={movie._embedded.show ? movie._embedded.show.genres.toString() : 'no idea'}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h7" component="h4">
                {movie._embedded.show.name}
              </Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: movie._embedded.show.summary
                    ? movie._embedded.show.summary.substr(0, 100)
                    : 'summary not available'
                }}
                id="serverSideJss"
              />
              {/* <Typography>
                {movie._embedded.show.summary
                  ? movie._embedded.show.summary.substr(1, 100)
                  : 'summary not available'}
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  view(id);
                }}
                color="primary"
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(MovieCards);
