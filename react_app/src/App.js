import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Rect from './Rect';


let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px",
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px",
  },
};

const ThemeContext = React.createContext(theme);

class App extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.state = {
      isDark: true,
    };
  }

  changeTheme(e) {
    this.setState((state) => ({
      isDark: !state.isDark,
    }));
  }

  render() {
    return (
      <div style={this.context[!this.state.isDark ? 'light' : 'dark']}>
        <button onClick={this.changeTheme}>
          {this.state.isDark ? "To Light" : "To dark"}
        </button>
        <Title value="Content page" />
        <Message value="This is Content sample." />
        <Message value="#これはテーマのサンプルです．" />
      </div >
    );
  }
}


class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <h2 sytle={this.context}>{this.props.value}</h2>
    );
  }
}


class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;