import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Rect from './Rect';



class App extends Component {
  input = '';

  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }
  inputStyle = {
    fontSize: "20px",
    padding: "5px",
  }

  constructor(props) {
    super(props);
    this.state = {
      message: "type your name: "
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event) {
    alert(event.target.value + "は長すぎます");
  }

  render() {
    return (
      <div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <Message maxlength="10" onCheck={this.doCheck}></Message>
      </div>
    );
  }
}


class Message extends Component {
  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return (
      <input type="text" style={this.inputStyle} onChange={this.doChange} />
    );
  }
}

export default App;
