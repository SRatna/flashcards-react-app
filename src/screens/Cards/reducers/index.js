/**
 * Created by sushanta on 4/6/18.
 */
const initialState = {
  items: []
};
const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD_DONE':
      return { ...state, items: [...state.items, action.item] };
    case 'FETCH_CARDS_DONE':
      return { ...state, items: action.items };
    case 'RESET_CARDS':
      return initialState;
    default:
      return state
  }
};

export default card;