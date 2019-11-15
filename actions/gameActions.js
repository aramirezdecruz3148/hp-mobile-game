export const UPDATE_ROUND_OUTCOME = 'UPDATE_ROUND_OUTCOME';
export const updateRoundOutcome = outcome => ({
  type: UPDATE_ROUND_OUTCOME,
  payload: outcome
});

export const UPDATE_CURRENT_ROUND = 'UPDATE_CURRENT_ROUND';
export const updateCurrentRound = round => ({
  type: UPDATE_CURRENT_ROUND,
  payload: round
});

export const UPDATE_OPPONENT = 'UPDATE_OPPONENT';
export const updateOpponent = opponent => ({
  type: UPDATE_OPPONENT,
  payload: opponent
});
