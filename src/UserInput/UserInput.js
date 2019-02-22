import React from "react";

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInput: ""
    };
  }
  handleData = event => {
    this.setState({
      UserInput: event.target.value
    });
    this.props.textChangeHandler(event.target.value);
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.UserInput}
        onChange={this.handleData}
      />
    );
  }
}
