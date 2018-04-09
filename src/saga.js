/**
 * Created by sushanta on 4/4/18.
 */
import { takeLatest, all } from 'redux-saga/effects';
import { addDeck, fetchDecks } from './screens/Decks/saga';
import { addCard, fetchCards } from './screens/Cards/saga';
export default function* watcher() {
  yield all([
    takeLatest('ADD_DECK', addDeck),
    takeLatest('FETCH_DECKS', fetchDecks),
    takeLatest('ADD_CARD', addCard),
    takeLatest('FETCH_CARDS', fetchCards)
  ]);
}