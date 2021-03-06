import healthReducer from './healthReducer';
import { updatePlayerHealth, updateOpponentHealth } from '../actions/healthActions';

describe('healthReducer tests', () => {
  it('returns default state', () => {
    const state = {
      player: 10, 
      opponent: 10
    };

    const action = {
      type: 'Bogus',
      payload: 12312
    };

    const newState = healthReducer(state, action);
    
    expect(newState).toEqual(state);
  });

  it('updates player health', () => {
    const state = {
      player: 10, 
      opponent: 10
    };

    const action = updatePlayerHealth(-6);

    const newState = healthReducer(state, action);
    
    expect(newState).toEqual({
      player: 4,
      opponent: 10
    });
  });

  it('updates opponent health', () => {
    const state = {
      player: 10, 
      opponent: 10
    };

    const action = updateOpponentHealth(-3);

    const newState = healthReducer(state, action);
    
    expect(newState).toEqual({
      player: 10,
      opponent: 7
    });
  });
});