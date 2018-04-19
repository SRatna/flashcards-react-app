/**
 * Created by sushanta on 4/5/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addCard,
  fetchCards,
  resetCards,
  deleteCard
} from './actions';
import BackSvg from '../../components/BackSvg';
import AddEditCardModal from './components/AddEditCardModal';
import EditSvg from '../../components/EditSvg';
import DeleteSvg from '../../components/DeleteSvg';
import './index.scss';

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
        <AddEditCardModal
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
          <span
            onClick={() => {
              history.push(`/practice/${match.params.deckID}`)
            }}
            className="play">
            Play
          </span>
        </div>
        <div className="cards">
          {cards.length > 0
            ? cards.map(card => (
              <div key={card.id} className="card-item">
                <div className="word-actions">
                  <span className="word">{card.word}</span>
                  <span
                    onClick={() => null}
                    className="edit">
                    <EditSvg/>
                  </span>
                  <span
                    onClick={() => this.props.deleteCard(card.id)}
                    className="delete">
                    <DeleteSvg/>
                  </span>
                </div>
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
  addCard, fetchCards, resetCards, deleteCard
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);