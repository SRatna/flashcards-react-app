/**
 * Created by sushanta on 4/4/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addDeck,
  fetchDecks,
  deleteDeck,
  editDeck
} from './actions';
import DeleteSvg from '../../components/DeleteSvg';
import EditSvg from '../../components/EditSvg';
import './index.scss';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: '',
      beingEdited: null
    };
  }
  componentDidMount() {
    this.props.fetchDecks();
  }
  handleDeckNameInput = e => {
    this.setState({
      deckName: e.target.value
    });
  };
  handleNewDeckSubmission = () => {
    if (this.state.deckName === '') return;
    this.props.addDeck(this.state.deckName);
    this.setState({
      deckName: ''
    });
  };
  handleDeckDeletion = deckID => {
    if (confirm('Do you really want to delete this deck ' +
        'along with its cards?')) {
      this.props.deleteDeck(deckID);
    }
  };
  handleDeckEditBtnClick = deckID => {
    this.setState({
      beingEdited: deckID
    });
  };
  handleDeckUpdate = (deckID, e) => {
    if (e.key === 'Enter') {
      const deckName = e.target.value;
      this.props.editDeck(deckID, deckName);
      this.setState({
        beingEdited: null
      });
    }
  };
  render() {
    return (
      <div>
        <div className="add-deck">
          <input type="text" value={this.state.deckName} onChange={this.handleDeckNameInput}/>
          <button onClick={this.handleNewDeckSubmission}>+</button>
        </div>
        {this.props.decks.length > 0 ? (
          <div className="decks">
            {this.props.decks.map(deck => (
              <div className="deck-item" key={deck.id}>
                {this.state.beingEdited === deck.id ? (
                  <div className="edit-mode">
                    <div className="add-deck">
                      <input
                        autoFocus={true}
                        onKeyPress={(e) => this.handleDeckUpdate(deck.id, e)}
                        type="text"
                        defaultValue={deck.name}/>
                    </div>
                  </div>
                  ) : (
                    <div className="head">
                      <span className="name">{deck.name}</span>
                      <span
                        onClick={() => this.handleDeckDeletion(deck.id)}
                        className="delete">
                          <DeleteSvg />
                      </span>
                      <span
                        onClick={() => this.handleDeckEditBtnClick(deck.id)}
                        className="edit">
                          <EditSvg />
                      </span>
                    </div>
                  )}
                <div className="action-buttons">
                  <button
                    className="view"
                    onClick={() => {
                    this.props.history.push(`cards/${deck.id}`);
                  }}>
                    View
                  </button>
                  <button
                    className="practice"
                    onClick={() => {
                    this.props.history.push(`practice/${deck.id}`);
                  }}>
                    Practice
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <span className="no-deck">
              You have not added any decks yet. Please add some and also add
              flashcards on them and practice those cards.
            </span>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.deck.items
});
const mapDispatchToProps = {
  addDeck, fetchDecks, deleteDeck, editDeck
};
export default connect(mapStateToProps, mapDispatchToProps)(Decks);