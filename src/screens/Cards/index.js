/**
 * Created by sushanta on 4/5/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard, fetchCards, resetCards } from './actions';
import AddCardModal from './components/AddCardModal';
import './index.scss';

const BackSvg = () => (
  <svg x="0px" y="0px" viewBox="0 0 31.494 31.494" width="20px" height="20px">
    <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z" fill="#FFFFFF"/>
  </svg>
);

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCardModalVisibility: false
    }
  }
  componentWillMount() {
    this.props.resetCards();
  }
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.deckID);
  }

  render() {
    const { cards, history, deckName, match, addCard } = this.props;
    return (
      <div className="cards-container">
        <AddCardModal
          visibility={this.state.addCardModalVisibility}
          deckID={match.params.deckID}
          addCard={addCard}
          closeModal={() => {
            this.setState({
              addCardModalVisibility: false
            })
          }}
        />
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
        <div className="cards">
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
          <div className="add-card">
            <button onClick={() => {
              this.setState({
                addCardModalVisibility: true
              })
            }}>+</button>
          </div>
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
  addCard, fetchCards, resetCards
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);