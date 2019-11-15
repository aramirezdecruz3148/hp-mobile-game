import { combineReducers } from 'redux';
import health from './healthReducer';
import spells from './spellReducer';
import game from './gameReducer';

export default combineReducers({
  health,
  spells,
  game
});