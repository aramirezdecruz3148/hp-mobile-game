import { 
  updateRoundOutcome, 
  updateCurrentRound, 
  updateOpponent, 
  UPDATE_ROUND_OUTCOME, 
  UPDATE_CURRENT_ROUND, 
  UPDATE_OPPONENT
} from './gameActions';

describe('gameActions tests', () => {
  it('can return round outcome in payload', () => {
    const action = updateRoundOutcome({
      opponentDamage: -3,
      playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
    });

    expect(action).toEqual({
      type: UPDATE_ROUND_OUTCOME,
      payload: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    })
  });

  it('can return current round in payload', () => {
    const action = updateCurrentRound(2);

    expect(action).toEqual({
      type: UPDATE_CURRENT_ROUND,
      payload: 2
    })
  });

  it('can return opponent in payload', () => {
    const action = updateOpponent({
      name: "Vincent Crabbe",
      image: "https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746"
    });

    expect(action).toEqual({
      type: UPDATE_OPPONENT,
      payload: {
        name: "Vincent Crabbe",
        image: "https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746"
      }
    })
  });
});