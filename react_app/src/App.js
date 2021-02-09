import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Rect from './Rect';


let data = {
  title: 'Title',
  message: "this is sample message"
};

const SampleContext = React.createContext(data);
class App extends Component {

  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}


class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default App;
