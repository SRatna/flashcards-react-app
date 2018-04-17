/**
 * Created by sushanta on 4/4/18.
 */
import { put } from 'redux-saga/effects';
import db from '../../../db';
import shortid from 'shortid';
import {
  addDeckDone,
  fetchDecksDone,
  deleteDeckDone,
  editDeckDone
} from '../actions';

export function* addDeck({ name }) {
  try {
    const id = yield db.decks.put({
      id: shortid.generate(),
      createdAt: Date.now(),
      name
    });
    const item = yield db.decks.get(id);
    yield put(addDeckDone(item));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchDecks() {
  try {
    const items = yield db.decks.reverse().sortBy('createdAt');
    yield put(fetchDecksDone(items))
  } catch (err) {
    console.log(err);
  }
}

export function* deleteDeck({ deckID }) {
  try {
    const deleteCount = yield db.decks.where('id').equals(deckID).delete();
    if (deleteCount === 1) {
      yield put(deleteDeckDone(deckID));
      yield db.cards.where('deckID').equals(deckID).delete();
    }
  } catch (err) {
    console.log(err);
  }
}

export function* editDeck({ deckID, name }) {
  try {
    const editCount = yield db.decks.where('id').equals(deckID).modify({ name });
    if (editCount === 1) {
      yield put(editDeckDone(deckID, name));
    }
  } catch (err) {
    console.log(err);
  }
}