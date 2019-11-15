import { 
  UPDATE_ROUND_OUTCOME, 
  UPDATE_OPPONENT, 
  UPDATE_CURRENT_ROUND } from '../actions/gameActions';

const initialState = {
  currentRound: 0,
  opponent: {},
  roundOutcome: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CURRENT_ROUND:
      return { ...state, currentRound: action.payload };
    case UPDATE_OPPONENT:
      return { ...state, opponent: action.payload };
    case UPDATE_ROUND_OUTCOME:
      return { ...state, roundOutcome: action.payload };
    default:
      return state;
  }
}