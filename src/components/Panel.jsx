import React from 'react';
import Toggle from './Toggle.jsx'

const Panel = (props) => {

  return (
    <div className = "panel">
      <p>Popularity: {props.popularity}</p>
      <p>Release Date: {props.releaseDate}</p>
      <img src = {`http://image.tmdb.org/t/p/w185${props.posterPath}`} />
      <Toggle tf = {props.tf} handleToggle = {props.handleToggle} title = {props.title}/>
    </div>
  )
}

export default Panel;