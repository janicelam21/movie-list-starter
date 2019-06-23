import React from 'react';
import MoviesContainer from './MoviesContainer.jsx'
import SearchBar from './SearchBar.jsx'
import SeeAll from './SeeAll.jsx'
import AddMovies from './AddMovies.jsx'
import Watched from './Watched.jsx'
import Unwatched from './Unwatched.jsx'
import SearchDatabase from '../lib/searchTMDB.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    
    var unwatched = [];
    this.toggled = [];
    this.tf = '';
    this.state = {
      allMovies: this.props.movies,
      tf: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeeAll = this.handleSeeAll.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleUnwatched = this.handleUnwatched.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSearch(value) {
    const searchMatches = [];
    for (var i = 0; i<this.props.movies.length; i++) {
      if (this.props.movies[i].title.toUpperCase().includes(value.toUpperCase())){
        searchMatches.push(this.props.movies[i])
      }
    }
    this.setState({allMovies: searchMatches})
  }


  handleSeeAll() {
    this.setState({allMovies:this.props.movies})
  }

  handleAdd(moviename) {
    event.preventDefault();
    this.props.movies.push({title:moviename})
    this.setState({allMovies:this.props.movies})
  }

  handleWatched() {
    event.preventDefault();
    var watched = [];
    for (var i = 0; i<this.props.movies.length; i++) {
      if (this.props.movies[i].tf === true) {
        watched.push(this.props.movies[i])
      }
    }
    this.setState({allMovies:watched})
  }

  handleUnwatched() {
    event.preventDefault();
    var unwatched = [];
    for (var i = 0; i<this.props.movies.length; i++) {
      if (!this.props.movies[i].tf === true) {
        unwatched.push(this.props.movies[i])
      }
    }
    this.setState({allMovies:unwatched})

  }

  handleToggle(title) {
    for (var i = 0; i<this.props.movies.length; i++) {
      if (this.props.movies[i].title === title) {
        console.log('we got a match')
        var newtf = !this.props.movies[i].tf
        Object.assign(this.props.movies[i],{tf:newtf})
      }
    }
    console.log('this is from toggle', this.props.movies)
    this.setState({allMovies:this.props.movies})
  }

  render() {
    return (
      <div>
        <h1 className = "title">MovieList</h1>
        <SearchBar handleSearch = {this.handleSearch} searchRender = {this.state.searchMovies}/>
        <AddMovies handleAdd = {this.handleAdd}/>
        <SeeAll seeAll = {this.handleSeeAll}/>
        <br></br>
        <Watched handleWatched = {this.handleWatched}/>
        <Unwatched handleUnwatched = {this.handleUnwatched}/>
        <MoviesContainer movies = {this.state.allMovies} handleToggle = {this.handleToggle}/>
      </div>
    )
  }

}


export default App;