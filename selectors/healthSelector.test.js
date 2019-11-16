import { getPlayerHealth, getOpponentHealth } from './healthSelector';

describe('selectors test', () => {
  it('retrieves playerHealth from state', () => {
    const state = {
      health: {
        player: 8, 
        opponent: 5
      }
    };

    const playerHealth = getPlayerHealth(state);

    expect(playerHealth).toEqual(8);
  });

  it('retrieves opponentHealth from state', () => {
    const state = {
      health: {
        player: 8, 
        opponent: 5
      }
    };

    const opponentHealth = getOpponentHealth(state);

    expect(opponentHealth).toEqual(5);
  });
});
