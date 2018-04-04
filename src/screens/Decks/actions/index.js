/**
 * Created by sushanta on 4/4/18.
 */
export const addDeck = name => ({
  type: 'ADD_DECK',
  name
});
export const addDeckDone = item => ({
  type: 'ADD_DECK_DONE',
  item
});
export const fetchDecks = () => ({
  type: 'FETCH_DECKS'
});
export const fetchDecksDone = items => ({
  type: 'FETCH_DECKS_DONE',
  items
});