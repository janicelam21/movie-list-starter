import React from 'react';

// const SearchBar = (props) => {
//   return (
//     <form>
//       <label>Search Movies: </label>
//       <input type = "text" id = "searchinput" onChange= {}></input>
//       <button onClick = {props.handleSearch}>SEARCH</button>
//     </form>
//   )

// }


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(event) {
    this.setState({search: event.target.value})
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

