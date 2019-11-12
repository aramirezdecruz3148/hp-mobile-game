import { UPDATE_PLAYER_HEALTH, UPDATE_OPPONENT_HEALTH } from '../actions/healthActions';

const initialState = {
  playerHealth: 10,
  opponentHealth: 10
}

export default function  reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PLAYER_HEALTH:
      return { ...state, playerHealth: state.playerHealth + action.payload };
    case UPDATE_OPPONENT_HEALTH:
      return { ...state, opponentHealth: state.opponentHealth + action.payload };
    default:
      return state;
  }
}