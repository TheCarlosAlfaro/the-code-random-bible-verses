import React from 'react';
import './bibleVerse.css';

export default class bibleVerse extends React.Component {
  render() {
    return <div className="verse">{this.props.verse}</div>;
  }
}
