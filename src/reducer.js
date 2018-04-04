/**
 * Created by sushanta on 4/4/18.
 */
import { combineReducers } from 'redux';
import deck from './screens/Decks/reducers';
const appReducer = combineReducers({
  deck
});

export default appReducer;