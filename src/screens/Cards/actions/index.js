/**
 * Created by sushanta on 4/6/18.
 */
export const addCard = item => ({
  type: 'ADD_CARD',
  item
});
export const addCardDone = item => ({
  type: 'ADD_CARD_DONE',
  item
});
export const fetchCards = deckID => ({
  type: 'FETCH_CARDS',
  deckID
});
export const fetchCardsDone = (items, deck) => ({
  type: 'FETCH_CARDS_DONE',
  items, deck
});
export const resetCards = () => ({
  type: 'RESET_CARDS'
});
export const deleteCard = cardID => ({
  type: 'DELETE_CARD',
  cardID
});
export const deleteCardDone = cardID => ({
  type: 'DELETE_CARD_DONE',
  cardID
});