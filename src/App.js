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
    const videoUrl = "https://aguilascfc.wistia.com/medias/1319c2baz4";
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
                <small>16</small> La oración eficaz del justo puede mucho.
                <br />
                <strong className="verse__ref">(Santiago 5:16b RV60)</strong>
              </p>
            </div>
            <p className="sub-heading">Oración de esta semana.</p>
            <div className="verse">
              <p>
                Padre Celestial, quiero que mis oraciones no tengan estorbo y
                que lleguen hasta Tú Trono, por eso te pido que me ayudes en mi
                fe, que pueda ver con tus ojos, viendo las cosas que no son,
                como ya hechas.
                <br />
                <br />
                Te pido perdón por no hacer lo que te agrada, porque sabiendo lo
                que es bueno, muchas veces no lo hago. Ayúdame a alinearme a tú
                perfecta voluntad.
                <br />
                <br />
                Señor examina mi corazón y muéstrame si hay falta de perdón
                contra alguien, ayúdame a guardar mi corazón sobre toda cosa
                guardada.
                <br />
                <br />
                Declaro que tengo la mente de Cristo, que mi mente es autopista
                de tus pensamientos y no es basurero del diablo, pensare en lo
                bueno, en lo agradable, en lo que tiene virtud y en lo que es
                digno de alabanza.
                <br />
                <br />
                Te pido que seas el centro de mi hogar, de mi matrimonio y de mi
                vida. En el nombre de Jesús, Amén.
              </p>
            </div>
            <p className="sub-heading">
              Tips Para Que Tus Oraciones No Tengan Estorbo
            </p>
            <div className="verse">
              <ol>
                <li>
                  Habla con Fe. Diariamente dale gracias a Dios por adelantado,
                  por la respuesta a tus peticiones. Ejemplo: Si estas pidiendo
                  ser sano, dile: “Gracias Señor porque estoy sano”
                </li>
                <br />
                <li>
                  Busca una Promesa de Dios en la Biblia que respalde tu
                  petición, apréndetela y repítela en tu tiempo de oración.
                  Ejemplo, para la petición de salvación para tu familia:
                  “Porque Tú Palabra dice Cree en el Señor Jesucristo, y serás
                  salvo, tú y tu casa. (Hechos 16:31)
                </li>
                <br />
                <li>
                  Si tienes alguna relación dañada, arregla la situación lo
                  antes posible, pide perdón y perdona.
                </li>
                <br />
                <li>
                  En tu oración diaria pídele a Dios que examine tu corazón,
                  entrégale tus áreas de debilidad y pídele que te ayude a
                  alinearte a Su voluntad.
                </li>
                <br />
                <li>
                  Si eres casado y tienes problemas en tu matrimonio, invierte
                  en tu matrimonio, ve a la cena del amor y la amistad, pide
                  ayuda a tu mentor, anciano o pastor.
                </li>
              </ol>
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
