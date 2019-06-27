import React from 'react';
import TMDB_API_KEY from '../config/TMDBapi.js';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      titleresults:''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(event) {
    this.setState({search: event.target.value})
    fetch('https://api.themoviedb.org/3/search/movie?api_key='+ TMDB_API_KEY + '&query=' + event.target.value)
      .then(res=>res.json())
      .then(search => this.parseData(search))
      .catch(error = console.log(error))
  }

  parseData(search) {
    // this.setState({titleresults:search.original_title})
  }

  handleClick(){
    this.props.handleSearch(this.state.search)
  }


  render() {
    return (
      <form>
        <label>Search Movies: </label>
        <input type = "text" id = "searchinput" onChange= {this.handleOnChange} value = {this.state.search}></input>
        <button onClick = {this.handleClick}>SEARCH</button>
      </form>
    )
  }
}

export default SearchBar;

