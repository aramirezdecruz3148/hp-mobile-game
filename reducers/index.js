import { combineReducers } from 'redux';
import health from './healthReducer';
import spells from './spellReducer';

export default combineReducers({
  health,
  spells
});