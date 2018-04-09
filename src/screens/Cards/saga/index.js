/**
 * Created by sushanta on 4/6/18.
 */
import { put } from 'redux-saga/effects';
import db from '../../../db';
import shortid from 'shortid';
import { addCardDone, fetchCardsDone } from '../actions';

export function* addCard({ item }) {
  const cardItem = item;
  try {
    const id = yield db.cards.put({
      id: shortid.generate(),
      createdAt: Date.now(),
      ...cardItem
    });
    const item = yield db.cards.get(id);
    yield put(addCardDone(item));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchCards({ deckID }) {
  try {
    const items = yield db.cards.where('deckID').equals(deckID).toArray();
    const deck = yield db.decks.get(deckID);
    yield put(fetchCardsDone(items, deck))
  } catch (err) {
    console.log(err);
  }
}