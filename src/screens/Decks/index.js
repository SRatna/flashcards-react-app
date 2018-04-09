/**
 * Created by sushanta on 4/4/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDeck, fetchDecks } from './actions';
import './index.scss';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: ''
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
  render() {
    return (
      <div>
        <div className="add-deck">
          <input type="text" value={this.state.deckName} onChange={this.handleDeckNameInput}/>
          <button onClick={this.handleNewDeckSubmission}>+</button>
        </div>
        {this.props.decks.length > 0 && (
          <div className="decks">
            {this.props.decks.map(deck => (
              <div className="deck-item" key={deck.id}>
                <span>{deck.name}</span>
                <Link to={`cards/${deck.id}`}>Add new card</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.deck.items
});
const mapDispatchToProps = {
  addDeck, fetchDecks
};
export default connect(mapStateToProps, mapDispatchToProps)(Decks);