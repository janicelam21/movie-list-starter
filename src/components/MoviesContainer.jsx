import React from 'react';
import IndivMovies from './IndividualMovies.jsx'

const MoviesContainer = (props) => {
  return (
    <div className = "container">
      {props.movies.length > 0 ? props.movies.map((each) => <IndivMovies key={each.title} movies={each} handleToggle = {props.handleToggle}/> ) : 'NO MOVIES'}
    </div>
  )
}

export default MoviesContainer;