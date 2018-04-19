/**
 * Created by sushanta on 4/6/18.
 */
const initialState = {
  items: [],
  deckName: ''
};
const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD_DONE':
      return { ...state, items: [...state.items, action.item] };
    case 'FETCH_CARDS_DONE':
      return { ...state, items: action.items, deckName: action.deck.name };
    case 'RESET_CARDS':
      return initialState;
    case 'DELETE_CARD_DONE':
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.cardID
        )};
    default:
      return state
  }
};

export default card;