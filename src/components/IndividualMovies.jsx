import React from 'react';
import Panel from './Panel.jsx';
import $ from "jquery";
import TMDB_API_KEY from '../config/TMDBapi.js';

class IndivMovies extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clicked: false, 
      popularity: '',
      releaseDate: '',
    }
    this.handleRequest = this.handleRequest.bind(this);
    this.parseMovieData = this.parseMovieData.bind(this)
  }

  componentDidMount() {
    this.handleRequest()
  }

  handleClick() {
    this.setState((state) => {
      return ({clicked: !state.clicked})
    })

    // this.handleRequest(MovieName)
  }

  handleRequest() {
    const MovieName = this.props.movies.title.replace(' ','%20')
    $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie?api_key='+ TMDB_API_KEY + '&query=' + MovieName,
      type: 'GET',
      success: (data) => this.parseMovieData(data), //you can also just write the callback here
      // error: (error) => {console.log(error)}
    });

    //second option to do the request 
    // const URL = 'https://api.themoviedb.org/3/search/movie'
    //$.ajax(URL, {
        // type:"GET",
        // data: {
        //   api_key:TMDB_API_KEY,
        //   query: query
        // }
        // success: callback,
   // })
  }

  parseMovieData(data) {
    const results = data.results[0];
    this.setState({popularity: results.popularity});
    this.setState({releaseDate: results.release_date});
  }


  render() {
    // console.log('this is from indivMovies', this.props)
    return (
      <div className = "indiv" >
        <div> <a href ='#' onClick = {this.handleClick}>{this.props.movies.title}</a>
        {this.state.clicked ? <Panel popularity = {this.state.popularity} releaseDate = {this.state.releaseDate} handleToggle = {this.props.handleToggle} tf = {this.props.movies.tf} title = {this.props.movies.title}/> : null}
        </div>
      </div>
    )
  }

}

export default IndivMovies;