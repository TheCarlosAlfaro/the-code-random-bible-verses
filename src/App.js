import React, { Component } from 'react';
import './App.css';
import { successMessage } from '../src/theCodeBibleVerses.json';
import BibleVerse from './components/BibleVerse';
import PinInput from 'react-pin-input';
import logo from './logo-black.png';
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon
} from 'react-share';
import ReactPlayer from 'react-player';

class App extends Component {
  constructor(props) {
    super(props);
    this.pinRef = React.createRef();
    this.state = {
      verse: 'Introduzca el código para obtener acceso',
      password: '',
      showVideo: false
    };
  }

  generateVerse() {
    // let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    let verse = successMessage;
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
      this.setState({ showVideo: true });
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
    const videoUrl = 'https://aguilascfc.wistia.com/medias/xz6o9y2tjc';
    // let appId = '1792125874189569';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
          <p className="subtitle">
            ¡Comparte esta página con tus amigos y familiares!
          </p>
          <FacebookShareButton
            className="fb-buttton"
            url={url}
            quote="¿Quieres saber el código?"
            hashtag="#THECODEJER333"
          >
            <FacebookIcon size={45} round={true} />
            <FacebookShareCount url={url} />
          </FacebookShareButton>
          {/* <h1 className="title">The Code</h1> */}

          <BibleVerse verse={this.state.verse} />

          {this.state.showVideo ? null : (
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
                  fontSize: '2rem',
                  color: '#111'
                }}
                inputFocusStyle={{ borderColor: '#0155E2' }}
                onComplete={(value, index) => {
                  this.setState({ password: value });
                }}
              />
              <button type="submit">OBTENER ACCESO</button>
            </form>
          )}
        </header>
        {this.state.showVideo ? (
          <div className="container">
            <p className="sub-heading">Versiculo</p>
            <div className="verse">
              <p>
              <small>14</small> Y ésta es la confianza que tenemos en él: si pedimos algo según su voluntad, él nos oye.
                <br />
                <strong>1 John 5:14</strong>
              </p>
            </div>
            <p className="sub-heading">Oración</p>
            <div className="verse">
              <p>
                <strong>Repita esta oracion: </strong>
                Declaro que mi familia es salva
                Declaro que mi familia es salva
                Declaro que mi familia es salva
                Declaro que mi familia es salva
                Declaro que mi familia es salva
                Declaro que mi familia es salva
                Declaro que mi familia es salva
              </p>
            </div>
            <p className="sub-heading">Video</p>
            <div className="video-container">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        ) : null}

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
