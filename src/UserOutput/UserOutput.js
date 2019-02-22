import React from "react";

export default class UserOutput extends React.Component {
  render() {
    return <p>Hello there i am the output class {this.props.text}</p>;
  }
}
