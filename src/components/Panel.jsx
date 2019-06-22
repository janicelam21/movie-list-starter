import React from 'react';
import Toggle from './Toggle.jsx'

const Panel = (props) => {
  console.log(props)
  return (
    <div className = "panel">
      <p>Runtime: {props.info.Runtime}</p>
      <p>Metascore: {props.info.Metascore}</p>
      <p>imdb Rating: {props.info.imdbRating}</p>
      <Toggle tf = {props.tf} handleToggle = {props.handleToggle} title = {props.title}/>
    </div>
  )
}

export default Panel;