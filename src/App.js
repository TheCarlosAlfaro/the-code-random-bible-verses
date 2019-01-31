import React, { Component } from "react";
import "./App.css";
import { successMessage } from "../src/theCodeBibleVerses.json";
import BibleVerse from "./components/BibleVerse";
import PinInput from "react-pin-input";
import logo from "./the-code-logo.png";
import logo2 from "./the-code-no-verse.png";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import ReactPlayer from "react-player";

class App extends Component {
  constructor(props) {
    super(props);
    this.pinRef = React.createRef();
    this.state = {
      verse: "Introduzca el código para obtener acceso",
      password: "",
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

    if (this.state.password === "") {
      const node = this.pinRef.current;
      this.setState({ verse: "Tiene que introducir el código" });
      node.elements[0].focus();
    } else if (this.state.password === "JER333") {
      this.generateVerse();
      this.setState({ showVideo: true });
    } else {
      this.setState({ verse: "código incorrecto, vuelva a intentarlo" });
      this.setState({ password: "" });
      const node = this.pinRef.current;
      node.elements.forEach(function(pinItem) {
        pinItem.setState({ value: "" });
      });
      node.elements[0].focus();
    }
  };

  render() {
    let url = "http://aguilascfc.org/thecode";
    const videoUrl = "https://aguilascfc.wistia.com/medias/a2jy0is1u7";
    // let appId = '1792125874189569';
    const bosquejoUrl =
      "https://www.aguilascfc.org/wp-content/uploads/2019/01/THE-CODE-BOSQUEJOS.pdf";
    let appHeaderClassName = "App-header";
    if (this.state.showVideo) {
      appHeaderClassName += "Success";
    }

    return (
      <div className="App">
        <header className={appHeaderClassName}>
          {this.state.showVideo ? (
            <img src={logo} alt="Logo" className="App-logo" />
          ) : (
            <img src={logo2} alt="Logo" className="App-logo" />
          )}
          <p className="subtitle text-center">
            ¡Comparte esta página con tus amigos y familiares!
          </p>

          <div className="social-container">
            <FacebookShareButton
              className="fb-buttton"
              url={url}
              quote="¿Quieres saber el código?"
              hashtag="#THECODEJER333"
            >
              <FacebookIcon
                size={50}
                round={true}
                logoFillColor="#3A5A98"
                iconBgStyle={{ fill: "#fff" }}
              />
              <FacebookShareCount url={url} />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title="The Code"
              via="aguilascfc"
              hashtags={["THECODEJER333", "aguilascfc"]}
            >
              <TwitterIcon
                size={50}
                round={true}
                logoFillColor="#01ACED"
                iconBgStyle={{ fill: "#fff" }}
              />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title="The Code" separator=" ">
              <WhatsappIcon
                size={50}
                round={true}
                logoFillColor="#2CB743"
                iconBgStyle={{ fill: "#fff" }}
              />
            </WhatsappShareButton>
            <EmailShareButton url={url} subject="The Code">
              <EmailIcon
                size={50}
                round={true}
                logoFillColor="#7F7F7F"
                iconBgStyle={{ fill: "#fff" }}
              />
            </EmailShareButton>
          </div>
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
                style={{ padding: "10px" }}
                inputStyle={{
                  borderColor: "#fff",
                  fontSize: "2rem",
                  color: "#fff"
                }}
                inputFocusStyle={{ borderColor: "#FF0000" }}
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
            <p className="sub-heading">Versículo de esta semana.</p>
            <div className="verse__container verse">
              <p>
                <small>17</small> Oren sin cesar
                <br />
                <strong className="verse__ref">
                  (1 Tesalonicenses 5:17 NVI)
                </strong>
              </p>
            </div>
            <p className="sub-heading">Oración de esta semana.</p>
            <div className="verse">
              <p>
                Padre, ayúdame a poder orar sin cesar, que cada día, en cada
                momento y en cada lugar recuerde que Tú estás a mi lado para
                ayudarme a tener éxito, para escucharme y para guiarme. Ayúdame
                Espíritu Santo a estar consiente de Tú Presencia en mi vida.
                <br />
                <br />
                Quiero ser agradecido contigo, hacer tu voluntad, no la mía;
                quiero escucharte, tener un diálogo contigo, no solo hablar yo;
                quiero conocerte más, ser más como Tú y adorarte en espíritu y
                en verdad.
                <br />
                <br />
                Ayúdame a mantener mi corazón sano, sin orgullo, siendo humilde
                para perdonar y pedir perdón. Quiero ser tu mejor amigo y hablar
                contigo todos los días. Te lo pido en el nombre de Jesús, Amén.
              </p>
            </div>
            <p className="sub-heading">
              Tips que te ayudarán a “orar sin cesar”:
            </p>
            <div className="verse">
              <ul>
                <li>
                  Cada día al levantarte dale gracias a Dios por un día más de
                  vida, por tu familia, por tu salud, por tu trabajo, por todos
                  Sus beneficios.
                </li>
                <li>Entrégale tus planes diarios.</li>
                <li>
                  Mientras estas manejando, pon música de adoración y aprovecha
                  ese tiempo de quietud para escucharlo y adorarlo.
                </li>
                <li>Sigue el plan de lectura bíblica (3 versículos diarios)</li>
                <li>
                  Antes de acostarte, perdona a quien te ofendió en tu día, ora
                  por esa persona por nombre y pídele perdón a Dios si tu
                  ofendiste a alguien o hiciste algo que no le agrada y termina
                  dándole gracias a Dios por su protección para ti y tu familia.
                </li>
              </ul>
            </div>
            <p className="sub-heading">Bosquejo digital.</p>
            <div className="verse">
              <p className="text-center">
                <a href={bosquejoUrl} target="_blank" rel="noopener noreferrer">
                  ¡Puedes descargar el bosquejo aquí!
                </a>
                <br />
              </p>
            </div>
            <p className="sub-heading">Enseñanza en video.</p>
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
            <div className="github-link">
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
              <small className="github-link">
                Made with <i className="fa fa-heart" /> by&nbsp;
                <a
                  href="https://aguilascfc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aguilas Centro Familiar Cristiano.
                </a>
              </small>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
