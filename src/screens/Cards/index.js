/**
 * Created by sushanta on 4/5/18.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCard, fetchCards, resetCards } from './actions';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      meaning: '',
      examples: ''
    }
  }
  componentWillMount() {
    this.props.resetCards();
  }
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.deckID);
  }
  handleSaveCardBtnClick = () => {
    const { word, meaning, examples } = this.state;
    if (word && meaning && examples)
      this.props.addCard({
        word, meaning, examples, deckID: this.props.match.params.deckID
      });
  };
  render() {
    const { word, meaning, examples } = this.state;
    const { cards } = this.props;
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
        {cards.length > 0
          ? cards.map(card => (
            <div key={card.id}>
              <span>{card.word}</span>
            </div>
          )) : (
            <span>You have not added any cards yet.</span>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.card.items
});
const mapDispatchToProps = {
  addCard, fetchCards, resetCards
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);