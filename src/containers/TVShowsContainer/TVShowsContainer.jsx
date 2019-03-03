import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { MovieCards } from '../../components/MovieCards';

class TVShowsContainer extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/db.json')
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data.splice(1, 21) });
      })
      .catch(error => {});
  }

  handleViewDetails = showId => {
    const { history } = this.props;
    history.push(`/shows?id=${showId}`);
  };

  render() {
    const movies = this.state.data.map(movie => {
      return <MovieCards movie={movie} view={this.handleViewDetails} />;
    });
    return (
      <Grid container direction="row" justify="center" spacing={32}>
        {movies}
      </Grid>
    );
  }
}

export default withRouter(TVShowsContainer);
