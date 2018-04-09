/**
 * Created by sushanta on 4/5/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, fetchCards, resetCards } from './actions';
import './index.scss';

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
    if (word && meaning && examples) {
      this.props.addCard({
        word, meaning, examples, deckID: this.props.match.params.deckID
      });
      this.setState({
        word: '',
        meaning: '',
        examples: ''
      });

    }
  };
  render() {
    const { word, meaning, examples } = this.state;
    const { cards, history, deckName } = this.props;
    return (
      <div>
        <div className="add-card-container">
          <div className="header">
            <span
              className="go-back"
              onClick={() => {
                history.goBack();
              }}>
              Back
            </span>
            <span className="title">
              {deckName}
            </span>
          </div>

          <input
            placeholder="Add word..."
            type="text"
            value={word}
            onChange={e => {
              this.setState({ word: e.target.value });
            }} />
          <textarea
            placeholder="Add meaning..."
            rows="3"
            value={meaning}
            onChange={e => {
              this.setState({ meaning: e.target.value });
            }} />
          <textarea
            placeholder="Add examples..."
            rows="3"
            value={examples}
            onChange={e => {
              this.setState({ examples: e.target.value });
            }} />
          <button onClick={this.handleSaveCardBtnClick}>Save</button>
        </div>
        {cards.length > 0
          ? cards.map(card => (
            <div key={card.id} className="card-item">
              <span className="word">{card.word}</span>
              <span className="meaning">{card.meaning}</span>
              <span className="examples">{card.examples}</span>
            </div>
          )) : (
            <span className="no-card">You have not added any cards yet.</span>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.card.items,
  deckName: state.card.deckName
});
const mapDispatchToProps = {
  addCard, fetchCards, resetCards
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);