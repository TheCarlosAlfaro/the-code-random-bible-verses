import React, { Component } from 'react';
import './App.css';
import { bibleVerses } from '../src/theCodeBibleVerses.json';
import BibleVerse from './components/BibleVerse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse: 'Enter the code to get access'
    };
  }

  generateVerse() {
    let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    this.setState({ verse: verse });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Code</h1>
          <BibleVerse verse={this.state.verse} />
          <button onClick={() => this.generateVerse()}>Give me access</button>
        </header>
        <small className="github-link">
          Made with <i className="fa fa-heart" /> by&nbsp;
          <a
            href="https://github.com/devbysalas/the-code-random-bible-verses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carlos Alfaro
          </a>
        </small>
      </div>
    );
  }
}

export default App;
