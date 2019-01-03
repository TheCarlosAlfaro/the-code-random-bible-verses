import React, { Component } from 'react';
import './App.css';
import { bibleVerses } from '../src/theCodeBibleVerses.json';
import BibleVerse from './components/BibleVerse';
import PinInput from 'react-pin-input';

class App extends Component {
  constructor(props) {
    super(props);
    this.pinRef = React.createRef();
    this.state = {
      verse: 'Enter the code to get access',
      password: ''
    };
  }

  generateVerse() {
    let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    this.setState({ verse: verse });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password === '') {
      const node = this.pinRef.current;
      this.setState({ verse: 'You have to enter the code' });
      node.elements[0].focus();
    } else if (this.state.password === 'JER333') {
      this.generateVerse();
    } else {
      this.setState({ verse: 'Wrong code, try again' });
      this.setState({ password: '' });
      const node = this.pinRef.current;
      node.elements.forEach(function(pinItem) {
        pinItem.setState({ value: '' });
      });
      node.elements[0].focus();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">The Code</h1>
          <BibleVerse verse={this.state.verse} />

          <form onSubmit={this.handleSubmit}>
            <PinInput
              ref={this.pinRef}
              length={6}
              onChange={(value, index) => {}}
              type="custom"
              style={{ padding: '10px' }}
              inputStyle={{
                borderColor: '#222',
                color: '#111',
                fontSize: '2rem'
              }}
              inputFocusStyle={{ borderColor: '#02D100' }}
              onComplete={(value, index) => {
                this.setState({ password: value });
              }}
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
