import spellReducer from './spellReducer';
import { updatePlayerSpells, updateOpponentSpell } from '../actions/spellActions';
import { playerSpells, opponentSpell } from '../utilities/test-data';

describe('spellReducer tests', () => {
  it('returns default state', () => {
    const state = {
      playersHand: [],
      opponentsHand: {}
    }

    const action = {
      type: 'Bogus',
      payload: 12312
    }

    const newState = spellReducer(state, action);

    expect(newState).toEqual(state);
  });

  it('updates players hand of spells', () => {
    const state = {
      playersHand: [],
      opponentsHand: {}
    }

    const action = updatePlayerSpells(playerSpells)

    const newState = spellReducer(state, action);

    expect(newState).toEqual({
      playersHand: playerSpells,
      opponentsHand: {}
    });
  });

  it('updates opponent spell', () => {
    const state = {
      playersHand: [],
      opponentsHand: {}
    }

    const action = updateOpponentSpell(opponentSpell)

    const newState = spellReducer(state, action);

    expect(newState).toEqual({
      playersHand: [],
      opponentsHand: opponentSpell
    });
  });
});
