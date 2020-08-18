import React,{Component} from 'react';

import {connect} from 'react-redux';
import {
  searchMovie,
  fetchMovies,
  setLoading} from '../actions/searchAction';

export class Navigationbar extends Component {

    onChange = e => {
      this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    console.log(this.props.text)
    this.props.setLoading();
  };

     render(){
      return(
       
        <div className="background">
          <form className="flexbox" id="searchForm" 
          onSubmit={this.onSubmit}>
            <p className="para">MOVIESEARCHER </p>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <select className="dropdown">
            <option value="Movies">Movies</option>
            <option value="Series">Series</option>
            </select>
            <button type="submit" className="btn btn-primary ">
              Search
            </button>
          </form>
          <style>{`
          
          .flexbox{
            display:flex;
            flex-direction: row;

          }

          .para{
            margin:10px;
            left:auto;
            font-weight:bold;

          }
          .background{
            background:#D3D3D3;
            margin-left:5px;
            margin-right:5px;
          }

          .dropdown{
            margin:10px
          }
          .btn{
            margin:5px;
            background:#A9A9A9;
          }
            
          `}</style>
        </div>
      );
     }

}

const mapStateToProps = state => ({
  text: state.movies.text
});
 
export default connect(
  mapStateToProps,
  {searchMovie, fetchMovies, setLoading}
  )(Navigationbar);