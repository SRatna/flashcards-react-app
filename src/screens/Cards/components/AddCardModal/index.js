/**
 * Created by sushanta on 4/10/18.
 */
import React, { Component } from 'react';
import './index.scss';

class AddCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      meaning: '',
      examples: ''
    }
  }
  handleSaveCardBtnClick = () => {
    const { word, meaning, examples } = this.state;
    if (word && meaning && examples) {
      this.props.addCard({
        word, meaning, examples, deckID: this.props.deckID
      });
      this.setState({
        word: '',
        meaning: '',
        examples: ''
      });
      this.props.closeModal();
    }
  };
  render() {
    const { word, meaning, examples } = this.state;
    const { visibility, closeModal } = this.props;
    return (
      <div
        className={`add-card-modal ${visibility ? 'visible' : 'invisible'}`}>
        <div className="content">
          <div className="modal-header">
            <span className="modal-title">
              Add New Card
            </span>
            <span
              onClick={closeModal}
              className="close">
              &times;
            </span>
          </div>
          <div className="body">
            <input
              placeholder="Add word..."
              type="text"
              value={word}
              onChange={e => {
                this.setState({ word: e.target.value });
              }} />
            <textarea
              placeholder="Add meaning..."
              rows="5"
              value={meaning}
              onChange={e => {
                this.setState({ meaning: e.target.value });
              }} />
            <textarea
              placeholder="Add examples..."
              rows="5"
              value={examples}
              onChange={e => {
                this.setState({ examples: e.target.value });
              }} />
            <button onClick={this.handleSaveCardBtnClick}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddCardModal;