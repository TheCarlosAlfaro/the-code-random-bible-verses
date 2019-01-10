import React from 'react';
import './bibleVerse.css';

export default class bibleVerse extends React.Component {
  render() {
    let verseClassName = 'instructions';
    if (this.props.verse === 'código incorrecto, vuelva a intentarlo') {
      verseClassName += 'Error';
    }
    return <div className={verseClassName}>{this.props.verse}</div>;
  }
}
