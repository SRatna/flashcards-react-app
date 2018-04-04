/**
 * Created by sushanta on 4/4/18.
 */
import { takeLatest, all } from 'redux-saga/effects';
import { addDeck, fetchDecks } from './screens/Decks/saga';
export default function* watcher() {
  yield all([
    takeLatest('ADD_DECK', addDeck),
    takeLatest('FETCH_DECKS', fetchDecks)
  ]);
}