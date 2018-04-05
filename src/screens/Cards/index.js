/**
 * Created by sushanta on 4/5/18.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      meaning: '',
      examples: ''
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.deckID);
  }
  handleSaveCardBtnClick = () => {
    const { word, meaning, examples } = this.state;
    console.log(word, meaning, examples);
  };
  render() {
    const { word, meaning, examples } = this.state;
    return (
      <div>
        <Link to="/">Back</Link>
        <br />
        <input
          placeholder="Add word..."
          type="text"
          value={word}
          onChange={e => {
          this.setState({ word: e.target.value });
        }} />
        <textarea
          placeholder="Add meaning..."
          cols="40"
          rows="5"
          value={meaning}
          onChange={e => {
          this.setState({ meaning: e.target.value });
        }} />
        <textarea
          placeholder="Add examples..."
          cols="40"
          rows="5"
          value={examples}
          onChange={e => {
          this.setState({ examples: e.target.value });
        }} />
        <button onClick={this.handleSaveCardBtnClick}>Save</button>
        <br />
        <span>You have not added any cards yet.</span>
      </div>
    )
  }
}

export default Cards;