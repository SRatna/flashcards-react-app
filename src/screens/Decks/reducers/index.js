/**
 * Created by sushanta on 4/4/18.
 */
const initialState = {
  items: []
};
const deck = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DECK_DONE':
      return { ...state, items: [action.item, ...state.items] };
    case 'FETCH_DECKS_DONE':
      return { ...state, items: action.items };
    default:
      return state
  }
};

export default deck;