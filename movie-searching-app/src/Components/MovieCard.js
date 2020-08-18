import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-4 mt-3">
        <div className="card card-body bg-light text-center h-100">
          <img className="w-100 " src={movie.Poster} alt="Movie Cover" />
          <h6 >
            {movie.Title}
          </h6>
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;