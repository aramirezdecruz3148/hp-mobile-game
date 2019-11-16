//if I do end up storing which spell is selected in the
// players hand then it would live inside this reducer, action, selector group
import { UPDATE_PLAYER_SPELLS, UPDATE_OPPONENT_SPELL } from '../actions/spellActions';

const initialState = {
  playersHand: [],
  opponentsHand: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PLAYER_SPELLS:
      return { ...state, playersHand: action.payload };
    case UPDATE_OPPONENT_SPELL:
      return { ...state, opponentsHand: action.payload };
    default: 
      return state;
  }
}