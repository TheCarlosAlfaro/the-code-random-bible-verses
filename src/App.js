import React, { Component } from 'react';
import './App.css';
import { bibleVerses, resources } from '../src/theCodeBibleVerses.json';
import BibleVerse from './components/BibleVerse';
import PinInput from 'react-pin-input';
import logo from './logo.png';
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon
} from 'react-share';

class App extends Component {
  constructor(props) {
    super(props);
    this.pinRef = React.createRef();
    this.state = {
      verse: 'Introduzca el código para obtener acceso',
      password: ''
    };
  }

  generateVerse() {
    // let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    let verse = resources.weeklyVerse;
    this.setState({ verse: verse });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password === '') {
      const node = this.pinRef.current;
      this.setState({ verse: 'Tiene que introducir el código' });
      node.elements[0].focus();
    } else if (this.state.password === 'JER333') {
      this.generateVerse();
    } else {
      this.setState({ verse: 'código incorrecto, vuelva a intentarlo' });
      this.setState({ password: '' });
      const node = this.pinRef.current;
      node.elements.forEach(function(pinItem) {
        pinItem.setState({ value: '' });
      });
      node.elements[0].focus();
    }
  };

  render() {
    let url = 'http://aguilascfc.org';
    // let appId = '1792125874189569';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
          <h1 className="title">The Code</h1>
          <BibleVerse verse={this.state.verse} />
          <form onSubmit={this.handleSubmit}>
            <PinInput
              focus
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
            <button type="submit">OBTENER ACCESO</button>
          </form>
          <p className="subtitle">
            ¡Comparte esta página con tus amigos y familiares!
          </p>
          <FacebookShareButton
            className="fb-buttton"
            url={url}
            quote="¿Quieres saber el código?"
            hashtag="#thecodejer333"
          >
            <FacebookIcon size={52} round={true} />
            <FacebookShareCount url={url} />
          </FacebookShareButton>
        </header>
        {/* <small className="github-link">
          Made with <i className="fa fa-heart" /> by&nbsp;
          <a
            href="https://github.com/devbysalas/the-code-random-bible-verses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carlos Alfaro
          </a>
        </small> */}
      </div>
    );
  }
}

export default App;
