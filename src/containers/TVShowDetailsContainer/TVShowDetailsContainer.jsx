import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getQueryStringParams } from '../../helpers';
import { TvShowDetails } from '../../components/TvShowDetails';

class TVShowDetailsContainer extends Component {
  state = {
    data: {},
    value: 0
  };

  componentDidMount() {
    const { id } = getQueryStringParams(this.props.location.search);
    axios
      .get(`http://api.tvmaze.com/shows/${id}`)
      // .get(`http://localhost:3000/movie.json`)
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(error => {});
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <TvShowDetails
        value={this.state.value}
        show={this.state.data}
        tabChange={this.handleChange}
      />
    );
  }
}

export default withRouter(TVShowDetailsContainer);
