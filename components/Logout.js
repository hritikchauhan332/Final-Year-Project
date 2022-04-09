import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    window.location.pathname = "/";
  }
  render() {
    return <div></div>;
  }
}

export default Logout;
