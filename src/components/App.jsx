import React from 'react';
import MoviesContainer from './MoviesContainer.jsx'
import SearchBar from './SearchBar.jsx'
import SeeAll from './SeeAll.jsx'
import AddMovies from './AddMovies.jsx'
import Watched from './Watched.jsx'
import Unwatched from './Unwatched.jsx'
import $ from 'jquery'
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.origMovies = '';
    this.toggled = [];
    this.tf = '';
    this.state = {
      allMovies: '',
      tf: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeeAll = this.handleSeeAll.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleUnwatched = this.handleUnwatched.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.addAPI = this.addAPI.bind(this)
  }

  callAPI() {
    $.ajax({
      url: '/api/movies',
      type: 'GET',
      success: (data) => {
        console.log('this is from our server', data)
        this.origMovies = data
        this.setState({allMovies:data})
      },
      error: (error) => {
        console.log('there has been an error')
      }
    })
  }

  componentDidMount() {
    this.callAPI();
  }

  addAPI(title) {
    axios.post('/api/movies',{title: title})
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  handleSearch(value) {
    const searchMatches = [];
    for (var i = 0; i<this.origMovies.length; i++) {
      if (this.origMovies[i].title.toUpperCase().includes(value.toUpperCase())){
        searchMatches.push(this.origMovies[i])
      }
    }
    this.setState({allMovies: searchMatches})
  }


  handleSeeAll() {
    this.setState({allMovies:this.origMovies})
  }

  handleAdd(moviename) {
    event.preventDefault();
    this.origMovies.push({title:moviename})
    this.setState((state) => {
      return {allMovies: this.origMovies}
    })
  } // fix this one

  handleWatched() {
    event.preventDefault();
    var watched = [];
    for (var i = 0; i<this.origMovies.length; i++) {
      if (this.origMovies[i].tf === true) {
        watched.push(this.origMovies[i])
      }
    }
    this.setState({allMovies:watched})
  }

  handleUnwatched() {
    event.preventDefault();
    var unwatched = [];
    for (var i = 0; i<this.origMovies.length; i++) {
      if (!this.origMovies[i].tf === true) {
        unwatched.push(this.origMovies[i])
      }
    }
    this.setState({allMovies:unwatched})

  }

  handleToggle(title) {
    for (var i = 0; i<this.origMovies.length; i++) {
      if (this.origMovies[i].title === title) {
        console.log('we got a match')
        var newtf = !this.origMovies[i].tf
        Object.assign(this.origMovies[i],{tf:newtf})
      }
    }
    // console.log('this is from toggle', this.props.movies)
    this.setState({allMovies:this.origMovies})
  }

  render() {
    return (
      <div>
        <h1 className = "title">MovieList</h1>
        <SearchBar handleSearch = {this.handleSearch} searchRender = {this.state.searchMovies}/>
        <AddMovies handleAdd = {this.handleAdd} addAPI = {this.addAPI}/>
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