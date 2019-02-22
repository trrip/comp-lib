import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }
  onTextChangeHandler = data => {
    this.setState({ textInput: data });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          value={this.state.textInput}
          textChangeHandler={this.onTextChangeHandler}
        />
        <UserOutput text={this.state.textInput} />
      </div>
    );
  }
}

export default App;
