import React from 'react';
import Toggle from './Toggle.jsx'

const Panel = (props) => {
  console.log('this is from panel:',props)
  return (
    <div className = "panel">
      <p>Popularity: {props.popularity}</p>
      <p>Release Date: {props.releaseDate}</p>
      <Toggle tf = {props.tf} handleToggle = {props.handleToggle} title = {props.title}/>
    </div>
  )
}

export default Panel;