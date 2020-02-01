import axios from "axios";
import Output from "./components/output";

import "./App.css";
import Text from "./components/controls/text";

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
        "https://baconipsum.com/api/?type=all-meat&paras=" +
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
  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div>
        <h1>React Text generator with baconipsum api-by Amila Weerasinghe </h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>number of paragraphs</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
