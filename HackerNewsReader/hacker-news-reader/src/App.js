import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HackerNewsGrid />
      </div>
    );
  }
}

class HackerNewsGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {current_page: 1};
  }

  render()
  {
    return (
      <div class="container">
          <div class="row">
          </div>
          <div class="row">
            <div class="col">
              <Button>Previous</Button>
              <label>{this.state.current_page}</label>
              <Button>Next</Button>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
