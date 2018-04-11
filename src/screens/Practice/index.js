/**
 * Created by sushanta on 4/10/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, resetCards } from '../Cards/actions';
import BackSvg from '../../components/BackSvg';
import './index.scss';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStatus: '',
      wordCount: 0
    };
  }
  componentWillMount() {
    this.props.resetCards();
  }
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.deckID);
  }
  render() {
    const { wordCount } = this.state;
    const { cards, history, deckName } = this.props;
    return (
      <div className="practice">
        <div className="header">
          <span
            className="go-back"
            onClick={() => {
              history.goBack();
            }}>
            <BackSvg/>
          </span>
          <span className="title">
              {deckName}
            </span>
        </div>
        <div className="practice-container">
          {cards.length === 0 && (
            <div>
              No card has been added yet.
            </div>
          )}
          {wordCount < cards.length ? (
            <div className="card-container">
              <div className={`card ${this.state.cardStatus}`}>
                <div className="card-item front">
                  <h1>Word #{wordCount + 1}</h1>
                  <span className="word">
                    {cards[wordCount].word}
                  </span>
                  <div className="action">
                    <span
                      onClick={() => {
                        this.setState({
                          cardStatus: 'flipped'
                        });
                      }}
                      className="button">
                      Tap to see meaning
                    </span>
                  </div>
                </div>
                <div className="card-item back">
                  <h1>{cards[wordCount].word}</h1>
                  <span className="meaning">
                    {cards[wordCount].meaning}
                  </span>
                  <span className="examples">
                    {cards[wordCount].examples}
                  </span>
                  <div className="action">
                    <span
                      onClick={() => {
                        this.setState(prevState => ({
                          cardStatus: 'next',
                          wordCount: prevState.wordCount + 1
                        }));
                      }}
                      className="button positive">
                      I knew the word
                    </span>
                    <span
                      onClick={() => {
                        this.setState({
                          cardStatus: 'next'
                        });
                      }}
                      className="button negative">
                      I didn't know the word
                    </span>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div
                style={{display: `${cards.length === 0 ? 'none' : ''}`}}
                className="all-done">
                <span>All Done.</span>
                <button onClick={() => {
                  this.setState({
                    wordCount: 0
                  });
                }}>Try Again</button>
              </div>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.card.items,
  deckName: state.card.deckName
});
const mapDispatchToProps = {
  fetchCards, resetCards
};
export default connect(mapStateToProps, mapDispatchToProps)(Practice);
