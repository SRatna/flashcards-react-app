/**
 * Created by sushanta on 4/10/18.
 */
import React, { Component } from 'react';
import './index.scss';

class AddEditCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      meaning: '',
      examples: '',
      editMode: false,
      cardId: null
    };
  }
  componentWillReceiveProps(nextProps) {
    const { cardData, editMode } = nextProps;
    this.setState({
      word: cardData.word || '',
      meaning: cardData.meaning || '',
      examples: cardData.examples || '',
      editMode,
      cardId: cardData.id || null
    });
  }
  handleSaveCardBtnClick = () => {
    const { word, meaning, examples, editMode, cardId } = this.state;
    const { addCard, editCard, closeModal, deckID} = this.props;
    if (word && meaning && examples) {
      editMode
        ? editCard({
          word, meaning, examples, deckID, id: cardId
        })
        : addCard({
          word, meaning, examples, deckID
        });
      closeModal();
    }
  };
  render() {
    const { word, meaning, examples, editMode } = this.state;
    const { visibility, closeModal } = this.props;
    return (
      <div
        className={`add-card-modal ${visibility ? 'visible' : 'invisible'}`}>
        <div className="content">
          <div className="modal-header">
            <span className="modal-title">
              {editMode ? 'Edit Card' : 'Add New Card'}
            </span>
          </div>
          <div className="body">
            <input
              placeholder="Add word..."
              type="text"
              value={word}
              onChange={e => this.setState({ word: e.target.value })} />
            <textarea
              placeholder="Add meaning..."
              rows="5"
              value={meaning}
              onChange={e => this.setState({ meaning: e.target.value })} />
            <textarea
              placeholder="Add examples..."
              rows="5"
              value={examples}
              onChange={e => this.setState({ examples: e.target.value })} />
            <div className="modal-actions">
              <button onClick={this.handleSaveCardBtnClick}>Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddEditCardModal;