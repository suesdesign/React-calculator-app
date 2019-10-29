import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return <button className="button">{this.props.value}</button>;
  }
}
