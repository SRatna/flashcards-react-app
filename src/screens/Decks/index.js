/**
 * Created by sushanta on 4/4/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck } from './actions';

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: ''
    };
  }
  componentDidMount() {

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
        <input type="text" value={this.state.deckName} onChange={this.handleDeckNameInput}/>
        <button onClick={this.handleNewDeckSubmission}>Submit</button>
        {this.props.decks.length > 0 && (
          <div>
            {this.props.decks.map(deck => (
              <span>{deck.name}</span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.deck.items
  }
};
const mapDispatchToProps = {
  addDeck
};
export default connect(mapStateToProps, mapDispatchToProps)(Decks);