import React from 'react';
import IndivMovies from './IndividualMovies.jsx'

const MoviesContainer = (props) => {
  return (
    <div className = "container">
      {props.movies.length > 0 ? props.movies.map((each) => <IndivMovies key={props.id} movies={each} handleToggle = {props.handleToggle}/> ) : 'NO MOVIES'}
    </div>
  )
}

export default MoviesContainer;