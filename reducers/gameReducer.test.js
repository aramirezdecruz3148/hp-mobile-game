import gameReducer from './gameReducer';
import { updateRoundOutcome, updateCurrentRound, updateOpponent, UPDATE_OPPONENT, UPDATE_CURRENT_ROUND, UPDATE_ROUND_OUTCOME } from '../actions/gameActions';

describe('gameReducer tests', () => {
  it('returns default state', () => {
    const state = {
      currentRound: 2,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    };

    const action = {
      type: 'Bogus',
      payload: 12312
    };

    const newState = gameReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('returns current game round', () => {
    const state = {
      currentRound: 2,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    };

    const action = {
      type: UPDATE_CURRENT_ROUND,
      payload: 3
    };

    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      currentRound: 3,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    });
  });

  it('returns current opponent', () => {
    const state = {
      currentRound: 2,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    };

    const action = {
      type: UPDATE_OPPONENT,
      payload: {
        name: 'Barty Crouch Jr.',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/a0/Barty_Crouch%2C_Jr.jpg/revision/latest/scale-to-width-down/319?cb=20161221034115'
      }
    };

    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      currentRound: 2,
      opponent: {
        name: 'Barty Crouch Jr.',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/a0/Barty_Crouch%2C_Jr.jpg/revision/latest/scale-to-width-down/319?cb=20161221034115'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    });
  });

  it('returns round outcome', () => {
    const state = {
      currentRound: 2,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -3,
        playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
      }
    };

    const action = {
      type: UPDATE_ROUND_OUTCOME,
      payload: {
        opponentDamage: -4,
        playerOutcome: 'You were hit with the Immobulus Charm, which rendered you completely immobile and took 4 damage points from your health'
      }
    };

    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      currentRound: 2,
      opponent: {
        name: 'Vincent Crabbe',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
      },
      roundOutcome: {
        opponentDamage: -4,
        playerOutcome: 'You were hit with the Immobulus Charm, which rendered you completely immobile and took 4 damage points from your health'
      }
    });
  });
});