import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import { NewsList } from './components/NewsList/NewsList'
import { NewsRouter } from './components/NewsRouter/NewsRouter';

class App extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

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

        {/* <HackerNewsGrid /> */}

        {!this.state.error ? <NewsRouter /> : 'ups'}
      </div>
    );
  }
}

class HackerNewsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 1,
      items: []
    };
  }

  componentDidMount() {
    this.loadContent(1);
  }

  handleClick = (i) => {
    if (i === 1 && this.state.current_page + i > 1 || i === -1 && this.state.current_page + i > 0) {
      this.setState({ current_page: this.state.current_page + i },
        () =>
          this.loadContent(this.state.current_page));
    }
  }

  loadContent = (pageNo) => {
    if (pageNo > 0) {
      fetch("http://node-hnapi.herokuapp.com/news?page=" + pageNo)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              items: result
            });
          },
          (error) => {
            alert(error);
          }
        )
    }
  }

  render() {
    const { error, items } = this.state;
    return (
      <div class="container">
        <div class="row">
          <ul>
            {
              items.map(item => (
                <li key={item.id}>
                  <a href={item.url} target="_blank">{item.title} {item.points}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div class="row">
          <div class="col">
            <Button onClick={() => this.handleClick(-1)} className={(this.state.current_page === 1) ? "hidden" : ""}>Previous</Button>
            <label>{this.state.current_page}</label>
            <Button onClick={() => this.handleClick(1)}>Next</Button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
