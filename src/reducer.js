/**
 * Created by sushanta on 4/4/18.
 */
import { combineReducers } from 'redux';
import deck from './screens/Decks/reducers';
import card from './screens/Cards/reducers';
const appReducer = combineReducers({
  deck, card
});

export default appReducer;