export const UPDATE_PLAYER_HEALTH = 'UPDATE_PLAYER_HEALTH';
export const updatePlayerHealth = health => ({
  type: UPDATE_PLAYER_HEALTH,
  payload: health
});

export const UPDATE_OPPONENT_HEALTH = 'UPDATE_OPPONENT_HEALTH';
export const updateOpponentHealth = health => ({
  type: UPDATE_OPPONENT_HEALTH,
  payload: health
});