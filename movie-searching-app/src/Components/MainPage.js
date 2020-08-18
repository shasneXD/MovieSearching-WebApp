import React, { Component } from 'react';

import { connect } from 'react-redux';

import Navigationbar from './Navigationbar';
import MoviesContainer from './MoviesContainer';
import Welcome from './Welcome'

export class MainPage extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div >
        <Navigationbar />
        {loading ?<Welcome /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(MainPage);
