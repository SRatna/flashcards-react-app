/**
 * Created by sushanta on 4/4/18.
 */
import { put } from 'redux-saga/effects';
import db from '../../../db';
import shortid from 'shortid';
import { addDeckDone } from '../actions';

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