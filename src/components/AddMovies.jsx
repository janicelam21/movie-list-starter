import React from 'react';

class AddMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addVal: ''
    }
    this.addHandler = this.addHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  addHandler(event) {
    var val = event.target.value;
    this.setState({addVal: val})
  }

  handleClick() {
    this.props.handleAdd(this.state.addVal)
    this.props.addAPI(this.state.addVal)
  }

  render() {
    return(
      <form>
        <label>Add Movie:</label>
        <input type = "text" value = {this.state.addVal} onChange = {this.addHandler}></input>
        <button onClick = {this.handleClick}>ADD MY MOVIE</button>
      </form>
    )
  }
}



export default AddMovies;