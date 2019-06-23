import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.handletoggle = this.handletoggle.bind(this)
  }

  handletoggle() {
    console.log('this is what was getting matched',this.props.title)
    this.props.handleToggle(this.props.title)
  }

  render() {
    return(
      <form>
        <label><input type = "radio" onClick = {this.handletoggle} checked = {this.props.tf}/> Watched </label>
        {/* {this.props.tf === true ? <button className = "watched" onClick = {this.handletoggle}>Watched</button> : <button className = "unwatched" onClick = {this.handletoggle}>Not Watched</button>}  */}
      </form>
    )
  }
}

export default Toggle;


