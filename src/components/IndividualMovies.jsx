// import React from 'react';
// import Toggle from './Toggle.jsx'
// import Panel from './Panel.jsx'

// const IndivMovies = (props) => {
//   return (
//     <div>
//       <p> <a href ='#' onClick = {}>{props.movies.title}</a>
//       <Toggle title = {props.movies.title} allmovies = {props.allmovies} handleToggle = {props.handleToggle} tf = {props.movies.tf}/> 
//       </p>
//     </div>
//   )

// }

// export default IndivMovies;

import React from 'react';
import Panel from './Panel.jsx'

class IndivMovies extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clicked: false
    }
  }

  handleClick() {
    this.setState((state) => {
      return ({clicked: !state.clicked})
    })
  }

  render() {
    return (
      <div className = "indiv" >
        <div> <a href ='#' onClick = {this.handleClick}>{this.props.movies.title}</a>
        {this.state.clicked ? <Panel info = {this.props.movies} title = {this.props.movies.title} handleToggle = {this.props.handleToggle} tf = {this.props.movies.tf}/> : null}
        </div>
      </div>
    )
  }

}

export default IndivMovies;