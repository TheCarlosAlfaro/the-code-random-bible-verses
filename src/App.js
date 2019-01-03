import React, { Component } from 'react';
import './App.css';
import { bibleVerses } from '../src/theCodeBibleVerses.json';
import BibleVerse from './components/BibleVerse';
import PinInput from 'react-pin-input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verse: 'Enter the code to get access',
      password: '',
      showForm: true
    };
  }

  generateVerse() {
    let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    this.setState({ verse: verse });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.password);
    if (this.state.password === '') {
      this.setState({ verse: 'You have to enter the code' });
    } else if (this.state.password === 'JER333') {
      this.generateVerse();
    } else {
      this.setState({ verse: 'Wrong code, try again' });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Code</h1>
          <BibleVerse verse={this.state.verse} />

          <form onSubmit={this.handleSubmit} noValidate>
            <PinInput
              length={6}
              secret
              onChange={(value, index) => {}}
              type="password"
              style={{ padding: '10px' }}
              inputStyle={{
                borderColor: 'white',
                color: 'white',
                fontSize: '2rem'
              }}
              inputFocusStyle={{ borderColor: '#02D100' }}
              onComplete={(value, index) => {
                this.setState({ password: value });
              }}
              noValidate
            />
            <button type="submit">Give me access</button>
          </form>
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
