import { UPDATE_PLAYER_HEALTH, UPDATE_OPPONENT_HEALTH } from '../actions/healthActions';

const initialState = {
  player: 10,
  opponent: 10
}

export default function  reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PLAYER_HEALTH:
      return { ...state, player: state.player + action.payload };
    case UPDATE_OPPONENT_HEALTH:
      return { ...state, opponent: state.opponent + action.payload };
    default:
      return state;
  }
}