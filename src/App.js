import axios from "axios";

import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ""
    };
  }
  componentWillMount() {
    this.getSampleText();
  }
  getSampleText() {
    axios
      .get(
        "https://baconipsum.com/api/?type=all-meat&paras'" +
          this.state.paras +
          "&start-with-lorem=1&format=html"
      )
      .then(response => {
        this.setState({ text: response.data }, function() {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div>Hello </div>;
  }
}

export default App;
