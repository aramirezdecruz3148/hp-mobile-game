import { 
  getCurrentRound,
  getOpponent,
  getRoundOutcome,
} from './gameSelector';

describe('gameSelector tests', () => {
  it('can get current round', () => {
    const state = {
      game: {
        currentRound: 2,
        opponent: {
          name: 'Vincent Crabbe',
          image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
        },
        roundOutcome: {
          opponentDamage: -3,
          playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
        }
      }
    };

    const currentRound = getCurrentRound(state);
    expect(currentRound).toEqual(2);
  });

  it('can get opponent', () => {
    const state = {
      game: {
        currentRound: 2,
        opponent: {
          name: 'Vincent Crabbe',
          image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
        },
        roundOutcome: {
          opponentDamage: -3,
          playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
        }
      }
    };

    const currentRound = getOpponent(state);
    expect(currentRound).toEqual({
      name: 'Vincent Crabbe',
      image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
    });
  });

  it('can get round outcome', () => {
    const state = {
      game: {
        currentRound: 2,
        opponent: {
          name: 'Vincent Crabbe',
          image: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest/scale-to-width-down/350?cb=20091224183746'
        },
        roundOutcome: {
          opponentDamage: -3,
          playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
        }
      }
    };

    const currentRound = getRoundOutcome(state);
    expect(currentRound).toEqual({
      opponentDamage: -3,
      playerOutcome: 'You were hit with the Furnunculus curse, which caused boils to errupt all over your body and took 4 damage points from your health'
    });
  });
});