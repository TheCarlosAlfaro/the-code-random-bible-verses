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
            <p className="sub-heading">Versículo de esta semana</p>
            <div className="verse__container verse">
              <p>
                <small>5</small> Cuando ustedes oren, no sean como los
                hipócritas, que aman orar de pie en las sinagogas y en las
                esquinas de las calles, para ser vistos por los hombres. De
                cierto les digo que ya tienen su recompensa.
                <br />
                <strong className="verse__ref">(Mateo 6:5 RVA-2015)</strong>
              </p>
            </div>
            <p className="sub-heading">Oración de esta semana</p>
            <div className="verse">
              <p>
                Padre Celestial, te doy gracias por el gran privilegio que me
                das de tener acceso a Tú Presencia a través de la oración.
                <br />
                <br />
                Gracias por considerarme tu amigo, no quiero fallarte, y por eso
                te pido que tu Espíritu Santo ponga en mí el querer como el
                hacer, de hablar contigo todos los días, en todo momento y en
                todo lugar como a mi mejor amigo. Quiero darte lo mejor de mí,
                así como Tú lo has dado todo por mí.
                <br />
                <br />
                Perdóname por no haber valorado antes tu amor, tu tiempo y tu
                sacrificio.
                <br />
                <br />
                Gracias porque a pesar de todo, al momento que te hablo, Tú
                inclinas tu oído para escucharme, y cuando estoy angustiado,
                triste, o pasando alguna situación, Tú me inundas de tu paz, de
                tu amor, renuevas mis fuerzas, me das gozo, me das esperanza y
                me llenas de fe. Gracias porque sé que siempre estás disponible
                para mí 24/7. ¡No hay otro amigo como Tú! ¡Te amo!
              </p>
            </div>
            <p className="sub-heading">
              Tips para que tu oración sea un estilo de vida
            </p>
            <div className="verse">
              <ol>
                <li>
                  Platica con Dios como pláticas con tu mejor amigo, recuerda
                  que Él siempre te escucha. Hazlo desde que te levantas,
                  mientras te arreglas, mientras manejas, mientras trabajas,
                  etc.
                </li>
                <br />
                <li>
                  Cada mañana recuerda que tienes una cita con el Rey de Reyes.
                  ¡No puedes perder tu cita, que gran privilegio Él nos da!
                </li>
                <br />
                <li>
                  Si nunca has orado, comienza con quince minutos, pero que sea
                  tiempo de calidad. Que nada te distraiga, hazlo cuando todavía
                  no se ha levantado nadie en tu casa, o cuando ya todos se
                  fueron.
                </li>
                <br />
                <li>
                  Agrega 5 minutos más cada día a tu tiempo de oración, hasta
                  que logres como mínimo una hora.
                </li>
                <br />
                <li>
                  Si estás pasando alguna situación difícil, ora a Dios; si
                  estás batallando con alguna tentación, ora a Dios; si
                  necesitas paz, ora a Dios; en todo tiempo, ora a Dios.
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
