import { 
  updatePlayerHealth, 
  updateOpponentHealth, 
  UPDATE_PLAYER_HEALTH, 
  UPDATE_OPPONENT_HEALTH 
} from './healthActions';

describe('healthActions tests', () => {
  it('can return player health in payload', () => {
    const action = updatePlayerHealth(4);

    expect(action).toEqual({
      type: UPDATE_PLAYER_HEALTH,
      payload: 4
    });
  });

  it('can return opponent health in payload', () => {
    const action = updateOpponentHealth(7);

    expect(action).toEqual({
      type: UPDATE_OPPONENT_HEALTH,
      payload: 7
    });
  });
});